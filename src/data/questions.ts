import questionsData from './questions.json';
import { Question } from '@/types/quiz';

export const allQuestions: Question[] = questionsData as unknown as Question[];

export const questionsMap = new Map<number, Question>(
  allQuestions.map((q) => [q.id, q])
);

export function getQuestionById(id: number): Question | undefined {
  return questionsMap.get(id);
}

export function getQuestionsByModule(section: number, module: number): Question[] {
  return allQuestions.filter((q) => q.section === section && q.module === module);
}

export function getAllSectionsAndModules(): {
  section: number;
  modules: { module: number; questionCount: number; questionIds: number[] }[];
}[] {
  const sectionsMap = new Map<number, Map<number, number[]>>();

  for (const q of allQuestions) {
    if (!sectionsMap.has(q.section)) {
      sectionsMap.set(q.section, new Map());
    }
    const sec = sectionsMap.get(q.section)!;
    if (!sec.has(q.module)) {
      sec.set(q.module, []);
    }
    sec.get(q.module)!.push(q.id);
  }

  const result: {
    section: number;
    modules: { module: number; questionCount: number; questionIds: number[] }[];
  }[] = [];

  for (let s = 1; s <= 7; s++) {
    const modsMap = sectionsMap.get(s) || new Map();
    const modules: { module: number; questionCount: number; questionIds: number[] }[] = [];
    for (let m = 1; m <= 4; m++) {
      const qIds = modsMap.get(m) || [];
      modules.push({
        module: m,
        questionCount: qIds.length,
        questionIds: qIds,
      });
    }
    result.push({
      section: s,
      modules,
    });
  }

  return result;
}
