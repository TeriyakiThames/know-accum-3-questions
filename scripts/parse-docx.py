import os
import re
import json
import zipfile
import xml.etree.ElementTree as ET

DOCX_PATH = r"C:\Users\ASUS\Downloads\Know Accum 3 Quizzes_Final.docx"
PUBLIC_IMG_DIR = os.path.join("public", "images", "questions")
DATA_DIR = os.path.join("src", "data")
OUTPUT_JSON = os.path.join(DATA_DIR, "questions.json")

os.makedirs(PUBLIC_IMG_DIR, exist_ok=True)
os.makedirs(DATA_DIR, exist_ok=True)

with zipfile.ZipFile(DOCX_PATH, "r") as z:
    # 1. Parse answers from all footers
    answers = {}
    for name in z.namelist():
        if "footer" in name:
            try:
                txt = "".join(ET.fromstring(z.read(name)).itertext()).strip()
                matches = re.findall(r"(\d+)\s*([A-Za-z]+)", txt)
                for num, ans in matches:
                    answers[int(num)] = [c.upper() for c in ans.upper() if c.upper() in ["A", "B", "C", "D"]]
            except Exception as e:
                print(f"Error parsing {name}: {e}")

    print(f"Parsed answers for {len(answers)} questions.")

    # 2. Extract media and relationships
    rels_content = z.read("word/_rels/document.xml.rels")
    rels_tree = ET.fromstring(rels_content)
    media_rels = {}
    for rel in rels_tree:
        if "image" in rel.attrib.get("Type", ""):
            media_rels[rel.attrib["Id"]] = rel.attrib["Target"]

    doc_tree = ET.fromstring(z.read("word/document.xml"))

    # Map question to image target
    q_to_image = {}
    current_q_for_img = None
    for elem in doc_tree.iter():
        text = "".join(elem.itertext()).strip()
        if elem.tag.endswith("}p"):
            q_m = re.match(r"^(\d+)\.", text)
            if q_m:
                current_q_for_img = int(q_m.group(1))
        if elem.tag.endswith("}blip") and current_q_for_img:
            embed_id = elem.attrib.get("{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed")
            target = media_rels.get(embed_id)
            if target:
                q_to_image[current_q_for_img] = target

    # Extract images to public directory
    img_path_map = {}
    for q_id, target in q_to_image.items():
        zip_img_path = target if target.startswith("word/") else "word/" + target
        filename = f"q_{q_id}_{os.path.basename(target)}"
        dest_path = os.path.join(PUBLIC_IMG_DIR, filename)
        with open(dest_path, "wb") as f_out:
            f_out.write(z.read(zip_img_path))
        img_path_map[q_id] = f"/images/questions/{filename}"
        print(f"Extracted image for Q{q_id} -> {img_path_map[q_id]}")

    # 3. Parse paragraphs into sections, modules, questions, and options
    paragraphs = []
    for p in doc_tree.iter("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p"):
        p_text = "".join(p.itertext()).strip()
        if p_text:
            paragraphs.append(p_text)

    questions = []
    current_sec = 0
    current_mod = 0
    current_q_num = None
    curr_q_data = None
    q_in_module = 0

    for p in paragraphs:
        sec_m = re.match(r"Section\s*(\d+)\s*:\s*Module\s*(\d+)", p, re.I)
        if sec_m:
            if curr_q_data:
                questions.append(curr_q_data)
                curr_q_data = None
            current_sec = int(sec_m.group(1))
            current_mod = int(sec_m.group(2))
            q_in_module = 0
            continue

        q_m = re.match(r"^(\d+)\.\s*(.*)", p)
        if q_m:
            if curr_q_data:
                questions.append(curr_q_data)
            current_q_num = int(q_m.group(1))
            q_in_module += 1
            curr_q_data = {
                "id": current_q_num,
                "section": current_sec,
                "module": current_mod,
                "questionNumberInModule": q_in_module,
                "prompt": q_m.group(2).strip(),
                "options": {},
                "correctAnswers": answers.get(current_q_num, []),
                "isMultiple": False,
                "image": img_path_map.get(current_q_num)
            }
            continue

        opt_m = re.match(r"^([a-d])\.\s*(.*)", p, re.I)
        if opt_m and curr_q_data is not None:
            curr_q_data["options"][opt_m.group(1).upper()] = opt_m.group(2).strip()
        elif curr_q_data is not None and not curr_q_data["options"]:
            # Continuation of the prompt
            curr_q_data["prompt"] += " " + p.strip()

    if curr_q_data:
        questions.append(curr_q_data)

    # Post-process: determine isMultiple and validate
    for q in questions:
        # Check if multiple choice
        if len(q["correctAnswers"]) > 1 or "select all that apply" in q["prompt"].lower():
            q["isMultiple"] = True
        else:
            q["isMultiple"] = False

    print(f"Total parsed questions: {len(questions)}")
    assert len(questions) == 260, f"Expected 260 questions, got {len(questions)}"
    for q in questions:
        assert len(q["options"]) == 4, f"Question {q['id']} has {len(q['options'])} options"
        assert len(q["correctAnswers"]) > 0, f"Question {q['id']} has no correct answers"

    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(questions, f, ensure_ascii=False, indent=2)

    print(f"Successfully generated {OUTPUT_JSON} with 260 verified questions!")
