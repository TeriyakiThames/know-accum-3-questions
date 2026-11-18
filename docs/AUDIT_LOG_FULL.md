# Complete Quiz Bank Audit Log & Verification Report

> **Prepared for External AI & Human Audit Review**
> **Curriculum:** Google Data Analytics Professional Certificate (Courses 1 through 7)
> **Total Questions Audited:** 260 | **Flagged / Corrected:** 28 | **Images Attached:** 12

This comprehensive audit log contains the complete prompt, full options list (A-D), associated figures, verified correct answers, and educational rationales for all questions, specifically structured for AI audit validation.

---

# Part 1: Flagged Discrepancies & Deep-Dive Audit (28 Questions)

The following 28 questions were identified with typographical footer errors, option clipping, or answer mismatches from the original `Know Accum 3 Quizzes_Final.docx`. Review the full question, choices, previous vs. corrected answers, and educational rationales below:

### Question #89 — Course 3: Prepare Data for Exploration (Module 2, Q8)
**Type:** Single Choice

**Prompt:**
> A government agency allows any business, nonprofit, or citizen to access its databases and reuse or redistribute the data. What type of data is described in this scenario?

**Options:**
- **A.** ⚪ Free
- **B.** ✅ Open
- **C.** ⚪ Closed
- **D.** ⚪ Allowable

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `D` |
| **Verified Correct Answer** | **`B`** |

**Why this is correct:**
> Open data is publicly accessible data that anyone can freely access, use, modify, and redistribute without commercial or proprietary restrictions.

---
### Question #91 — Course 3: Prepare Data for Exploration (Module 2, Q10)
**Type:** Single Choice

**Prompt:**
> Data anonymization is a common practice used to protect sensitive information. Which of the following types of data should always be anonymized before analysis?

**Options:**
- **A.** ⚪ Customer purchase history with categories.
- **B.** ⚪ Website data without usernames.
- **C.** ⚪ Hair color and age of participants.
- **D.** ✅ Social security numbers and medical records

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `C` |
| **Verified Correct Answer** | **`D`** |

**Why this is correct:**
> Personally Identifiable Information (PII) such as Social Security Numbers and sensitive medical records must always be anonymized to prevent identity theft and comply with data privacy laws.

---
### Question #92 — Course 3: Prepare Data for Exploration (Module 3, Q1)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: Data professionals use data _____ to control their company’s data and make sure data assets are formally managed.

**Options:**
- **A.** ✅ governance
- **B.** ⚪ aggregation
- **C.** ⚪ strategy
- **D.** ⚪ mapping

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `B` |
| **Verified Correct Answer** | **`A`** |

**Why this is correct:**
> Data governance is the comprehensive management framework and set of controls ensuring an organization's data assets remain secure, consistent, accurate, and properly utilized.

---
### Question #94 — Course 3: Prepare Data for Exploration (Module 3, Q3)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following statements accurately describe primary and foreign keys in a relational database? Select all that apply.

**Options:**
- **A.** ⚪ A foreign key uniquely identifies a record in the table in which it is located.
- **B.** ✅ A foreign key is a field within a table that is a primary key in another table.
- **C.** ✅ A table can have multiple foreign keys.
- **D.** ✅ Primary keys are unique.

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `A` |
| **Verified Correct Answer** | **`B, C, D`** |

**Why this is correct:**
> In relational databases, primary keys uniquely identify records within their own table, while foreign keys reference primary keys in other tables. A single table can contain multiple foreign keys to establish relationships across different entities.

---
### Question #95 — Course 3: Prepare Data for Exploration (Module 3, Q4)
**Type:** Single Choice

**Prompt:**
> A data analyst runs the following query. What do they want to retrieve from the database? SELECT * FROM ArtDisplays WHERE Medium = 'sculpture';

**Options:**
- **A.** ✅ All fields of the art displays of sculptures
- **B.** ⚪ All fields of the mediums in art displays
- **C.** ⚪ All fields of the art displays
- **D.** ⚪ All fields of the art displays that are not sculptures

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `B` |
| **Verified Correct Answer** | **`A`** |

**Why this is correct:**
> The SQL statement `SELECT *` retrieves all columns from the `ArtDisplays` table, while the `WHERE Medium = 'sculpture'` clause filters rows to include only sculpture exhibits.

---
### Question #96 — Course 3: Prepare Data for Exploration (Module 3, Q5)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> What are some benefits of using external data for an analysis project? Select all that apply.

**Options:**
- **A.** ✅ External data provides industry-level perspectives.
- **B.** ⚪ External data is always open and free to use.
- **C.** ⚪ External data is very reliable and comes pre-cleaned.
- **D.** ✅ External data, when validated and trusted, provides more data points and helps analysts identify broad insights.

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `C` |
| **Verified Correct Answer** | **`A, D`** |

**Why this is correct:**
> External data enriches internal analyses by providing broader industry benchmarks and macro insights when properly vetted. External data is not always pre-cleaned or free to use.

---
### Question #97 — Course 3: Prepare Data for Exploration (Module 3, Q6)
**Type:** Single Choice

**Prompt:**
> A data team at a trade school is sending a text alert to all students who have fewer than 10 credits. What spreadsheet tool will enable them to display only the students who meet that condition?

**Options:**
- **A.** ⚪ Sort the number of student credits in ascending order
- **B.** ⚪ Sort the number of student credits in descending order
- **C.** ⚪ Filter the data to show only students with more than 10 credits
- **D.** ✅ Filter the data to show only students who have fewer than 10 credits

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `C` |
| **Verified Correct Answer** | **`D`** |

**Why this is correct:**
> Applying a spreadsheet filter to display values where student credits are less than 10 isolates the exact group required for the low-credit notification alert.

---
### Question #98 — Course 3: Prepare Data for Exploration (Module 3, Q7)
**Type:** Single Choice

**Prompt:**
> A data analyst at a retail company uses SQL to explore the data in its customer database. They want to examine the order_date field in the CustomerPurchases table to understand when customers make purchases. What query should they write to return only this column of information?

**Options:**
- **A.** ⚪ `SELECT CustomerPurchases FROM order_date;`
- **B.** ⚪ `SELECT * FROM CustomerPurchases WHERE field = "order_date";`
- **C.** ⚪ `SELECT * FROM CustomerPurchases;`
- **D.** ✅ `SELECT order_date FROM CustomerPurchases;`

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `D` |
| **Verified Correct Answer** | **`D`** |
| **Option Fix** | Restored truncated/scrambled options |

**Why this is correct:**
> In SQL, specifying the column name after `SELECT` (rather than using the `*` wildcard) restricts the output to only that column from the specified table.

---
### Question #99 — Course 3: Prepare Data for Exploration (Module 3, Q8)
**Type:** Single Choice

**Prompt:**
> Which SQL statement will return only pine trees from the Species column of the Trees database table?

**Options:**
- **A.** ⚪ `SELECT * FROM Trees WHERE 'pine';`
- **B.** ⚪ `SELECT * WHERE 'pine';`
- **C.** ✅ `SELECT * FROM Trees WHERE Species = 'pine';`
- **D.** ⚪ `SELECT * FROM Species = 'pine';`

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `C` |
| **Verified Correct Answer** | **`C`** |
| **Option Fix** | Restored truncated/scrambled options |

**Why this is correct:**
> The correct SQL syntax to filter records requires `SELECT * FROM TableName WHERE ColumnName = 'value'`. Option C properly targets the Trees table with `WHERE Species = 'pine'`.

---
### Question #125 — Course 4: Process Data from Dirty to Clean (Module 2, Q8)
**Type:** Single Choice

**Prompt:**
> A junior data analyst needs to search their spreadsheet for a particular client ID. In order to identify all cells containing the ID, they use a spreadsheet tool that changes how cells appear when values meet specific conditions. What tool do they use?

**Options:**
- **A.** ✅ Conditional formatting
- **B.** ⚪ Field length
- **C.** ⚪ Data merging
- **D.** ⚪ Cell filtering

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `C` |
| **Verified Correct Answer** | **`A`** |

**Why this is correct:**
> Conditional formatting dynamically alters the background color, font, or styling of cells based on specified criteria or rules, making matching client IDs visually stand out.

---
### Question #126 — Course 4: Process Data from Dirty to Clean (Module 2, Q9)
**Type:** Single Choice

**Prompt:**
> The owner of a local landscaping business just acquired the customers from another landscaping business where the owner retired. Both owners had created their own databases containing customer information, including names, phone numbers, and services requested. The new owner wants to combine this customer data into a single, unified database so that they have everything in one place. However, there might be duplicates like customers who used both services and inconsistencies like differences in how names or phone numbers are entered in the data. What is the most important step to take before the new owner starts analyzing customer data for marketing campaigns?

**Options:**
- **A.** ⚪ Develop targeted marketing campaigns for the new customer base.
- **B.** ✅ Data mapping to standardize, merge, and clean the data from both databases.
- **C.** ⚪ Use VLOOKUP to merge the customer email addresses.
- **D.** ⚪ Design attractive visualizations for presenting the combined data.

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `D` |
| **Verified Correct Answer** | **`B`** |

**Why this is correct:**
> Before combining customer databases for marketing analysis, data mapping is the essential first step to align fields, eliminate duplicates, and resolve naming inconsistencies between the legacy systems.

---
### Question #127 — Course 4: Process Data from Dirty to Clean (Module 2, Q10)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> You are a new data analyst and you want to make sure to avoid common pitfalls when cleaning data. Which of the following steps should you take to ensure a smooth and accurate data cleaning process? Select all that apply.

**Options:**
- **A.** ✅ Examine the data to understand the data cleaning needs before you start.
- **B.** ⚪ Identify and address spelling errors before you start.
- **C.** ✅ Focus on cleaning a small sample set of the data first.
- **D.** ⚪ Clean the data before making a backup copy.

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `B` |
| **Verified Correct Answer** | **`A, C`** |

**Why this is correct:**
> Effective data cleaning best practices include examining the dataset upfront to diagnose cleaning requirements and testing transformation workflows on a small sample set before running them on full data files.

---
### Question #128 — Course 4: Process Data from Dirty to Clean (Module 3, Q1)
**Type:** Single Choice

**Prompt:**
> A data analyst at a logistics company is tasked with analyzing routes and transit times for all orders. The current database of orders contains millions of rows. What tool would be most efficient for the analyst to use?

**Options:**
- **A.** ⚪ Spreadsheet
- **B.** ⚪ CSV
- **C.** ⚪ Word processor
- **D.** ✅ SQL

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `C` |
| **Verified Correct Answer** | **`D`** |

**Why this is correct:**
> SQL relational databases are specifically designed to query and process datasets containing millions of records with high speed and reliability, far outperforming spreadsheets or word processors.

---
### Question #129 — Course 4: Process Data from Dirty to Clean (Module 3, Q2)
**Type:** Single Choice

**Prompt:**
> A data analyst discovers that their database has recognized product price data as text strings. What SQL function can the analyst use to convert the text strings to floats?

**Options:**
- **A.** ⚪ SUBSTR
- **B.** ✅ CAST
- **C.** ⚪ LENGTH
- **D.** ⚪ TRIM

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `C` |
| **Verified Correct Answer** | **`B`** |

**Why this is correct:**
> The `CAST` function converts an expression or column from one data type to another, such as converting text strings representing numbers into floating-point numbers.

---
### Question #130 — Course 4: Process Data from Dirty to Clean (Module 3, Q3)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: A junior data analyst in the engineering department uses the SQL command _____ to add a new row of product specification data to their organization’s database.

**Options:**
- **A.** ⚪ UPDATE
- **B.** ✅ INSERT INTO
- **C.** ⚪ DROP TABLE IF EXISTS
- **D.** ⚪ CREATE TABLE IF NOT EXISTS

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `A` |
| **Verified Correct Answer** | **`B`** |

**Why this is correct:**
> The `INSERT INTO` command is the standard SQL statement used to add new rows of data into an existing database table.

---
### Question #131 — Course 4: Process Data from Dirty to Clean (Module 3, Q4)
**Type:** Single Choice

**Prompt:**
> You are working with a database table that has columns about trees, such as tree_species. Which SUBSTR function and AS command will retrieve the first 3 characters of each species name and store the result in a new column called species_ID?

**Options:**
- **A.** ⚪ SUBSTR(tree_species, 3) AS species_ID
- **B.** ⚪ SUBSTR AS (tree_species 1, 3) species_ID
- **C.** ✅ SUBSTR(tree_species, 1, 3) AS species_ID
- **D.** ⚪ SUBSTR(tree_species, 1, 3 AS) species_ID

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `B` |
| **Verified Correct Answer** | **`C`** |

**Why this is correct:**
> In SQL, `SUBSTR(string, start_position, length)` extracts a substring, and the `AS` keyword assigns an alias name to the resulting column. `SUBSTR(tree_species, 1, 3) AS species_ID` is the proper syntax.

---
### Question #132 — Course 4: Process Data from Dirty to Clean (Module 3, Q5)
**Type:** Single Choice

**Prompt:**
> In SQL, what function can be used to remove duplicate spaces from a piece of data?

**Options:**
- **A.** ⚪ AVG
- **B.** ⚪ FORMAT
- **C.** ✅ TRIM
- **D.** ⚪ SUBSTR

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `B` |
| **Verified Correct Answer** | **`C`** |

**Why this is correct:**
> The SQL `TRIM` function strips unwanted leading, trailing, and duplicate whitespace characters from string data.

---
### Question #133 — Course 4: Process Data from Dirty to Clean (Module 3, Q6)
**Type:** Single Choice

**Prompt:**
> While working with a database table that contains the column computer_model, you notice that there are some duplicate entries. Which SQL clause would you use in a query to return the computer_model data without these duplicates?

**Options:**
- **A.** ✅ DISTINCT computer_model
- **B.** ⚪ DROP computer_model
- **C.** ⚪ DELETE computer_model
- **D.** ⚪ DUPLICATE computer_model

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `B` |
| **Verified Correct Answer** | **`A`** |

**Why this is correct:**
> The `DISTINCT` keyword in a `SELECT` statement filters out duplicate rows from the query output, returning only unique values for the specified column.

---
### Question #134 — Course 4: Process Data from Dirty to Clean (Module 3, Q7)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: The SQL command _____ is irreversible, so data analysts should consider whether data should be backed up before using it.

**Options:**
- **A.** ⚪ INSERT INTO
- **B.** ⚪ CREATE TABLE IF NOT EXISTS
- **C.** ⚪ UPDATE
- **D.** ✅ DROP TABLE IF EXISTS

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `A` |
| **Verified Correct Answer** | **`D`** |

**Why this is correct:**
> The `DROP TABLE IF EXISTS` command permanently removes an entire database table and all its stored records without an undo option, making prior data backups critical.

---
### Question #135 — Course 4: Process Data from Dirty to Clean (Module 3, Q8)
**Type:** Single Choice

**Prompt:**
> You are using a database table that includes the column user_password, and you want to make sure all passwords are aligned to company protocols. Which SQL clause will help you confirm that the passwords are 15 characters long?

**Options:**
- **A.** ⚪ COUNT(user_password) > 15
- **B.** ⚪ WHERE(user_password) < 15
- **C.** ⚪ `IDENTIFY(user_password) = 15`
- **D.** ✅ `LENGTH(user_password) = 15`

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `C` |
| **Verified Correct Answer** | **`D`** |

**Why this is correct:**
> The `LENGTH()` function evaluates the character count of a text field. `LENGTH(user_password) = 15` filters for passwords that contain exactly 15 characters.

---
### Question #136 — Course 4: Process Data from Dirty to Clean (Module 3, Q9)
**Type:** Single Choice

**Prompt:**
> As you migrate data from a legacy system to a new database, you find that many client records contain missing values in the email_address column. What SQL function can you use to replace these null values with a value in a different column?

**Options:**
- **A.** ⚪ TRIM
- **B.** ⚪ CONCAT
- **C.** ✅ COALESCE
- **D.** ⚪ CAST

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `D` |
| **Verified Correct Answer** | **`C`** |

**Why this is correct:**
> The `COALESCE()` function evaluates arguments in order and returns the first non-null value, making it ideal for substituting null entries with fallback values from alternative columns.

---
### Question #137 — Course 4: Process Data from Dirty to Clean (Module 4, Q1)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: A data analyst keeps important code in a _____, enabling other developers on the team to access the most current version of the code and collaborate effectively.

**Options:**
- **A.** ⚪ dashboard
- **B.** ⚪ changelog
- **C.** ✅ version control system
- **D.** ⚪ dataset

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `B` |
| **Verified Correct Answer** | **`C`** |

**Why this is correct:**
> A version control system (such as Git) tracks code revisions, maintains project history, and enables seamless collaboration among team developers.

---
### Question #149 — Course 5: Analyze Data to Answer Questions (Module 1, Q5)
**Type:** Single Choice

**Prompt:**
> You’re a data analyst with access to data on produce sales in the table ProduceSales, but you’re only interested in analyzing rhubarb sales for your current project. Which query should you use to examine only the data on rhubarb sales?

**Options:**
- **A.** ⚪ `SELECT * FROM ProduceSales, rhubarb;`
- **B.** ⚪ `SELECT * FROM ProduceSales WHERE produce_type == rhubarb;`
- **C.** ⚪ `SELECT * FROM ProduceSales WHERE 'rhubarb';`
- **D.** ✅ `SELECT * FROM ProduceSales WHERE produce_type = 'rhubarb';`

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `D` |
| **Verified Correct Answer** | **`D`** |
| **Option Fix** | Restored truncated/scrambled options |

**Why this is correct:**
> In SQL, filtering for string literals requires standard equality syntax: `WHERE column = 'value'`. `SELECT * FROM ProduceSales WHERE produce_type = 'rhubarb';` correctly returns only rhubarb sales.

---
### Question #150 — Course 5: Analyze Data to Answer Questions (Module 1, Q6)
**Type:** Single Choice

**Prompt:**
> Which query will return a list of all construction businesses that have made more than $8 million, from the largest number of employees to the fewest?

**Options:**
- **A.** ⚪ `SELECT * FROM `CompanyData` WHERE Business = 'Construction' WHERE Revenue < 8000000 ORDER BY number_of_employees DESC;`
- **B.** ⚪ `SELECT * FROM `CompanyData` WHERE Business = 'Construction' AND Revenue > 8000000 ORDER BY number_of_employees ASC;`
- **C.** ✅ `SELECT * FROM `CompanyData` WHERE Business = 'Construction' AND Revenue > 8000000 ORDER BY number_of_employees DESC;`
- **D.** ⚪ `SELECT * FROM `CompanyData` WHERE Business = 'Construction', Revenue < 8000000 ORDER BY number_of_employees ASC;`

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `C` |
| **Verified Correct Answer** | **`C`** |
| **Option Fix** | Restored truncated/scrambled options |

**Why this is correct:**
> The query filters for `Business = 'Construction'` AND `Revenue > 8000000`, and sorts results using `ORDER BY number_of_employees DESC` to order from highest to lowest employee count.

---
### Question #154 — Course 5: Analyze Data to Answer Questions (Module 1, Q10)
**Type:** Single Choice

**Prompt:**
> Which query will return song_title, artist_name, and album_title in alphabetical order by song_title?

**Options:**
- **A.** ✅ `SELECT song_title, artist_name, album_title FROM music_db.songs ORDER BY song_title;`
- **B.** ⚪ `SELECT song_title, artist_name, album_title FROM music_db.songs ORDER BY album_title;`
- **C.** ⚪ `SELECT playlist_name, creation_date FROM music_db.playlists ORDER BY creation_date;`
- **D.** ⚪ `SELECT song_title, artist_name, album_title FROM music_db.songs ORDER BY artist_name DESC;`

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `A` |
| **Verified Correct Answer** | **`A`** |
| **Option Fix** | Restored truncated/scrambled options |

**Why this is correct:**
> To sort alphabetically from A to Z, SQL uses `ORDER BY column_name` (ascending by default). Targeting `music_db.songs` with `ORDER BY song_title` meets all requirements.

---
### Question #170 — Course 5: Analyze Data to Answer Questions (Module 3, Q8)
**Type:** Single Choice

**Prompt:**
> Which query will select all columns from the operations table and alias the table to ops? SELECT * FROM operations ALIAS ops SELECT * FROM operations AS ops

**Options:**
- **A.** ✅ `SELECT * FROM operations AS ops`
- **B.** ⚪ `SELECT * FROM operations ALIAS ops`
- **C.** ⚪ `SELECT * FROM operations TO ops`
- **D.** ⚪ `SELECT * FROM operations NEW ops`

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `B` |
| **Verified Correct Answer** | **`A`** |
| **Option Fix** | Restored truncated/scrambled options |

**Why this is correct:**
> In SQL, table aliasing assigns temporary shorthand names using the `AS` keyword: `SELECT * FROM operations AS ops`.

---
### Question #180 — Course 5: Analyze Data to Answer Questions (Module 4, Q7)
**Type:** Single Choice

**Prompt:**
> Which SQL statement will create a temporary table?

**Options:**
- **A.** ⚪ `CREATE TABLE my_table AS ( SELECT * FROM other_table );`
- **B.** ✅ `WITH my_table AS ( SELECT * FROM other_table WHERE x = 0 );`
- **C.** ⚪ `WITH my_table FROM ( SELECT * FROM other_table );`
- **D.** ⚪ `SELECT * FROM table;`

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `B` |
| **Verified Correct Answer** | **`B`** |
| **Option Fix** | Restored truncated/scrambled options |

**Why this is correct:**
> A Common Table Expression (CTE) creates a temporary named result set using the `WITH table_name AS (SELECT ...)` syntax.

---
### Question #233 — Course 7: Introduction to Data Analysis Using Python (Module 2, Q8)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which code block(s) will yield results that are identical to those of the following function? Select all that apply. def is_even(x): if x % 2 == 0: return True else: return False

**Options:**
- **A.** ✅ `def is_even(x):
    return x % 2 == 0`
- **B.** ⚪ `def is_even(x):
    if x % 2 != 0:
        return True
    return False`
- **C.** ✅ `def is_even(x):
    if x % 2 == 0:
        return True
    return False`
- **D.** ✅ `def is_even(x):
    if x % 2 != 0:
        return False
    else:
        return True`

| Verification Field | Details |
|---|---|
| **Previous Answer (Docx Footer)** | `A, C, D` |
| **Verified Correct Answer** | **`A, C, D`** |
| **Option Fix** | Restored truncated/scrambled options |

**Why this is correct:**
> Options A, C, and D all correctly return True for even numbers (`x % 2 == 0`) and False for odd numbers. Option B inverts the logic by returning True when `x % 2 != 0`.

---


# Part 2: Complete Question Bank (All 260 Questions)

The entire 260-question curriculum is cataloged below by Course Section and Module.

## Course 1: Foundations: Data, Data, Everywhere (38 Questions)

### Question #1 — Course 1: Foundations: Data, Data, Everywhere (Module 1, Q1)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following statements correctly describe data and data analysis? Select all that apply.

**Options:**
- **A.** ⚪ Data analysis is the science of data.
- **B.** ✅ Collecting data is part of the data analysis process.
- **C.** ✅ Data is a collection of facts.
- **D.** ✅ One goal of data analysis is to make predictions.

**Why this is correct:**
> Data is a collection of facts, and collecting data is a fundamental phase of data analysis. A primary objective of data analysis is to uncover patterns and make informed predictions about future outcomes. Data science, rather than data analysis, is considered the broader science of data.

---

### Question #2 — Course 1: Foundations: Data, Data, Everywhere (Module 1, Q2)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: Data science is creating new ways of _____ and understanding the unknown by using raw data.

**Options:**
- **A.** ⚪ identifying
- **B.** ⚪ strategizing
- **C.** ⚪ arranging
- **D.** ✅ modeling

**Why this is correct:**
> Data science focuses on creating novel ways of modeling data and discovering unknown insights using raw inputs. Modeling allows data scientists to structure raw data into meaningful algorithmic representations.

---

### Question #3 — Course 1: Foundations: Data, Data, Everywhere (Module 1, Q3)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following activities are elements of data-driven decision-making? Select all that apply.

**Options:**
- **A.** ✅ Uncover trends or patterns
- **B.** ✅ Analyze data
- **C.** ⚪ Eliminate information derived from gut instinct
- **D.** ✅ Determine the problem to be solved

**Why this is correct:**
> Data-driven decision-making involves defining the core problem, analyzing relevant data, and uncovering patterns or trends to guide strategy. While intuition can spark hypotheses, data-driven methods prioritize objective evidence over relying purely on gut instinct.

---

### Question #4 — Course 1: Foundations: Data, Data, Everywhere (Module 1, Q4)
**Type:** Single Choice

**Prompt:**
> A business wants to grow its sales by 10% in the next 12 months. The data team helps achieve this goal by collecting data about current sales, their target market, and their competitors. This helps them identify the difference between where they are today and where they want to be in a year. What does this scenario describe?

**Options:**
- **A.** ⚪ Planning
- **B.** ✅ Gap analysis
- **C.** ⚪ Guiding business decisions
- **D.** ⚪ Future analysis

**Why this is correct:**
> A gap analysis assesses the disparity between an organization's current performance state and its desired future state. By measuring current sales against target projections and competitors, the team identifies what is needed to bridge that gap.

---

### Question #5 — Course 1: Foundations: Data, Data, Everywhere (Module 1, Q5)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: Data analysts use a problem-oriented approach in order to _____, describe, and solve problems.

**Options:**
- **A.** ✅ identify
- **B.** ⚪ revise
- **C.** ⚪ customize
- **D.** ⚪ design

**Why this is correct:**
> Data analysts adopt a problem-oriented approach to identify, describe, and solve business challenges using structured data. Correctly identifying the root problem ensures the analysis targets the right business questions.

---

### Question #6 — Course 1: Foundations: Data, Data, Everywhere (Module 1, Q6)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following scenarios demonstrate analytical thinking? Select all that apply.

**Options:**
- **A.** ✅ You identify and define a problem, then solve it by using data in an organized manner.
- **B.** ✅ You select and design a graph to communicate your data in an appropriate and accessible way.
- **C.** ⚪ You determine your hypothesis to be true because there is nothing in your data to contradict it.
- **D.** ✅ You notice that two pieces of data trend in the same direction and investigate them further to check for correlation.

**Why this is correct:**
> Analytical thinking involves structured problem solving: identifying issues and using organized data, thoughtfully choosing visual communications, and investigating correlations between trending variables. Assuming a hypothesis is true simply due to a lack of contradictory data is an error in reasoning (argument from ignorance).

---

### Question #7 — Course 1: Foundations: Data, Data, Everywhere (Module 1, Q7)
**Type:** Single Choice

**Prompt:**
> A data team at a national bank plans a project about its customer bill-paying tool. They apply analytical thinking to decide what they want to achieve with the data. This helps ensure the data is valuable and will help them accomplish their goals. Which aspect of analytical thinking does this scenario describe?

**Options:**
- **A.** ⚪ Correlation
- **B.** ⚪ Collaboration
- **C.** ✅ Strategic thinking
- **D.** ⚪ Big-picture thinking

**Why this is correct:**
> Strategic thinking requires defining what an organization wants to accomplish with its data and aligning metrics with long-term goals. Establishing early clear objectives ensures the team gathers valuable, purposeful data.

---

### Question #8 — Course 1: Foundations: Data, Data, Everywhere (Module 1, Q8)
**Type:** Single Choice

**Prompt:**
> A data professional asks, “Why?” five times. What are they trying to figure out?

**Options:**
- **A.** ✅ The root cause of a problem
- **B.** ⚪ Details about the effects of a problem
- **C.** ⚪ Evidence of a problem’s existence
- **D.** ⚪ The most common symptoms of a problem

**Why this is correct:**
> The 'Five Whys' is a root cause analysis technique where asking 'Why?' repeatedly drills past superficial symptoms to uncover the core source of a problem.

---

### Question #9 — Course 1: Foundations: Data, Data, Everywhere (Module 1, Q9)
**Type:** Single Choice

**Prompt:**
> A data professional is always interested in learning new skills and gaining knowledge. They often seek out challenging assignments at work and professional development experiences. Which analytical skill does this scenario describe?

**Options:**
- **A.** ⚪ Understanding context
- **B.** ⚪ Technical mindset
- **C.** ⚪ Data design
- **D.** ✅ Curiosity

**Why this is correct:**
> Curiosity is the intrinsic desire to seek out new knowledge, learn skills, and tackle unfamiliar challenges. It drives data professionals to ask deeper questions and continuously explore unexpected data patterns.

---

### Question #10 — Course 1: Foundations: Data, Data, Everywhere (Module 1, Q10)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following examples demonstrate data-driven decision-making? Select all that apply.

**Options:**
- **A.** ⚪ A financial institution asks bank tellers for their personal impressions about customers.
- **B.** ✅ A manufacturing company uses documented information about production processes to improve efficiency.
- **C.** ✅ A grocery store polls customers about their brand preferences, then uses the survey results to determine which items to stock.
- **D.** ✅ A hospital uses statistics in health records to identify patients who may be at risk for certain diseases.

**Why this is correct:**
> Data-driven decision-making relies on verifiable metrics, recorded facts, and statistical evidence rather than personal impressions. Using production logs, customer survey results, and patient health statistics to make organizational choices exemplifies this practice.

---

### Question #11 — Course 1: Foundations: Data, Data, Everywhere (Module 2, Q1)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following activities are part of the manage phase of the data life cycle? Select all that apply.

**Options:**
- **A.** ✅ Select tools to keep data secure
- **B.** ✅ Decide where to store data
- **C.** ✅ Reflect on how to care for data
- **D.** ⚪ Use the data solve problems

**Why this is correct:**
> The manage phase of the data life cycle focuses on caring for data, establishing secure storage solutions, and implementing access protocols. Using data to answer business questions occurs during the analyze phase.

---

### Question #12 — Course 1: Foundations: Data, Data, Everywhere (Module 2, Q2)
**Type:** Single Choice

**Prompt:**
> Which spreadsheet feature uses a set of instructions to perform calculations, such as addition or subtraction?

**Options:**
- **A.** ⚪ Format
- **B.** ✅ Formula
- **C.** ⚪ Function
- **D.** ⚪ Filter

**Why this is correct:**
> A spreadsheet formula is a customized set of instructions (beginning with an equal sign) used to perform calculations such as addition, subtraction, or multiplication.

---

### Question #13 — Course 1: Foundations: Data, Data, Everywhere (Module 2, Q3)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following statements correctly describe the archive and the destroy phases of the data life cycle? Select all that apply.

**Options:**
- **A.** ✅ Archiving means storing data, although it may not be used again.
- **B.** ✅ A key reason for destroying data is to protect sensitive customer information.
- **C.** ✅ Shredders may be used to destroy data that is on paper.
- **D.** ⚪ The best way to protect private data at the end of a project is to archive it for future use.

**Why this is correct:**
> Archiving stores data securely for potential historical or compliance needs even after active use has concluded. Destroying data, using tools like paper shredders or digital purges, is crucial to protect private and sensitive customer information.

---

### Question #14 — Course 1: Foundations: Data, Data, Everywhere (Module 2, Q4)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> What tasks may occur during the ask step of the data analysis process? Select all that apply.

**Options:**
- **A.** ✅ Stay engaged by having a dialogue with stakeholders
- **B.** ✅ Define the problem to be solved
- **C.** ⚪ Select appropriate tools for cleaning the data
- **D.** ✅ Consider the current state compared to the ideal state

**Why this is correct:**
> The 'Ask' step of the data analysis process centers on defining the core business problem, understanding stakeholder expectations, and comparing current states to target goals. Selecting data cleaning tools takes place later in the 'Process' phase.

---

### Question #15 — Course 1: Foundations: Data, Data, Everywhere (Module 2, Q5)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: During the prepare step of the data analysis process, data is collected and _____ for analysis.

**Options:**
- **A.** ⚪ presented
- **B.** ⚪ interpreted
- **C.** ⚪ modified
- **D.** ✅ stored

**Why this is correct:**
> During the 'Prepare' step, analysts collect datasets and store them securely in appropriate environments for subsequent cleaning and exploration.

---

### Question #16 — Course 1: Foundations: Data, Data, Everywhere (Module 2, Q6)
**Type:** Single Choice

**Prompt:**
> A data professional at a beauty products enterprise is assigned a task related to customer buying habits. They think about what type of data they need to be successful, as well as optimal project outcomes. What phase of the data life cycle does this scenario describe?

**Options:**
- **A.** ⚪ Analyze
- **B.** ⚪ Manage
- **C.** ⚪ Archive
- **D.** ✅ Plan

**Why this is correct:**
> The 'Plan' phase is the first stage of the data life cycle, where teams establish project objectives, determine what types of data are required, and outline expected outcomes before data capture begins.

---

### Question #17 — Course 1: Foundations: Data, Data, Everywhere (Module 2, Q7)
**Type:** Single Choice

**Prompt:**
> A data team at a national retail brand wants to understand why customers return certain items. They have two datasets containing statistics about returns. They clean them, then combine them in order to make the information more complete. What step of the data analysis process does this scenario describe?

**Options:**
- **A.** ⚪ Prepare
- **B.** ⚪ Analyze
- **C.** ⚪ Share
- **D.** ✅ Process

**Why this is correct:**
> The 'Process' step of the data analysis process involves cleaning dirty data, handling inconsistencies, and combining disparate datasets to produce complete and accurate information.

---

### Question #18 — Course 1: Foundations: Data, Data, Everywhere (Module 2, Q8)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: During the _____ step of the data analysis process, data analysts use tools such as spreadsheets to draw useful conclusions.

**Options:**
- **A.** ✅ analyze
- **B.** ⚪ process
- **C.** ⚪ act
- **D.** ⚪ share

**Why this is correct:**
> During the 'Analyze' step, data analysts employ spreadsheets, SQL queries, and statistical tools to manipulate data and draw meaningful, actionable conclusions.

---

### Question #19 — Course 1: Foundations: Data, Data, Everywhere (Module 2, Q9)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> What are some key benefits of data visualizations? Select all that apply.

**Options:**
- **A.** ✅ Complex data can be shared more effectively with nontechnical audiences in visualizations.
- **B.** ✅ Data visualizations help people gain insights from data more quickly.
- **C.** ⚪ Data visualizations do not require labels or descriptions.
- **D.** ✅ Maps help people identify patterns in data.

**Why this is correct:**
> Data visualizations translate complex datasets into intuitive visual formats, allowing stakeholders to grasp insights and spot geographical or historical patterns much faster than reading raw numbers. Well-designed charts still require clear titles, labels, and contextual keys.

---

### Question #20 — Course 1: Foundations: Data, Data, Everywhere (Module 2, Q10)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: A high-tech manufacturer acquires data from an outside consumer tech association database and its own documentation about product features and pricing. This work occurs during the _____ phase of the data life cycle.

**Options:**
- **A.** ⚪ manage
- **B.** ✅ capture
- **C.** ⚪ analyze
- **D.** ⚪ destroy

**Why this is correct:**
> The 'Capture' phase involves gathering data from external databases, internal documentation, or user interactions to bring raw information into the organization's ecosystem.

---

### Question #21 — Course 1: Foundations: Data, Data, Everywhere (Module 3, Q1)
**Type:** Single Choice

**Prompt:**
> In this spreadsheet, what type of tree is in cell C2?

**Associated Figure:**
![Figure for Question #21](/C:/Users/ASUS/.gemini/antigravity/brain/a965472a-3289-4da8-a57b-3e74bbd7c324/img/q_21_image12.png)

**Options:**
- **A.** ⚪ Palm
- **B.** ⚪ Sycamore
- **C.** ⚪ White oak
- **D.** ✅ Maple

**Why this is correct:**
> In spreadsheet coordinate notation, cell C2 references column C (the third column) and row 2. Based on the provided table data, row 2 in column C contains the tree species Maple.

---

### Question #22 — Course 1: Foundations: Data, Data, Everywhere (Module 3, Q2)
**Type:** Single Choice

**Prompt:**
> In the following query, what will be retrieved from the database?

**Associated Figure:**
![Figure for Question #22](/C:/Users/ASUS/.gemini/antigravity/brain/a965472a-3289-4da8-a57b-3e74bbd7c324/img/q_22_image9.png)

**Options:**
- **A.** ⚪ All of facility A
- **B.** ⚪ All engineering specialists in all facilities
- **C.** ⚪ All specialists in facility A
- **D.** ✅ All engineering specialists in facility A

**Why this is correct:**
> The SQL WHERE clause filters rows using boolean criteria. Filtering for facility = 'A' and role = 'engineering specialist' returns only engineering specialists situated specifically in facility A.

---

### Question #23 — Course 1: Foundations: Data, Data, Everywhere (Module 3, Q3)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following statements accurately describe spreadsheet attributes and observations? Select all that apply.

**Options:**
- **A.** ✅ An observation includes all of the attributes contained in its row.
- **B.** ⚪ Observations are characteristics or qualities of data.
- **C.** ✅ Attributes are also referred to as column headers.
- **D.** ✅ Column labels are attributes.

**Why this is correct:**
> Spreadsheet columns represent attributes (characteristics or properties) and their headers serve as column labels. Spreadsheet rows represent individual observations containing all attribute values for that record.

---

### Question #24 — Course 1: Foundations: Data, Data, Everywhere (Module 3, Q4)
**Type:** Single Choice

**Prompt:**
> A data team at a public university wants to communicate to stakeholders about which foreign language courses are most popular with students. They create a data visualization that identifies the 38 different courses, then shows the number of students enrolled in each one. What type of data visualization should they create?

**Options:**
- **A.** ✅ Bar chart
- **B.** ⚪ Donut chart
- **C.** ⚪ Pie chart
- **D.** ⚪ Line chart

**Why this is correct:**
> Bar charts are ideal for categorical comparisons with many distinct groups, such as comparing enrollment numbers across 38 distinct language courses. Pie or donut charts become unreadable and cluttered with more than a few slices.

---

### Question #25 — Course 1: Foundations: Data, Data, Everywhere (Module 3, Q5)
**Type:** Single Choice

**Prompt:**
> When working in a spreadsheet, what is the correct syntax for a formula that adds the value in cell C8 to the value in cell D8?

**Options:**
- **A.** ✅ `=C8+D8`
- **B.** ⚪ `C8+D8=`
- **C.** ⚪ `=C8,D8`
- **D.** ⚪ C8,D8

**Why this is correct:**
> In spreadsheets, all formulas must start with an equal sign (`=`), followed by cell references and operators. The correct syntax to add cells C8 and D8 is `=C8+D8`.

---

### Question #26 — Course 1: Foundations: Data, Data, Everywhere (Module 3, Q6)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: The SQL clause SELECT * is used to _____ all data from a particular table.

**Options:**
- **A.** ⚪ archive
- **B.** ⚪ copy
- **C.** ⚪ exclude
- **D.** ✅ retrieve

**Why this is correct:**
> The SQL asterisk wildcard (`*`) in `SELECT *` instructs the database engine to retrieve all columns and records from the specified table.

---

### Question #27 — Course 1: Foundations: Data, Data, Everywhere (Module 3, Q7)
**Type:** Single Choice

**Prompt:**
> In the following query, which clause indicates the table from which to retrieve data? SELECT * FROM Fiction WHERE author = 'Kingsolver'

**Options:**
- **A.** ⚪ `SELECT *`
- **B.** ⚪ WHERE author
- **C.** ✅ FROM Fiction
- **D.** ⚪ `= ‘Kingsolver’`

**Why this is correct:**
> The `FROM` clause in SQL designates the source table from which records are retrieved. In `SELECT * FROM Fiction WHERE author = 'Kingsolver'`, `FROM Fiction` identifies the target table.

---

### Question #28 — Course 1: Foundations: Data, Data, Everywhere (Module 3, Q8)
**Type:** Single Choice

**Prompt:**
> Which text wrapping feature sets spreadsheet cells to automatically change their height to allow the text in the cell to fit?

**Options:**
- **A.** ✅ Wrap
- **B.** ⚪ Clip
- **C.** ⚪ Overflow
- **D.** ⚪ Fill

**Why this is correct:**
> The 'Wrap' text feature automatically expands row height and wraps text onto multiple lines within a cell, ensuring complete contents remain visible without overflowing adjacent cells.

---

### Question #29 — Course 1: Foundations: Data, Data, Everywhere (Module 3, Q9)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following statements accurately describe data visualizations and visualization tools? Select all that apply.

**Options:**
- **A.** ✅ Exploring the data for patterns is a key step in planning a data visualization.
- **B.** ✅ Tableau is a data visualization tool that enables simple and quick data-sharing.
- **C.** ⚪ The amount of data being shared should not influence the type of visualization selected.
- **D.** ✅ Data professionals can create bar graphs, pie charts, and maps in a spreadsheet.

**Why this is correct:**
> Planning a visualization requires identifying patterns and selecting appropriate chart types based on the data volume. Spreadsheets offer built-in chart creation tools, while Tableau provides robust capabilities for scalable, dynamic visual data sharing.

---

### Question #30 — Course 1: Foundations: Data, Data, Everywhere (Module 3, Q10)
**Type:** Single Choice

**Prompt:**
> A data professional wants the data in column A to be in alphabetical order from A to Z. What spreadsheet feature would enable them to accomplish this task?

**Associated Figure:**
![Figure for Question #30](/C:/Users/ASUS/.gemini/antigravity/brain/a965472a-3289-4da8-a57b-3e74bbd7c324/img/q_30_image5.png)

**Options:**
- **A.** ✅ Sort range
- **B.** ⚪ Dragging
- **C.** ⚪ Chart editor
- **D.** ⚪ Formatting

**Why this is correct:**
> The 'Sort range' feature in spreadsheet applications arranges data in a selected column alphabetically (A to Z) or numerically while keeping rows properly organized.

---

### Question #31 — Course 1: Foundations: Data, Data, Everywhere (Module 4, Q1)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following statements accurately describe fairness considerations in data analysis? Select all that apply.

**Options:**
- **A.** ✅ A data professional may include self-reported data when prioritizing fairness.
- **B.** ⚪ Best practices for fairness in data analysis include considering all available data.
- **C.** ✅ Fairness means ensuring that analysis does not create or reinforce bias.
- **D.** ⚪ Fairness practices should begin during the prepare phase of the data analysis process.

**Why this is correct:**
> Prioritizing fairness means ensuring analysis does not reinforce societal bias, beginning right from project inception in the plan and ask phases. Including self-reported data directly from affected individuals is a key best practice for fairness.

---

### Question #32 — Course 1: Foundations: Data, Data, Everywhere (Module 4, Q2)
**Type:** Single Choice

**Prompt:**
> An HR firm is filling open positions for administrative assistants, so they purchase online help-wanted ads. Research reveals that 87% of administrative assistants are women, so the data team decides that women are more likely to be successful applicants. Therefore, they target the ads to female job seekers. What should they have done instead?

**Options:**
- **A.** ✅ Conduct more research to understand the surrounding factors of this situation.
- **B.** ⚪ Ask the executive team to decide which type of applicants to target with the ads.
- **C.** ⚪ Only target the ads for the administrative assistant jobs to men.
- **D.** ⚪ Find an additional data source that supports the strategy to target women.

**Why this is correct:**
> Targeting ads solely to women based on historical workforce imbalances reinforces systemic bias. Analysts must investigate surrounding societal and organizational factors to avoid perpetuating inequities in hiring.

---

### Question #33 — Course 1: Foundations: Data, Data, Everywhere (Module 4, Q3)
**Type:** Single Choice

**Prompt:**
> Which fairness best practice is intended to help stakeholders better understand the conditions that might influence the final conclusions of data analysis?

**Options:**
- **A.** ⚪ Include self-reported data
- **B.** ⚪ Consider relevant data
- **C.** ⚪ Use oversampling
- **D.** ✅ Identify surrounding factors

**Why this is correct:**
> Identifying surrounding factors provides vital contextual background on historical conditions, constraints, and external environments that influence data patterns and final outcomes.

---

### Question #34 — Course 1: Foundations: Data, Data, Everywhere (Module 4, Q4)
**Type:** Single Choice

**Prompt:**
> While conducting a survey to learn about employee satisfaction, a data analyst notices that the majority of respondents are people who work in the operations department. The fairness of their survey could be improved by over-sampling which employees?

**Options:**
- **A.** ⚪ People who have worked for the company less than five years
- **B.** ⚪ People in operations who have not yet responded to the survey
- **C.** ⚪ People who have worked for the company more than five years
- **D.** ✅ People who work in departments other than operations

**Why this is correct:**
> Oversampling underrepresented groups helps balance skewed response distributions. Because operations employees dominate the existing sample, oversampling staff from other departments ensures equitable representation.

---

### Question #35 — Course 1: Foundations: Data, Data, Everywhere (Module 4, Q5)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: A junior data analyst works on a _____ when using their analytical skills to address questions or problems for their organization.

**Options:**
- **A.** ⚪ stated objective
- **B.** ⚪ relevant process
- **C.** ✅ business task
- **D.** ⚪ measurable outcome

**Why this is correct:**
> A business task is the stated question, problem, or objective that data professionals aim to resolve for their organization using analytical methodologies.

---

### Question #36 — Course 1: Foundations: Data, Data, Everywhere (Module 4, Q6)
**Type:** Single Choice

**Prompt:**
> A data professional at a grocery store considers fairness when collecting data. Rather than having store associates share observations, they create a survey that asks customers to provide information about their own shopping experiences. This helps avoid any unconscious bias that might be introduced by the sales associates. Which fairness best practice does this scenario describe?

**Options:**
- **A.** ⚪ Considering context
- **B.** ⚪ Using all available data
- **C.** ⚪ Oversampling
- **D.** ✅ Self-reporting

**Why this is correct:**
> Self-reporting allows participants to provide their own personal experiences and perceptions directly. This prevents third-party bias or assumptions from being introduced by observers or sales associates.

---

### Question #37 — Course 1: Foundations: Data, Data, Everywhere (Module 4, Q7)
**Type:** Single Choice

**Prompt:**
> A data analyst at a hospital system researches factors that contribute to low blood pressure. Rather than using only the medical records of patients with low blood pressure, the analyst considers patient demographics, medical history, lifestyle, and more. This enables them to achieve more insightful results. Which fairness best practice does this scenario describe?

**Options:**
- **A.** ⚪ Including self-reported data
- **B.** ✅ Considering all available data
- **C.** ⚪ Oversampling
- **D.** ⚪ Guiding business strategy

**Why this is correct:**
> Considering all available data requires examining comprehensive holistic factors (such as lifestyle, medical background, and demographics) rather than analyzing isolated data points in a vacuum.

---

### Question #38 — Course 1: Foundations: Data, Data, Everywhere (Module 4, Q8)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: A data professional considers fairness from the start of a project to the point when their organization _____ in order to ensure their data analysis is fair.

**Options:**
- **A.** ⚪ cleans and organizes the data
- **B.** ⚪ presents findings to stakeholders
- **C.** ⚪ collects data for the project
- **D.** ✅ acts on the data insights

**Why this is correct:**
> Ensuring fairness is a continuous commitment that begins at project kickoff and extends through the entire data life cycle until the organization acts on the final insights.

---
## Course 2: Ask Questions to Make Data-Driven Decisions (34 Questions)

### Question #39 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 1, Q1)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: When solving the _____ problem type, a data analytics team at a health care provider analyzes patient data from the past five years. They then use this information to understand what led to certain symptoms and what is likely to cause them again.

**Options:**
- **A.** ✅ finding patterns
- **B.** ⚪ categorizing things
- **C.** ⚪ identifying themes
- **D.** ⚪ discovering connections

**Why this is correct:**
> Finding patterns involves examining historical data to recognize recurring sequences or trends over time and understand what factors trigger specific symptoms or events.

---

### Question #40 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 1, Q2)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following statements correctly describe the SMART methodology? Select all that apply.

**Options:**
- **A.** ⚪ Time-bound questions limit the amount of time analysts should work on a particular project.
- **B.** ✅ Relevant questions matter, are important, and have significance to the problem.
- **C.** ✅ SMART stands for specific, measurable, action-oriented, relevant, and time-bound.
- **D.** ✅ Specific questions are simple, significant, and focused on a single topic or a few closely related ideas.

**Why this is correct:**
> The SMART framework requires questions to be Specific, Measurable, Action-oriented, Relevant, and Time-bound. Time-bound specifies the deadline or timeframe for the question's scope, not how long analysts spend working on it.

---

### Question #41 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 1, Q3)
**Type:** Single Choice

**Prompt:**
> A software company wants to deliver better user experiences for their customers. They gather data on their customers' current interaction behaviors on their platform. They use this data to develop an algorithm to identify optimal design elements for the next software release. Which data problem type does this scenario describe?

**Options:**
- **A.** ⚪ Categorizing things
- **B.** ⚪ Discovering connections
- **C.** ⚪ Spotting something unusual
- **D.** ✅ Making predictions

**Why this is correct:**
> Making predictions involves analyzing current and historical behaviors to forecast future trends or optimize algorithmic designs for subsequent releases.

---

### Question #42 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 1, Q4)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> For what reasons would it be unfair for a supermarket to ask customers, “Why do you believe our products are the best on the market?” Select all that apply.

**Options:**
- **A.** ✅ It is a leading question.
- **B.** ⚪ It is difficult to understand.
- **C.** ⚪ It is a closed-ended question.
- **D.** ✅ It makes assumptions.

**Why this is correct:**
> Asking 'Why do you believe our products are the best?' is unfair because it presumes products are already the best (making assumptions) and steers respondents toward confirming that premise (leading question).

---

### Question #43 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 1, Q5)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: When solving the _____ problem type, a data analyst discovers an established competitor suddenly changing its marketing strategy.

**Options:**
- **A.** ⚪ identifying themes
- **B.** ⚪ discovering connections
- **C.** ⚪ making predictions
- **D.** ✅ spotting something unusual

**Why this is correct:**
> Spotting something unusual involves detecting anomalies, outliers, or sudden unexpected shifts in data, such as a major competitor abruptly pivoting their marketing strategy.

---

### Question #44 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 1, Q6)
**Type:** Single Choice

**Prompt:**
> A data analytics team sorts customer data by interests. Then, they group that information into broader concepts, such as customers who are interested in travel and customers who are interested in cooking. Which data problem type does this scenario describe?

**Options:**
- **A.** ✅ Identifying themes
- **B.** ⚪ Finding patterns
- **C.** ⚪ Making predictions
- **D.** ⚪ Discovering connections

**Why this is correct:**
> Identifying themes requires grouping sorted observations into broader conceptual categories, such as clustering distinct hobbies into culinary interest versus travel groups.

---

### Question #45 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 1, Q7)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following questions are open-ended? Select all that apply.

**Options:**
- **A.** ✅ How would you describe this movie?
- **B.** ✅ What are you most looking forward to in the coming year?
- **C.** ⚪ Have you ever traveled outside your home country?
- **D.** ⚪ On a scale of 1-10 (with 10 being most important), how important is eating healthy?

**Why this is correct:**
> Open-ended questions encourage respondents to provide comprehensive, qualitative thoughts in their own words. In contrast, closed-ended questions restrict answers to predefined scales, yes/no responses, or numerical ratings.

---

### Question #46 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 1, Q8)
**Type:** Single Choice

**Prompt:**
> The supplier of a key component of a variety of products has a quality control issue. This causes problems for both the supplier and the manufacturing companies that use the component in their products. All of the affected businesses discuss the issues they face and share data openly, ultimately discovering they have many similar challenges. What data problem type are they solving?

**Options:**
- **A.** ⚪ Categorizing things
- **B.** ⚪ Making predictions
- **C.** ⚪ Identifying themes
- **D.** ✅ Discovering connections

**Why this is correct:**
> Discovering connections involves identifying shared relationships, commonalities, or overlapping factors across different entities encountering similar operational challenges.

---

### Question #47 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 1, Q9)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: The question, “Which processes can we streamline by using technology more effectively?” is _____ because it encourages change.

**Options:**
- **A.** ✅ action-oriented
- **B.** ⚪ specific
- **C.** ⚪ measurable
- **D.** ⚪ relevant

**Why this is correct:**
> An action-oriented question focuses on inciting tangible improvements and streamlining processes through actionable changes and implementation steps.

---

### Question #48 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 1, Q10)
**Type:** Single Choice

**Prompt:**
> A data analyst working for a health care provider is asked to determine which clinics are most efficient and which are least efficient. They review performance data, then group the clinics accordingly. Which data problem type does this scenario describe?

**Options:**
- **A.** ⚪ Discovering connections
- **B.** ✅ Categorizing things
- **C.** ⚪ Finding patterns
- **D.** ⚪ Spotting something unusual

**Why this is correct:**
> Categorizing things involves grouping items or entities into distinct buckets or classifications based on shared traits or performance criteria (e.g. most efficient vs. least efficient).

---

### Question #49 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 2, Q1)
**Type:** Single Choice

**Prompt:**
> A data team at a community center automates a process to segment clients. First, a list of all clients is compiled. Then, they are sorted by the classes they have taken and events attended. Finally, clients are segmented by their activity histories. What does this scenario describe?

**Options:**
- **A.** ⚪ Using a formula
- **B.** ✅ Creating an algorithm
- **C.** ⚪ Making a pivot table
- **D.** ⚪ Data-inspired decision-making

**Why this is correct:**
> An algorithm is a step-by-step procedural instruction or set of rules designed to process inputs, sort attributes, and automate classification outcomes.

---

### Question #50 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 2, Q2)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following statements accurately describe qualitative and quantitative data? Select all that apply.

**Options:**
- **A.** ⚪ The texture of a wool sweater is an example of quantitative data.
- **B.** ✅ Quantitative data involves specific and objective measures.
- **C.** ✅ Qualitative data describes explanatory assessments of qualities.
- **D.** ⚪ The weight of a cruise ship is an example of qualitative data.

**Why this is correct:**
> Quantitative data represents objective, numerically measurable values (such as weight, count, or temperature). Qualitative data represents subjective descriptive characteristics (such as texture, taste, or sentiment).

---

### Question #51 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 2, Q3)
**Type:** Single Choice

**Prompt:**
> When working with big data, analysts consider the velocity of processing large, complex datasets. What does this entail?

**Options:**
- **A.** ⚪ Identifying the different kinds of data available
- **B.** ⚪ Evaluating the quality and reliability of the data
- **C.** ✅ Understanding how quickly the data can be processed
- **D.** ⚪ Assessing the amount of data to be processed

**Why this is correct:**
> Velocity in big data refers to the processing and incoming flow speed of data, reflecting how rapidly high-volume information can be ingested, analyzed, and transformed.

---

### Question #52 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 2, Q4)
**Type:** Single Choice

**Prompt:**
> A data professional uses a spreadsheet tool to create a visualization that totals productivity data by organization, department, and employee. What tool are they using?

**Options:**
- **A.** ⚪ Data validation
- **B.** ⚪ Sort
- **C.** ⚪ Format
- **D.** ✅ Pivot table

**Why this is correct:**
> A pivot table is an analytical spreadsheet tool that aggregates, reorganizes, and totals multi-dimensional numerical data across departments, organizations, and categories.

---

### Question #53 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 2, Q5)
**Type:** Single Choice

**Prompt:**
> Company leaders at a cafeteria supplier want to improve business performance. How could they use metrics and a metric goal to help them do so?

**Options:**
- **A.** ⚪ Develop a metric. Then, evaluate it to determine whether it advances performance.
- **B.** ⚪ Establish a metric goal as a single data point. Then, quantify it with metrics.
- **C.** ✅ Create a metric goal as the business objective. Then, evaluate it using metrics.
- **D.** ⚪ Set a metric as the business objective. Then, quantify it using numerous data points.

**Why this is correct:**
> Organizations set a clear business objective as their metric goal, and then track and quantify their progress toward that target using specific quantitative metrics.

---

### Question #54 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 2, Q6)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following statements correctly describe dashboards and reports? Select all that apply.

**Options:**
- **A.** ✅ A dashboard could be used to track hourly error rates when programming code.
- **B.** ✅ Reports are effective at capturing high-level, historical data.
- **C.** ⚪ Dashboards are designed and distributed periodically as a reference.
- **D.** ✅ Reports and dashboards are both useful for data visualization.

**Why this is correct:**
> Dashboards provide dynamic, real-time views useful for continuous operational tracking (like hourly error rates). Reports capture curated, historical summaries at set intervals, and both tools provide powerful visual data representations.

---

### Question #55 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 2, Q7)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: A company determines the success of an investment using _____, which is calculated by comparing the two metrics of investment cost and profit.

**Options:**
- **A.** ⚪ reasoning on investment
- **B.** ✅ return on investment
- **C.** ⚪ rating of investment
- **D.** ⚪ retention of investment

**Why this is correct:**
> Return on investment (ROI) measures profitability and financial efficiency by comparing the net profit earned relative to the capital cost invested.

---

### Question #56 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 2, Q8)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> What are some typical challenges that may be faced by businesses that are beginning to collect and use big data? Select all that apply.

**Options:**
- **A.** ⚪ Inappropriate for use by large organizations
- **B.** ✅ Technology may not provide reportable data
- **C.** ✅ Having too much unimportant information
- **D.** ✅ Needed data may be inaccessible

**Why this is correct:**
> Common early hurdles with big data include navigating inaccessible siloed repositories, coping with high volumes of noisy or irrelevant information, and working with systems lacking standardized reporting outputs.

---

### Question #57 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 3, Q1)
**Type:** Single Choice

**Prompt:**
> In this spreadsheet, what will be returned from the formula =B4*E3?

**Associated Figure:**
![Figure for Question #57](/C:/Users/ASUS/.gemini/antigravity/brain/a965472a-3289-4da8-a57b-3e74bbd7c324/img/q_57_image10.png)

**Options:**
- **A.** ⚪ 33
- **B.** ⚪ 10
- **C.** ✅ 90
- **D.** ⚪ 27

**Why this is correct:**
> In spreadsheets, the asterisk (`*`) represents multiplication. Evaluating `=B4*E3` multiplies the value in cell B4 by the value in cell E3, which evaluates to 90.

---

### Question #58 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 3, Q2)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: A range is a collection of _____ cells.

**Options:**
- **A.** ✅ two or more
- **B.** ⚪ numerically ordered
- **C.** ⚪ duplicate
- **D.** ⚪ averaged

**Why this is correct:**
> In spreadsheet terminology, a range consists of a contiguous or designated collection of two or more cells (e.g., A1:B10).

---

### Question #59 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 3, Q3)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> What are some common focus areas when creating a scope of work as a data analyst? Select all that apply.

**Options:**
- **A.** ⚪ Make sure the data is filtered and sorted
- **B.** ✅ Note when the client can expect reports
- **C.** ✅ Establish an agreed-upon outline of the work to be performed
- **D.** ✅ Include key information about data sources

**Why this is correct:**
> A scope of work (SOW) outlines project deliverables, specifies timelines and report milestones, and defines the source datasets to establish clear expectations between analysts and clients.

---

### Question #60 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 3, Q4)
**Type:** Single Choice

**Prompt:**
> A junior data analyst encounters a spreadsheet error. They realize that their formula is referencing a row that has been deleted, so they correct the formula. What type of error did they resolve?

**Options:**
- **A.** ⚪ VALUE
- **B.** ⚪ ERROR or parsing error
- **C.** ✅ REF
- **D.** ⚪ NUM

**Why this is correct:**
> A `#REF!` error occurs when a formula contains an invalid cell reference, frequently caused by deleting rows or columns that were directly referenced in calculation formulas.

---

### Question #61 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 3, Q5)
**Type:** Single Choice

**Prompt:**
> In this spreadsheet, which SUM function will add all of the values between cells B1 and D6?

**Associated Figure:**
![Figure for Question #61](/C:/Users/ASUS/.gemini/antigravity/brain/a965472a-3289-4da8-a57b-3e74bbd7c324/img/q_61_image3.png)

**Options:**
- **A.** ⚪ `=SUM,B1+D6`
- **B.** ✅ `=SUM(B1:D6)`
- **C.** ⚪ `=SUM(B1-D6)`
- **D.** ⚪ `=SUM(B1,D6)`

**Why this is correct:**
> The SUM function uses a colon (`:`) between the upper-left and lower-right cell addresses to specify a rectangular block of cells. `=SUM(B1:D6)` correctly sums all values from B1 through D6.

---

### Question #62 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 3, Q6)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following statements accurately describe structured thinking and the problem domain? Select all that apply.

**Options:**
- **A.** ⚪ The problem domain is limited to the dataset that you analyze to answer a question.
- **B.** ✅ Structured thinking enables data professionals to identify areas that need deeper investigation and understanding.
- **C.** ✅ The problem domain is the specific area of analysis that encompasses every activity affecting a problem.
- **D.** ✅ The starting place for structured thinking is the problem domain.

**Why this is correct:**
> Structured thinking starts by framing the problem domain—the full landscape of activities and operational factors influencing the issue—allowing analysts to systematically uncover areas needing investigation.

---

### Question #63 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 3, Q7)
**Type:** Single Choice

**Prompt:**
> In this spreadsheet, what should be done to correct the DIV error in cell D1?

**Associated Figure:**
![Figure for Question #63](/C:/Users/ASUS/.gemini/antigravity/brain/a965472a-3289-4da8-a57b-3e74bbd7c324/img/q_63_image1.png)

**Options:**
- **A.** ⚪ Search for the correct value in column A.
- **B.** ✅ Ensure the formula is not trying to divide by zero or an empty cell.
- **C.** ⚪ Copy the formula to the rest of the cells in column D.
- **D.** ⚪ Insert a comma between the cell ranges in the formula.

**Why this is correct:**
> A `#DIV/0!` error indicates an attempt to divide by zero or an empty cell. Analysts fix this by validating divisors to ensure the denominator contains non-zero numerical values.

---

### Question #64 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 3, Q8)
**Type:** Single Choice

**Prompt:**
> What is the formula for dividing the value in spreadsheet cell H7 by the value in cell H4?

**Options:**
- **A.** ⚪ `H7,H4=`
- **B.** ✅ `=H7/H4`
- **C.** ⚪ `=H7/4`
- **D.** ⚪ H7:H4

**Why this is correct:**
> Spreadsheet division uses the forward slash (`/`) operator prefixed by `=`. Dividing cell H7 by cell H4 is written as `=H7/H4`.

---

### Question #65 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 4, Q1)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: Stakeholders _____ when contributing to a project.

**Options:**
- **A.** ✅ invest time and resources
- **B.** ⚪ implement solutions
- **C.** ⚪ connect with customers
- **D.** ⚪ present data insights

**Why this is correct:**
> Stakeholders invest their time, capital, and organizational resources into a project and have a vested interest in the business outcomes of the analytical findings.

---

### Question #66 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 4, Q2)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> What are some strategies to ensure you respect people’s time when leading a meeting? Select all that apply.

**Options:**
- **A.** ✅ Be prepared to talk about your work
- **B.** ✅ Arrive to the meeting on time
- **C.** ⚪ Discuss work that does not affect the attendees
- **D.** ✅ Pay attention to what others are saying

**Why this is correct:**
> Respecting meeting attendees' time involves being punctual, preparing a focused agenda on pertinent project work, and actively listening to others' contributions.

---

### Question #67 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 4, Q3)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> A data analyst prepares for a stakeholder presentation. To ensure they communicate clearly, they follow best practices and ask four questions, including: What does my audience need to know? Identify the remaining three questions the data analyst should ask. Select all that apply.

**Options:**
- **A.** ✅ What does my audience already know?
- **B.** ✅ Who is my audience?
- **C.** ✅ How can I communicate effectively to my audience?
- **D.** ⚪ What does my audience want to avoid?

**Why this is correct:**
> Effective audience communication requires knowing who your audience is, assessing what background knowledge they already hold, and tailoring your delivery style to communicate clearly.

---

### Question #68 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 4, Q4)
**Type:** Single Choice

**Prompt:**
> You accept a new project from a high level stakeholder. After beginning the project, you find that you aren’t sure what you are supposed to do. How do you handle this?

**Options:**
- **A.** ⚪ Perform standard analysis and present insights you believe are helpful.
- **B.** ⚪ Determine the objectives that make the most sense and work toward those.
- **C.** ⚪ Ask a member of your team what was done on the last project and do the same.
- **D.** ✅ Set up a meeting with the stakeholder to discuss the specific objectives.

**Why this is correct:**
> When project requirements or objectives are ambiguous, the best approach is to promptly schedule an alignment meeting with the project stakeholder to clarify deliverables and expectations.

---

### Question #69 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 4, Q5)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following are best practices that data professionals can use in order to help ensure an effective online meeting? Select all that apply.

**Options:**
- **A.** ✅ Ask questions if you need more information or clarification
- **B.** ⚪ Help everyone focus on the agenda by asking them to turn off their cameras
- **C.** ✅ Join the meeting from a quiet area
- **D.** ✅ Confirm your technology is functional

**Why this is correct:**
> Running productive remote meetings requires confirming audiovisual equipment is functioning in advance, selecting a quiet setting, and actively asking questions to maintain clarity.

---

### Question #70 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 4, Q6)
**Type:** Single Choice

**Prompt:**
> A data analyst at an electrical utility company investigates why electricity consumption has increased in a particular area. During the analysis, which team is most likely to offer helpful insight about electricity users and their particular household needs?

**Options:**
- **A.** ⚪ Executive
- **B.** ⚪ Data science
- **C.** ⚪ Project management
- **D.** ✅ Customer-facing

**Why this is correct:**
> Customer-facing teams (such as customer service representatives and field agents) interact directly with end-users daily, providing firsthand operational context about household needs and habits.

---

### Question #71 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 4, Q7)
**Type:** Single Choice

**Prompt:**
> In conflict resolution, asking the question, “How can I help?”, is an example of what?

**Options:**
- **A.** ⚪ Changing responsibilities
- **B.** ✅ Reframing a question
- **C.** ⚪ Deflecting criticism
- **D.** ⚪ Contributing insights

**Why this is correct:**
> Reframing a problem or question shifts the conversational focus from blame to constructive collaboration, exemplified by asking 'How can I help?' to de-escalate workplace conflict.

---

### Question #72 — Course 2: Ask Questions to Make Data-Driven Decisions (Module 4, Q8)
**Type:** Single Choice

**Prompt:**
> A data analytics team works on a project to measure the success of their company’s new financial strategy. Who is most likely to be the primary stakeholder?

**Options:**
- **A.** ✅ Vice president of finance
- **B.** ⚪ Data analyst
- **C.** ⚪ Project manager
- **D.** ⚪ Analytics director

**Why this is correct:**
> Because the project assesses the success of a financial strategy, the Vice President of Finance is the primary executive stakeholder who owns the financial outcomes and strategic mandate.

---
## Course 3: Prepare Data for Exploration (37 Questions)

### Question #73 — Course 3: Prepare Data for Exploration (Module 1, Q1)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following items are examples of structured data? Select all that apply.

**Options:**
- **A.** ✅ Data table
- **B.** ✅ Price list
- **C.** ⚪ Scanned medical images
- **D.** ⚪ Audio recording

**Why this is correct:**
> Structured data follows a standardized tabular schema organized into rows and columns, such as relational data tables and price lists. Audio recordings and scanned images are unstructured data formats.

---

### Question #74 — Course 3: Prepare Data for Exploration (Module 1, Q2)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: The number of stars awarded to a product review is an example of _____ data.

**Options:**
- **A.** ✅ discrete
- **B.** ⚪ continuous
- **C.** ⚪ open
- **D.** ⚪ nominal

**Why this is correct:**
> Discrete data consists of distinct, separate numerical values that can be counted individually (like star ratings of 1, 2, 3, 4, or 5). In contrast, continuous data can take on any fractional value along an unbroken scale.

---

### Question #75 — Course 3: Prepare Data for Exploration (Module 1, Q3)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following statements accurately describe first-, second-, and third-party data? Select all that apply.

**Options:**
- **A.** ✅ An associate records first-party data when receiving direct feedback from customers.
- **B.** ⚪ Second-party data comes from outside sources that did not collect it directly.
- **C.** ✅ One drawback of third-party data is that the data-gathering methodology may not be disclosed.
- **D.** ✅ Third-party data comes from outside sources.

**Why this is correct:**
> First-party data is gathered directly from your own customers or users. Third-party data is collected and packaged by outside aggregators who may not disclose collection methodologies.

---

### Question #76 — Course 3: Prepare Data for Exploration (Module 1, Q4)
**Type:** Single Choice

**Prompt:**
> On very short notice, a data analyst is asked to create a report for stakeholders. Because of the challenging time frame, what type of data might yield the best results?

**Options:**
- **A.** ⚪ Theoretical
- **B.** ⚪ Unclean
- **C.** ⚪ Fabricated
- **D.** ✅ Historical

**Why this is correct:**
> Historical data is pre-existing recorded information that is already collected and cataloged, making it the most practical source when analysts face tight deadlines.

---

### Question #77 — Course 3: Prepare Data for Exploration (Module 1, Q5)
**Type:** Single Choice

**Prompt:**
> A data analyst at an energy utility wants to study the opinions of all adults in Portugal about green energy. Because It would be impractical to collect data from every single person in the country, the data analyst studies a part of the population that is representative of the whole. What does this scenario describe?

**Options:**
- **A.** ⚪ Choosing quantitative data
- **B.** ⚪ Using a population
- **C.** ⚪ Choosing a data type
- **D.** ✅ Using a sample

**Why this is correct:**
> A sample is a subset chosen from a broader population to represent the whole. When surveying an entire national population is impractical, representative sampling enables valid statistical inference.

---

### Question #78 — Course 3: Prepare Data for Exploration (Module 1, Q6)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following items are examples of continuous data? Select all that apply.

**Options:**
- **A.** ✅ Duration of a customer service call
- **B.** ✅ Temperature of a swimming pool
- **C.** ⚪ Number of employees at a company
- **D.** ⚪ Favorite social media platform

**Why this is correct:**
> Continuous data can be measured across an infinite continuum of values, such as the exact temperature of a pool or duration of a call. Discrete data represents counts of distinct items (like number of employees).

---

### Question #79 — Course 3: Prepare Data for Exploration (Module 1, Q7)
**Type:** Single Choice

**Prompt:**
> What type of data is contained in the following spreadsheet?

**Associated Figure:**
![Figure for Question #79](/C:/Users/ASUS/.gemini/antigravity/brain/a965472a-3289-4da8-a57b-3e74bbd7c324/img/q_79_image11.png)

**Options:**
- **A.** ⚪ Unstructured
- **B.** ⚪ Tall
- **C.** ⚪ Wide
- **D.** ✅ Long

**Why this is correct:**
> Long data (tall data) structures observations such that each row represents a single measurement per subject with multiple rows per entity, rather than expanding attributes horizontally across wide columns.

---

### Question #80 — Course 3: Prepare Data for Exploration (Module 1, Q8)
**Type:** Single Choice

**Prompt:**
> Which of the following questions would enable a data professional to collect nominal qualitative data?

**Options:**
- **A.** ✅ What is your job title?
- **B.** ⚪ How many siblings do you have?
- **C.** ⚪ What is your age?
- **D.** ⚪ What is your GPA?

**Why this is correct:**
> Nominal data represents qualitative categories with no intrinsic mathematical ranking or quantitative order, such as job titles or colors. Age and GPA are continuous or numerical values.

---

### Question #81 — Course 3: Prepare Data for Exploration (Module 1, Q9)
**Type:** Single Choice

**Prompt:**
> A data analyst at a manufacturing company records the results of inventory counts. For each inventory item, they indicate whether it is present or not. What data type is being collected in this scenario?

**Options:**
- **A.** ⚪ Text
- **B.** ⚪ String
- **C.** ✅ Boolean
- **D.** ⚪ Numerical

**Why this is correct:**
> Boolean data is a binary data type consisting strictly of two logical values: True/False, Yes/No, or Present/Not Present.

---

### Question #82 — Course 3: Prepare Data for Exploration (Module 2, Q1)
**Type:** Single Choice

**Prompt:**
> An individual declines to give consent for a company to use their data. Later, they learn that the company used their data without permission. Which element of their data privacy has been violated?

**Options:**
- **A.** ✅ Ability to give consent to use their data
- **B.** ⚪ Freedom from inappropriate use of their data
- **C.** ⚪ The right to inspect, update, or correct their own data
- **D.** ⚪ Protection from unauthorized access to their private data

**Why this is correct:**
> Data privacy rights require obtaining explicit, informed consent prior to data utilization. Processing personal information despite an individual declining permission directly violates their consent rights.

---

### Question #83 — Course 3: Prepare Data for Exploration (Module 2, Q2)
**Type:** Single Choice

**Prompt:**
> A data professional working on a project about commuters researches the origin of a dataset and confirms it was created by a government transportation agency which is a reputable source. However, they also find it was last updated seven years ago. Which aspect of good data are they missing?

**Options:**
- **A.** ⚪ Reliable
- **B.** ✅ Current
- **C.** ⚪ Cited
- **D.** ⚪ Original

**Why this is correct:**
> Good data must be reliable, original, comprehensive, cited, and current (ROCCC). Even if a source is reputable, an un-updated seven-year-old dataset lacks currency.

---

### Question #84 — Course 3: Prepare Data for Exploration (Module 2, Q3)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> A hospital system wants to protect the personally identifiable information of its patients, such as names and medical records. They ask their data team to anonymize the data. What techniques might they use to achieve this goal? Select all that apply.

**Options:**
- **A.** ✅ Masking
- **B.** ✅ Hashing
- **C.** ✅ Blanking
- **D.** ⚪ Sorting

**Why this is correct:**
> Data anonymization techniques safeguard privacy by stripping or altering identifying attributes. Masking conceals portions of data, hashing converts values into cryptographic strings, and blanking removes values completely.

---

### Question #85 — Course 3: Prepare Data for Exploration (Module 2, Q4)
**Type:** Single Choice

**Prompt:**
> An investor with a background of working and investing in the tech industry interprets any pitch from a tech startup as being more promising than others, even if the information is confusing and unclear. What type of bias does this scenario describe?

**Options:**
- **A.** ⚪ Interpretation
- **B.** ⚪ Observer
- **C.** ⚪ Sampling
- **D.** ✅ Confirmation

**Why this is correct:**
> Confirmation bias occurs when an individual tends to favor or interpret information that reinforces their pre-existing beliefs, preferences, or industry affiliations while disregarding contrary evidence.

---

### Question #86 — Course 3: Prepare Data for Exploration (Module 2, Q5)
**Type:** Single Choice

**Prompt:**
> Which data ethics principle gives an individual the right to know why their data is collected and how it will be used?

**Options:**
- **A.** ✅ Consent
- **B.** ⚪ Anonymization
- **C.** ⚪ Credibility
- **D.** ⚪ Privacy

**Why this is correct:**
> The consent principle mandates that individuals must be fully informed about what data is collected, why it is needed, and how it will be processed before agreeing to share it.

---

### Question #87 — Course 3: Prepare Data for Exploration (Module 2, Q6)
**Type:** Single Choice

**Prompt:**
> A magazine conducts research about people’s reading preferences. They only include respondents who currently subscribe. What type of bias does this scenario describe?

**Options:**
- **A.** ✅ Sampling
- **B.** ⚪ Confirmation
- **C.** ⚪ Interpretation
- **D.** ⚪ Observer

**Why this is correct:**
> Sampling bias occurs when sample members are not chosen randomly, resulting in an unrepresentative sample. Surveying only current subscribers omits non-subscribers and distorts reading preference insights.

---

### Question #88 — Course 3: Prepare Data for Exploration (Module 2, Q7)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: The data ethics principle of transaction transparency states that an individual has the right to understand all of the data-processing activities and _____ used on their data.

**Options:**
- **A.** ⚪ data models
- **B.** ✅ algorithms
- **C.** ⚪ standards
- **D.** ⚪ regulations

**Why this is correct:**
> Transaction transparency establishes that users have the right to know all processing operations, algorithms, and analytical workflows applied to their personal data.

---

### Question #89 — Course 3: Prepare Data for Exploration (Module 2, Q8)
**Type:** Single Choice

**Prompt:**
> A government agency allows any business, nonprofit, or citizen to access its databases and reuse or redistribute the data. What type of data is described in this scenario?

**Options:**
- **A.** ⚪ Free
- **B.** ✅ Open
- **C.** ⚪ Closed
- **D.** ⚪ Allowable

**Why this is correct:**
> Open data is publicly accessible data that anyone can freely access, use, modify, and redistribute without commercial or proprietary restrictions.

---

### Question #90 — Course 3: Prepare Data for Exploration (Module 2, Q9)
**Type:** Single Choice

**Prompt:**
> A company collects data on its website’s visitors but does not tell visitors how long their data will be stored. Which aspect of data ethics is this company violating?

**Options:**
- **A.** ✅ Consent
- **B.** ⚪ Transaction transparency
- **C.** ⚪ Privacy
- **D.** ⚪ Currency

**Why this is correct:**
> The consent principle requires organizations to provide full transparency regarding data retention periods so individuals can make an informed choice before agreeing to share their data.

---

### Question #91 — Course 3: Prepare Data for Exploration (Module 2, Q10)
**Type:** Single Choice

**Prompt:**
> Data anonymization is a common practice used to protect sensitive information. Which of the following types of data should always be anonymized before analysis?

**Options:**
- **A.** ⚪ Customer purchase history with categories.
- **B.** ⚪ Website data without usernames.
- **C.** ⚪ Hair color and age of participants.
- **D.** ✅ Social security numbers and medical records

**Why this is correct:**
> Personally Identifiable Information (PII) such as Social Security Numbers and sensitive medical records must always be anonymized to prevent identity theft and comply with data privacy laws.

---

### Question #92 — Course 3: Prepare Data for Exploration (Module 3, Q1)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: Data professionals use data _____ to control their company’s data and make sure data assets are formally managed.

**Options:**
- **A.** ✅ governance
- **B.** ⚪ aggregation
- **C.** ⚪ strategy
- **D.** ⚪ mapping

**Why this is correct:**
> Data governance is the comprehensive management framework and set of controls ensuring an organization's data assets remain secure, consistent, accurate, and properly utilized.

---

### Question #93 — Course 3: Prepare Data for Exploration (Module 3, Q2)
**Type:** Single Choice

**Prompt:**
> Which of the following is the best example of metadata for a column named order_quantity in a sales database table?

**Options:**
- **A.** ⚪ The specific value 15 recorded in the order_quantity column for a particular order.
- **B.** ⚪ The name of the customer who placed the largest order last month.
- **C.** ✅ The definition stating that order_quantity represents 'The number of units ordered' and its data type is 'Integer'.
- **D.** ⚪ The total number of orders placed yesterday across all products.

**Why this is correct:**
> Metadata provides descriptive context about other data. Stating that the order_quantity column represents 'The number of units ordered' and has an Integer data type is a textbook example of column metadata.

---

### Question #94 — Course 3: Prepare Data for Exploration (Module 3, Q3)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following statements accurately describe primary and foreign keys in a relational database? Select all that apply.

**Options:**
- **A.** ⚪ A foreign key uniquely identifies a record in the table in which it is located.
- **B.** ✅ A foreign key is a field within a table that is a primary key in another table.
- **C.** ✅ A table can have multiple foreign keys.
- **D.** ✅ Primary keys are unique.

**Why this is correct:**
> In relational databases, primary keys uniquely identify records within their own table, while foreign keys reference primary keys in other tables. A single table can contain multiple foreign keys to establish relationships across different entities.

---

### Question #95 — Course 3: Prepare Data for Exploration (Module 3, Q4)
**Type:** Single Choice

**Prompt:**
> A data analyst runs the following query. What do they want to retrieve from the database? SELECT * FROM ArtDisplays WHERE Medium = 'sculpture';

**Options:**
- **A.** ✅ All fields of the art displays of sculptures
- **B.** ⚪ All fields of the mediums in art displays
- **C.** ⚪ All fields of the art displays
- **D.** ⚪ All fields of the art displays that are not sculptures

**Why this is correct:**
> The SQL statement `SELECT *` retrieves all columns from the `ArtDisplays` table, while the `WHERE Medium = 'sculpture'` clause filters rows to include only sculpture exhibits.

---

### Question #96 — Course 3: Prepare Data for Exploration (Module 3, Q5)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> What are some benefits of using external data for an analysis project? Select all that apply.

**Options:**
- **A.** ✅ External data provides industry-level perspectives.
- **B.** ⚪ External data is always open and free to use.
- **C.** ⚪ External data is very reliable and comes pre-cleaned.
- **D.** ✅ External data, when validated and trusted, provides more data points and helps analysts identify broad insights.

**Why this is correct:**
> External data enriches internal analyses by providing broader industry benchmarks and macro insights when properly vetted. External data is not always pre-cleaned or free to use.

---

### Question #97 — Course 3: Prepare Data for Exploration (Module 3, Q6)
**Type:** Single Choice

**Prompt:**
> A data team at a trade school is sending a text alert to all students who have fewer than 10 credits. What spreadsheet tool will enable them to display only the students who meet that condition?

**Options:**
- **A.** ⚪ Sort the number of student credits in ascending order
- **B.** ⚪ Sort the number of student credits in descending order
- **C.** ⚪ Filter the data to show only students with more than 10 credits
- **D.** ✅ Filter the data to show only students who have fewer than 10 credits

**Why this is correct:**
> Applying a spreadsheet filter to display values where student credits are less than 10 isolates the exact group required for the low-credit notification alert.

---

### Question #98 — Course 3: Prepare Data for Exploration (Module 3, Q7)
**Type:** Single Choice

**Prompt:**
> A data analyst at a retail company uses SQL to explore the data in its customer database. They want to examine the order_date field in the CustomerPurchases table to understand when customers make purchases. What query should they write to return only this column of information?

**Options:**
- **A.** ⚪ `SELECT CustomerPurchases FROM order_date;`
- **B.** ⚪ `SELECT * FROM CustomerPurchases WHERE field = "order_date";`
- **C.** ⚪ `SELECT * FROM CustomerPurchases;`
- **D.** ✅ `SELECT order_date FROM CustomerPurchases;`

**Why this is correct:**
> In SQL, specifying the column name after `SELECT` (rather than using the `*` wildcard) restricts the output to only that column from the specified table.

---

### Question #99 — Course 3: Prepare Data for Exploration (Module 3, Q8)
**Type:** Single Choice

**Prompt:**
> Which SQL statement will return only pine trees from the Species column of the Trees database table?

**Options:**
- **A.** ⚪ `SELECT * FROM Trees WHERE 'pine';`
- **B.** ⚪ `SELECT * WHERE 'pine';`
- **C.** ✅ `SELECT * FROM Trees WHERE Species = 'pine';`
- **D.** ⚪ `SELECT * FROM Species = 'pine';`

**Why this is correct:**
> The correct SQL syntax to filter records requires `SELECT * FROM TableName WHERE ColumnName = 'value'`. Option C properly targets the Trees table with `WHERE Species = 'pine'`.

---

### Question #100 — Course 3: Prepare Data for Exploration (Module 3, Q9)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> What are some of the positive effects of individuals having access to open data? Select all that apply.

**Options:**
- **A.** ⚪ Open data limits public participation in government planning.
- **B.** ✅ Open data enables people to be a part of public planning and provide feedback.
- **C.** ✅ Open data allows people to better understand their markets which leads to economic growth.
- **D.** ✅ Open data makes government activities more transparent.

**Why this is correct:**
> Open data fosters government transparency, empowers civic feedback in public urban planning, and drives economic innovation by enabling businesses to identify market opportunities.

---

### Question #101 — Course 3: Prepare Data for Exploration (Module 3, Q10)
**Type:** Single Choice

**Prompt:**
> You are a database administrator for a hair salon that specializes in hair treatments and styling. The company is growing, and the number of customers the company needs to keep track of has increased. The limitations of the current database design have become more noticeable. There is a lot more repeated data, such as customer names, phone numbers, and email addresses. This redundancy is causing issues with data integrity and making queries slow. In the tables below what are the primary keys? Customers Table customer_id first_name last_name phone_number email_address Services Table services_id service_name service_price description

**Options:**
- **A.** ✅ customer_id and services_id
- **B.** ⚪ first_name and service_name
- **C.** ⚪ first_name and service_id
- **D.** ⚪ last_name and description

**Why this is correct:**
> Primary keys are unique identifiers for individual table records. In this schema, `customer_id` uniquely identifies customers in the Customers table, and `services_id` uniquely identifies offerings in the Services table.

---

### Question #102 — Course 3: Prepare Data for Exploration (Module 4, Q1)
**Type:** Single Choice

**Prompt:**
> You are the manager of your organization’s monthly purchasing spreadsheet. It has eight sheets, each of which denotes a different department’s purchases. You apply restrictions on the spreadsheet to ensure each department can only access their own sheet. What practice does this scenario describe?

**Options:**
- **A.** ✅ Data security
- **B.** ⚪ Data hygiene
- **C.** ⚪ Data preservation
- **D.** ⚪ Data integrity

**Why this is correct:**
> Data security encompasses practices, permissions, and technical controls implemented to restrict unauthorized access and protect sensitive spreadsheets from unauthorized tampering.

---

### Question #103 — Course 3: Prepare Data for Exploration (Module 4, Q2)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> A data team works on a project involving multiple collaborators. When creating a new file for the project, what should they include in each file's name in order to help team members locate project files easily? Select all that apply.

**Options:**
- **A.** ✅ Content description
- **B.** ✅ Creation date
- **C.** ⚪ Collaborator names
- **D.** ✅ Version number

**Why this is correct:**
> Effective file naming conventions include clear content descriptions, creation dates, and version numbering (e.g. `V01`) to enable team members to locate and distinguish working files quickly.

---

### Question #104 — Course 3: Prepare Data for Exploration (Module 4, Q3)
**Type:** Single Choice

**Prompt:**
> A data analytics team uses data about data to indicate consistent naming conventions for a project. What type of data is involved in this scenario?

**Options:**
- **A.** ✅ Metadata
- **B.** ⚪ Aggregated data
- **C.** ⚪ Big data
- **D.** ⚪ Long data

**Why this is correct:**
> Metadata is structured information about data that clarifies file contents, formats, and structural conventions across collaborative projects.

---

### Question #105 — Course 3: Prepare Data for Exploration (Module 4, Q4)
**Type:** Single Choice

**Prompt:**
> A grocery store collects inventory data about its produce section. What is an appropriate naming convention for this file?

**Options:**
- **A.** ⚪ Todays Produce 2022-15-09
- **B.** ⚪ Todays_Produce
- **C.** ✅ Produce_Inventory_2022-09-15_V01
- **D.** ⚪ Inventory_Produce 2022-09-15 V01

**Why this is correct:**
> Standard file naming conventions use underscores instead of spaces, include an ISO formatted date (`YYYY-MM-DD`), and specify a version identifier (e.g. `Produce_Inventory_2022-09-15_V01`).

---

### Question #106 — Course 3: Prepare Data for Exploration (Module 4, Q5)
**Type:** Single Choice

**Prompt:**
> A data analyst uses _____ to organize multiple files for a given project so they can be found and accessed in an efficient manner.

**Options:**
- **A.** ⚪ version control
- **B.** ⚪ data grouping
- **C.** ✅ foldering
- **D.** ⚪ data hygiene

**Why this is correct:**
> Foldering is the systematic practice of organizing digital files into structured folder hierarchies to ensure assets are categorized logically and easily retrievable.

---

### Question #107 — Course 3: Prepare Data for Exploration (Module 4, Q6)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> A data analyst creates a spreadsheet with five tabs. They want to share only tabs 1-4 with a client because tab 5 contains sensitive information. Which of the following tactics will enable them to keep tab 5 private? Select all that apply.

**Options:**
- **A.** ⚪ Hide tab 5, then share the spreadsheet with the client.
- **B.** ⚪ Rename tab 5 to include the word “private,” then share the spreadsheet with the client.
- **C.** ✅ Copy tabs 1-4 into a separate spreadsheet, then share the new file with the client.
- **D.** ✅ Make a copy of the spreadsheet, delete tab 5, then share the new file with the client.

**Why this is correct:**
> Hiding a spreadsheet tab does not protect its contents because clients can easily unhide it. Creating a separate file containing only tabs 1-4 or deleting tab 5 from a duplicate copy guarantees sensitive information is excluded.

---

### Question #108 — Course 3: Prepare Data for Exploration (Module 4, Q7)
**Type:** Single Choice

**Prompt:**
> A junior data analyst finishes an employee performance analysis project, so they delete the related files. A few months later, their supervisor assigns them another project related to employee performance, for which the deleted files could have been very useful. What would have been a better course of action?

**Options:**
- **A.** ⚪ Email the project to their supervisor
- **B.** ⚪ Print out the project files
- **C.** ⚪ Keep the project files on their local drive
- **D.** ✅ Archive the project files

**Why this is correct:**
> Archiving preserves historical project files, documentation, and models in secure long-term storage so they can be referenced or revived for future assignments.

---

### Question #109 — Course 3: Prepare Data for Exploration (Module 4, Q8)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: Broader-topic folders are located at the top of a _____, and more specific subfolders and files are contained within those folders.

**Options:**
- **A.** ⚪ encryption
- **B.** ⚪ permission
- **C.** ✅ hierarchy
- **D.** ⚪ file extension

**Why this is correct:**
> A file hierarchy organizes folders in a tree structure, with broad high-level directories at the top and specialized subfolders and files categorized below.

---
## Course 4: Process Data from Dirty to Clean (35 Questions)

### Question #110 — Course 4: Process Data from Dirty to Clean (Module 1, Q1)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: If a data professional calculates a statistical power of at least 80%, it is likely their experiment results are due to a _____ between the groups being compared, rather than random chance.

**Options:**
- **A.** ⚪ predicted connection
- **B.** ✅ real difference
- **C.** ⚪ confirmed anomaly
- **D.** ⚪ slight similarity

**Why this is correct:**
> A statistical power of 80% or greater indicates that an experiment has an 80% probability of detecting a real difference or true effect between groups when one genuinely exists, rather than results being attributable to random chance.

---

### Question #111 — Course 4: Process Data from Dirty to Clean (Module 1, Q2)
**Type:** Single Choice

**Prompt:**
> A company has 1,000 stores around the country. Each store tracks its inventory in live time using its point-of-sale system. Every night, each store's inventory data is sent to a central database. When customers go to the company's website, they can check if their local store has a particular item in stock, which the website does by querying the central database. Unfortunately, customers are coming to stores and finding that the item they want is sold out, even though the website said it was available. What data integrity problem does this scenario describe?

**Options:**
- **A.** ⚪ Replication
- **B.** ✅ Transfer
- **C.** ⚪ Manipulation
- **D.** ⚪ Gathering

**Why this is correct:**
> A data transfer problem occurs when data is corrupted, delayed, or lost during transmission between systems. The overnight lag in synchronizing point-of-sale data with the central website database is a classic data transfer failure.

---

### Question #112 — Course 4: Process Data from Dirty to Clean (Module 1, Q3)
**Type:** Single Choice

**Prompt:**
> In a survey about a new smartphone app, 65% of respondents report they would recommend the app to others. The margin of error for the survey is 3%. Based on that margin of error, what range reflects the population's true response?

**Options:**
- **A.** ⚪ 65-68%
- **B.** ✅ 62-68%
- **C.** ⚪ 60-63%
- **D.** ⚪ 68-71%

**Why this is correct:**
> A margin of error of 3% around a 65% point estimate means the true population value is expected to fall between 65% - 3% and 65% + 3%, producing a confidence interval of 62% to 68%.

---

### Question #113 — Course 4: Process Data from Dirty to Clean (Module 1, Q4)
**Type:** Single Choice

**Prompt:**
> A candy manufacturer conducts a survey to learn more about its customer base. Although young people are known to purchase a large percentage of its candy, due to age requirements, the survey is only sent to customers who are 18 years or older. What is likely to result?

**Options:**
- **A.** ⚪ Random sampling
- **B.** ⚪ Unbiased sampling
- **C.** ⚪ Geographically limited sampling
- **D.** ✅ Sampling bias

**Why this is correct:**
> Sampling bias occurs when segments of the target population are systematically excluded from the sample. Excluding minors under 18 from a candy preference survey when they represent major consumers skews the results.

---

### Question #114 — Course 4: Process Data from Dirty to Clean (Module 1, Q5)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: Hypothesis testing is a process to determine whether a survey or _____ has meaningful results.

**Options:**
- **A.** ⚪ data source
- **B.** ✅ experiment
- **C.** ⚪ action item
- **D.** ⚪ sample

**Why this is correct:**
> Hypothesis testing evaluates empirical data from surveys or controlled experiments to determine whether observed effects reflect statistically meaningful relationships or merely random variations.

---

### Question #115 — Course 4: Process Data from Dirty to Clean (Module 1, Q6)
**Type:** Single Choice

**Prompt:**
> A data professional in the logistics industry wants to calculate the margin of error for a study about transportation route efficiency. They know the population size and sample size. What must they also know in order to accurately calculate margin of error?

**Options:**
- **A.** ✅ Confidence level
- **B.** ⚪ Testing methodology
- **C.** ⚪ Distribution
- **D.** ⚪ Correlation

**Why this is correct:**
> Calculating margin of error requires knowing the population size, the sample size, and the desired confidence level (typically 95%), which determines the critical value used in standard error formulas.

---

### Question #116 — Course 4: Process Data from Dirty to Clean (Module 1, Q7)
**Type:** Single Choice

**Prompt:**
> As an analyst downloads a dataset from the internet to their local drive, their internet connection goes down. This interrupts the download, causing them to have an incomplete copy of the dataset on their computer. What data integrity problem does this scenario describe?

**Options:**
- **A.** ⚪ Cleaning
- **B.** ⚪ Replication
- **C.** ✅ Transfer
- **D.** ⚪ Manipulation

**Why this is correct:**
> An interrupted network download causes an incomplete dataset copy, which is an error in data transfer resulting from network failure during file migration.

---

### Question #117 — Course 4: Process Data from Dirty to Clean (Module 1, Q8)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following statements accurately describe sample size, population, and confidence level? Select all that apply.

**Options:**
- **A.** ✅ When data professionals use sample size, they are using a part of a population that is representative of the population.
- **B.** ⚪ Having an 80% confidence level is ideal, but most industries hope for 70-75%.
- **C.** ✅ Confidence level is the probability that a sample accurately reflects the greater population.
- **D.** ✅ Random sampling involves selecting a sample from a population so that every possible type of the sample has an equal chance of being chosen.

**Why this is correct:**
> Sample size uses a representative subset of a population, random sampling provides every member an equal chance of selection, and confidence level indicates the probability that sample estimates contain the true population parameter.

---

### Question #118 — Course 4: Process Data from Dirty to Clean (Module 2, Q1)
**Type:** Single Choice

**Prompt:**
> To better understand customer needs and preferences, a data team merges a dataset of customer purchase histories with a dataset of customer demographics. What should the data team do to ensure the compatibility of the two datasets?

**Options:**
- **A.** ⚪ Use a visualization
- **B.** ⚪ Apply a data structure
- **C.** ✅ Map the data
- **D.** ⚪ Spotcheck for null values

**Why this is correct:**
> Data mapping is the process of matching fields from disparate source datasets to standardize schemas, verify compatibility, and ensure seamless merging.

---

### Question #119 — Course 4: Process Data from Dirty to Clean (Module 2, Q2)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: When typing a TRIM function, the correct _____ to follow is =TRIM(range).

**Options:**
- **A.** ⚪ validation
- **B.** ✅ syntax
- **C.** ⚪ system
- **D.** ⚪ algorithm

**Why this is correct:**
> Syntax refers to the formal grammatical rules and structure governing programming and spreadsheet formulas. The correct syntax for TRIM is `=TRIM(text)`.

---

### Question #120 — Course 4: Process Data from Dirty to Clean (Module 2, Q3)
**Type:** Single Choice

**Prompt:**
> In this spreadsheet, which function will extract Stanley Moss’s four-digit postcode?

**Associated Figure:**
![Figure for Question #120](/C:/Users/ASUS/.gemini/antigravity/brain/a965472a-3289-4da8-a57b-3e74bbd7c324/img/q_120_image6.png)

**Options:**
- **A.** ⚪ `=LEFT(C4,4)`
- **B.** ✅ `=RIGHT(C4,4)`
- **C.** ⚪ `=RIGHT(4,C4)`
- **D.** ⚪ `=LEFT(4,C4)`

**Why this is correct:**
> The `RIGHT` function extracts a specified number of characters starting from the end (right side) of a text string. `=RIGHT(C4, 4)` returns the four-digit postal code located at the end of cell C4.

---

### Question #121 — Course 4: Process Data from Dirty to Clean (Module 2, Q4)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: In a VLOOKUP function, the value of the third argument tells VLOOKUP to return the value in the _____ row from the specified column.

**Options:**
- **A.** ✅ same
- **B.** ⚪ right
- **C.** ⚪ neighboring
- **D.** ⚪ false

**Why this is correct:**
> In `=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])`, the column index argument specifies which column number to pull data from, returning the value in the exact same matching row.

---

### Question #122 — Course 4: Process Data from Dirty to Clean (Module 2, Q5)
**Type:** Single Choice

**Prompt:**
> In the following spreadsheet, a data professional wants to create product IDs in Column C. The IDs should include the product name from Column A and its version number from Column B. Which function will create the ID Raft05?

**Associated Figure:**
![Figure for Question #122](/C:/Users/ASUS/.gemini/antigravity/brain/a965472a-3289-4da8-a57b-3e74bbd7c324/img/q_122_image2.png)

**Options:**
- **A.** ⚪ `=CONCATENATE(A2*B2)`
- **B.** ⚪ `=CONCATENATE(B2, A2)`
- **C.** ✅ `=CONCATENATE(A2,B2)`
- **D.** ⚪ `=CONCATENATE(A2+B2)`

**Why this is correct:**
> The `CONCATENATE` function combines multiple cell values into a single text string separated by commas within the function arguments. `=CONCATENATE(A2, B2)` joins 'Raft' and '05' into 'Raft05'.

---

### Question #123 — Course 4: Process Data from Dirty to Clean (Module 2, Q6)
**Type:** Single Choice

**Prompt:**
> A data analyst wants to know how many cells from A2 through A50 contain numbers below 100. Which of the following COUNTIF statements should they use?

**Options:**
- **A.** ⚪ `=COUNTIF(A2:A50, <=100)`
- **B.** ⚪ `=COUNTIF(A2:A50,">=100")`
- **C.** ✅ `=COUNTIF(A2:A50,"<100")`
- **D.** ⚪ `=COUNTIF(A2:A50, >100)`

**Why this is correct:**
> The `COUNTIF` function counts cells satisfying a logical condition, where conditions containing operators must be enclosed in quotation marks. `=COUNTIF(A2:A50, "<100")` counts all values less than 100.

---

### Question #124 — Course 4: Process Data from Dirty to Clean (Module 2, Q7)
**Type:** Single Choice

**Prompt:**
> A data analyst uses a spreadsheet’s Split tool to place each vegetable and fruit into new, separate cells. What is the comma’s function in this scenario?

**Associated Figure:**
![Figure for Question #124](/C:/Users/ASUS/.gemini/antigravity/brain/a965472a-3289-4da8-a57b-3e74bbd7c324/img/q_124_image4.png)

**Options:**
- **A.** ✅ Delimiter
- **B.** ⚪ Duplicate
- **C.** ⚪ Substring
- **D.** ⚪ String

**Why this is correct:**
> A delimiter is a character (such as a comma, tab, or space) used to separate distinct data items or text tokens within a single cell.

---

### Question #125 — Course 4: Process Data from Dirty to Clean (Module 2, Q8)
**Type:** Single Choice

**Prompt:**
> A junior data analyst needs to search their spreadsheet for a particular client ID. In order to identify all cells containing the ID, they use a spreadsheet tool that changes how cells appear when values meet specific conditions. What tool do they use?

**Options:**
- **A.** ✅ Conditional formatting
- **B.** ⚪ Field length
- **C.** ⚪ Data merging
- **D.** ⚪ Cell filtering

**Why this is correct:**
> Conditional formatting dynamically alters the background color, font, or styling of cells based on specified criteria or rules, making matching client IDs visually stand out.

---

### Question #126 — Course 4: Process Data from Dirty to Clean (Module 2, Q9)
**Type:** Single Choice

**Prompt:**
> The owner of a local landscaping business just acquired the customers from another landscaping business where the owner retired. Both owners had created their own databases containing customer information, including names, phone numbers, and services requested. The new owner wants to combine this customer data into a single, unified database so that they have everything in one place. However, there might be duplicates like customers who used both services and inconsistencies like differences in how names or phone numbers are entered in the data. What is the most important step to take before the new owner starts analyzing customer data for marketing campaigns?

**Options:**
- **A.** ⚪ Develop targeted marketing campaigns for the new customer base.
- **B.** ✅ Data mapping to standardize, merge, and clean the data from both databases.
- **C.** ⚪ Use VLOOKUP to merge the customer email addresses.
- **D.** ⚪ Design attractive visualizations for presenting the combined data.

**Why this is correct:**
> Before combining customer databases for marketing analysis, data mapping is the essential first step to align fields, eliminate duplicates, and resolve naming inconsistencies between the legacy systems.

---

### Question #127 — Course 4: Process Data from Dirty to Clean (Module 2, Q10)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> You are a new data analyst and you want to make sure to avoid common pitfalls when cleaning data. Which of the following steps should you take to ensure a smooth and accurate data cleaning process? Select all that apply.

**Options:**
- **A.** ✅ Examine the data to understand the data cleaning needs before you start.
- **B.** ⚪ Identify and address spelling errors before you start.
- **C.** ✅ Focus on cleaning a small sample set of the data first.
- **D.** ⚪ Clean the data before making a backup copy.

**Why this is correct:**
> Effective data cleaning best practices include examining the dataset upfront to diagnose cleaning requirements and testing transformation workflows on a small sample set before running them on full data files.

---

### Question #128 — Course 4: Process Data from Dirty to Clean (Module 3, Q1)
**Type:** Single Choice

**Prompt:**
> A data analyst at a logistics company is tasked with analyzing routes and transit times for all orders. The current database of orders contains millions of rows. What tool would be most efficient for the analyst to use?

**Options:**
- **A.** ⚪ Spreadsheet
- **B.** ⚪ CSV
- **C.** ⚪ Word processor
- **D.** ✅ SQL

**Why this is correct:**
> SQL relational databases are specifically designed to query and process datasets containing millions of records with high speed and reliability, far outperforming spreadsheets or word processors.

---

### Question #129 — Course 4: Process Data from Dirty to Clean (Module 3, Q2)
**Type:** Single Choice

**Prompt:**
> A data analyst discovers that their database has recognized product price data as text strings. What SQL function can the analyst use to convert the text strings to floats?

**Options:**
- **A.** ⚪ SUBSTR
- **B.** ✅ CAST
- **C.** ⚪ LENGTH
- **D.** ⚪ TRIM

**Why this is correct:**
> The `CAST` function converts an expression or column from one data type to another, such as converting text strings representing numbers into floating-point numbers.

---

### Question #130 — Course 4: Process Data from Dirty to Clean (Module 3, Q3)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: A junior data analyst in the engineering department uses the SQL command _____ to add a new row of product specification data to their organization’s database.

**Options:**
- **A.** ⚪ UPDATE
- **B.** ✅ INSERT INTO
- **C.** ⚪ DROP TABLE IF EXISTS
- **D.** ⚪ CREATE TABLE IF NOT EXISTS

**Why this is correct:**
> The `INSERT INTO` command is the standard SQL statement used to add new rows of data into an existing database table.

---

### Question #131 — Course 4: Process Data from Dirty to Clean (Module 3, Q4)
**Type:** Single Choice

**Prompt:**
> You are working with a database table that has columns about trees, such as tree_species. Which SUBSTR function and AS command will retrieve the first 3 characters of each species name and store the result in a new column called species_ID?

**Options:**
- **A.** ⚪ SUBSTR(tree_species, 3) AS species_ID
- **B.** ⚪ SUBSTR AS (tree_species 1, 3) species_ID
- **C.** ✅ SUBSTR(tree_species, 1, 3) AS species_ID
- **D.** ⚪ SUBSTR(tree_species, 1, 3 AS) species_ID

**Why this is correct:**
> In SQL, `SUBSTR(string, start_position, length)` extracts a substring, and the `AS` keyword assigns an alias name to the resulting column. `SUBSTR(tree_species, 1, 3) AS species_ID` is the proper syntax.

---

### Question #132 — Course 4: Process Data from Dirty to Clean (Module 3, Q5)
**Type:** Single Choice

**Prompt:**
> In SQL, what function can be used to remove duplicate spaces from a piece of data?

**Options:**
- **A.** ⚪ AVG
- **B.** ⚪ FORMAT
- **C.** ✅ TRIM
- **D.** ⚪ SUBSTR

**Why this is correct:**
> The SQL `TRIM` function strips unwanted leading, trailing, and duplicate whitespace characters from string data.

---

### Question #133 — Course 4: Process Data from Dirty to Clean (Module 3, Q6)
**Type:** Single Choice

**Prompt:**
> While working with a database table that contains the column computer_model, you notice that there are some duplicate entries. Which SQL clause would you use in a query to return the computer_model data without these duplicates?

**Options:**
- **A.** ✅ DISTINCT computer_model
- **B.** ⚪ DROP computer_model
- **C.** ⚪ DELETE computer_model
- **D.** ⚪ DUPLICATE computer_model

**Why this is correct:**
> The `DISTINCT` keyword in a `SELECT` statement filters out duplicate rows from the query output, returning only unique values for the specified column.

---

### Question #134 — Course 4: Process Data from Dirty to Clean (Module 3, Q7)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: The SQL command _____ is irreversible, so data analysts should consider whether data should be backed up before using it.

**Options:**
- **A.** ⚪ INSERT INTO
- **B.** ⚪ CREATE TABLE IF NOT EXISTS
- **C.** ⚪ UPDATE
- **D.** ✅ DROP TABLE IF EXISTS

**Why this is correct:**
> The `DROP TABLE IF EXISTS` command permanently removes an entire database table and all its stored records without an undo option, making prior data backups critical.

---

### Question #135 — Course 4: Process Data from Dirty to Clean (Module 3, Q8)
**Type:** Single Choice

**Prompt:**
> You are using a database table that includes the column user_password, and you want to make sure all passwords are aligned to company protocols. Which SQL clause will help you confirm that the passwords are 15 characters long?

**Options:**
- **A.** ⚪ COUNT(user_password) > 15
- **B.** ⚪ WHERE(user_password) < 15
- **C.** ⚪ `IDENTIFY(user_password) = 15`
- **D.** ✅ `LENGTH(user_password) = 15`

**Why this is correct:**
> The `LENGTH()` function evaluates the character count of a text field. `LENGTH(user_password) = 15` filters for passwords that contain exactly 15 characters.

---

### Question #136 — Course 4: Process Data from Dirty to Clean (Module 3, Q9)
**Type:** Single Choice

**Prompt:**
> As you migrate data from a legacy system to a new database, you find that many client records contain missing values in the email_address column. What SQL function can you use to replace these null values with a value in a different column?

**Options:**
- **A.** ⚪ TRIM
- **B.** ⚪ CONCAT
- **C.** ✅ COALESCE
- **D.** ⚪ CAST

**Why this is correct:**
> The `COALESCE()` function evaluates arguments in order and returns the first non-null value, making it ideal for substituting null entries with fallback values from alternative columns.

---

### Question #137 — Course 4: Process Data from Dirty to Clean (Module 4, Q1)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: A data analyst keeps important code in a _____, enabling other developers on the team to access the most current version of the code and collaborate effectively.

**Options:**
- **A.** ⚪ dashboard
- **B.** ⚪ changelog
- **C.** ✅ version control system
- **D.** ⚪ dataset

**Why this is correct:**
> A version control system (such as Git) tracks code revisions, maintains project history, and enables seamless collaboration among team developers.

---

### Question #138 — Course 4: Process Data from Dirty to Clean (Module 4, Q2)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Why might it be a good idea to ask a teammate or someone else not directly involved in your project to review your data? Select all that apply.

**Options:**
- **A.** ⚪ You should never allow other people to review your data.
- **B.** ⚪ It helps spread out the work.
- **C.** ✅ You might be too familiar with your data, and therefore more prone to miss things or make assumptions about it.
- **D.** ✅ It can be useful getting a different perspective on it.

**Why this is correct:**
> Peer data reviews provide fresh perspectives and reduce blind spots. Analysts working closely with data can become too familiar with it, overlooking subtle biases or hidden anomalies.

---

### Question #139 — Course 4: Process Data from Dirty to Clean (Module 4, Q3)
**Type:** Single Choice

**Prompt:**
> Which SQL clause will consider a condition and return a value when that condition is met? CASE column_name = 'condition' THEN 'value' END CASE

**Options:**
- **A.** ✅ `WHEN column_name = 'condition' THEN 'value' END`
- **B.** ⚪ `WHEN column_name = 'condition' CASE 'value' END`
- **C.** ⚪ WHEN
- **D.** ⚪ `CASE column_name = 'condition' THEN 'value' END`

**Why this is correct:**
> In SQL, `CASE` statements evaluate conditional logic using `WHEN condition THEN result` pairs and terminate with `END`.

---

### Question #140 — Course 4: Process Data from Dirty to Clean (Module 4, Q4)
**Type:** Single Choice

**Prompt:**
> What is the process of tracking changes, additions, deletions, and errors during data cleaning?

**Options:**
- **A.** ⚪ Recording
- **B.** ⚪ Cataloging
- **C.** ✅ Documentation
- **D.** ⚪ Observation

**Why this is correct:**
> Data documentation involves tracking all modifications, transformations, schema adjustments, and cleaning operations to maintain data integrity and auditability.

---

### Question #141 — Course 4: Process Data from Dirty to Clean (Module 4, Q5)
**Type:** Single Choice

**Prompt:**
> You start a complex SQL project that will take more than a year to complete. To ensure you have proper documentation of any modifications you make to your queries, what should you do?

**Options:**
- **A.** ⚪ Open a notepad
- **B.** ⚪ Visualize data
- **C.** ✅ Write a changelog
- **D.** ⚪ Create a spreadsheet

**Why this is correct:**
> A changelog is a chronological record of all modifications, updates, and bug fixes applied to code or datasets, ensuring full visibility over project evolution.

---

### Question #142 — Course 4: Process Data from Dirty to Clean (Module 4, Q6)
**Type:** Single Choice

**Prompt:**
> A junior data analyst notices an error in a product ID number in their dataset. Using a pivot table in Google Sheets, what function will let them know how many times this error occurs within the dataset?

**Options:**
- **A.** ✅ COUNTA
- **B.** ⚪ CONCAT
- **C.** ⚪ CHECK
- **D.** ⚪ CASE

**Why this is correct:**
> In spreadsheet pivot tables, the `COUNTA` function counts the number of non-empty cells across a field, enabling analysts to quantify occurrences of specific IDs or entries.

---

### Question #143 — Course 4: Process Data from Dirty to Clean (Module 4, Q7)
**Type:** Single Choice

**Prompt:**
> You are a data analyst responsible for cleaning sales data entered manually by the sales team into a shared spreadsheet. Month after month, you notice and document in your cleaning report that a significant number of entries for Product_ID contain typos (e.g., transposing digits, using O instead of 0, etc.). These errors require considerable time to identify and correct during the cleaning process before the data can be used for reporting. During the feedback phase of the data cleaning process, what would be the most effective recommendation to propose to stakeholders or the process owner?

**Options:**
- **A.** ⚪ To build an automated script that runs after data entry each month to specifically find and fix the common Product_ID typos before analysis begins.
- **B.** ✅ To implement a change in the data entry process, such as using a dropdown menu for Product_ID in the spreadsheet or adding a validation rule, to prevent these typos at the source.
- **C.** ⚪ To allocate more time for data cleaning each month specifically to handle the Product_ID typos.
- **D.** ⚪ To create a comprehensive guide documenting all known Product_ID typos and distribute it to the sales team, asking them to be more careful.

**Why this is correct:**
> Preventing errors at the point of capture through input validation rules or dropdown menus addresses data quality issues at the root, eliminating repetitive manual cleaning.

---

### Question #144 — Course 4: Process Data from Dirty to Clean (Module 4, Q8)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: To update a client's last name in their spreadsheet, a data professional uses _____ to search for any instance of “Reynolds” and change it to “Mehta.”

**Options:**
- **A.** ⚪ Remove duplicates
- **B.** ✅ find and replace
- **C.** ⚪ formatting
- **D.** ⚪ TRIM

**Why this is correct:**
> The Find and Replace spreadsheet tool searches for specific text strings across a sheet and substitutes them with a new designated value.

---
## Course 5: Analyze Data to Answer Questions (37 Questions)

### Question #145 — Course 5: Analyze Data to Answer Questions (Module 1, Q1)
**Type:** Single Choice

**Prompt:**
> A data analyst at a high-tech manufacturer sorts inventory data in a spreadsheet. They sort all data by ranking in the Order Frequency column, keeping together all data across rows. What spreadsheet tool are they using?

**Options:**
- **A.** ⚪ Sort column
- **B.** ⚪ Sort rows
- **C.** ✅ Sort sheet
- **D.** ⚪ Sort together

**Why this is correct:**
> The 'Sort sheet' tool reorders all rows across the entire spreadsheet based on the values in a chosen column, keeping all associated row data intact.

---

### Question #146 — Course 5: Analyze Data to Answer Questions (Module 1, Q2)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: To filter for all items in the Products table that are currently in stock, a data professional uses the _____ clause in SQL.

**Options:**
- **A.** ✅ WHERE
- **B.** ⚪ FILTER
- **C.** ⚪ LIMIT
- **D.** ⚪ EXCEPT

**Why this is correct:**
> The SQL `WHERE` clause filters records by evaluating conditional criteria, such as selecting only products where stock is greater than zero.

---

### Question #147 — Course 5: Analyze Data to Answer Questions (Module 1, Q3)
**Type:** Single Choice

**Prompt:**
> A data team needs data to build a model to predict ocean surface temperatures. They import data from several different sources into a single database in order to analyze and prepare it for modeling. What phase of analysis is the data team in?

**Options:**
- **A.** ⚪ Get input from others
- **B.** ✅ Organize data
- **C.** ⚪ Format and adjust data
- **D.** ⚪ Transform data

**Why this is correct:**
> Organizing data is the phase of analysis where analysts collect, centralize, and structure datasets from multiple sources into a unified repository before statistical transformation.

---

### Question #148 — Course 5: Analyze Data to Answer Questions (Module 1, Q4)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following statements accurately describe sorting and filtering? Select all that apply.

**Options:**
- **A.** ✅ Filtering enables data professionals to view the data that is most important.
- **B.** ⚪ Filtering can be performed in spreadsheets, but not SQL databases.
- **C.** ✅ Sorting involves arranging data into a meaningful order.
- **D.** ✅ Sorting can be performed in both spreadsheets and SQL databases.

**Why this is correct:**
> Sorting arranges records into a structured sequence (ascending or descending), while filtering displays only data matching specific parameters. Both operations can be executed in spreadsheets and SQL databases.

---

### Question #149 — Course 5: Analyze Data to Answer Questions (Module 1, Q5)
**Type:** Single Choice

**Prompt:**
> You’re a data analyst with access to data on produce sales in the table ProduceSales, but you’re only interested in analyzing rhubarb sales for your current project. Which query should you use to examine only the data on rhubarb sales?

**Options:**
- **A.** ⚪ `SELECT * FROM ProduceSales, rhubarb;`
- **B.** ⚪ `SELECT * FROM ProduceSales WHERE produce_type == rhubarb;`
- **C.** ⚪ `SELECT * FROM ProduceSales WHERE 'rhubarb';`
- **D.** ✅ `SELECT * FROM ProduceSales WHERE produce_type = 'rhubarb';`

**Why this is correct:**
> In SQL, filtering for string literals requires standard equality syntax: `WHERE column = 'value'`. `SELECT * FROM ProduceSales WHERE produce_type = 'rhubarb';` correctly returns only rhubarb sales.

---

### Question #150 — Course 5: Analyze Data to Answer Questions (Module 1, Q6)
**Type:** Single Choice

**Prompt:**
> Which query will return a list of all construction businesses that have made more than $8 million, from the largest number of employees to the fewest?

**Options:**
- **A.** ⚪ `SELECT * FROM `CompanyData` WHERE Business = 'Construction' WHERE Revenue < 8000000 ORDER BY number_of_employees DESC;`
- **B.** ⚪ `SELECT * FROM `CompanyData` WHERE Business = 'Construction' AND Revenue > 8000000 ORDER BY number_of_employees ASC;`
- **C.** ✅ `SELECT * FROM `CompanyData` WHERE Business = 'Construction' AND Revenue > 8000000 ORDER BY number_of_employees DESC;`
- **D.** ⚪ `SELECT * FROM `CompanyData` WHERE Business = 'Construction', Revenue < 8000000 ORDER BY number_of_employees ASC;`

**Why this is correct:**
> The query filters for `Business = 'Construction'` AND `Revenue > 8000000`, and sorts results using `ORDER BY number_of_employees DESC` to order from highest to lowest employee count.

---

### Question #151 — Course 5: Analyze Data to Answer Questions (Module 1, Q7)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> A data professional in customer service is tasked with identifying customers who are at risk for taking their business to a competitor. In the analyze phase of the data analysis process, what activities might this involve? Select all that apply.

**Options:**
- **A.** ✅ Request input from other customer service data professionals
- **B.** ✅ Format the data to filter for low customer satisfaction scores
- **C.** ⚪ Prepare a report for the stakeholders
- **D.** ✅ Organize a dataset by customer and purchase history

**Why this is correct:**
> The analysis phase includes organizing datasets by customer identifiers, transforming data through filters, and consulting with team peers to validate analytical models.

---

### Question #152 — Course 5: Analyze Data to Answer Questions (Module 1, Q8)
**Type:** Single Choice

**Prompt:**
> Which function sorts a spreadsheet range between cells C1 and D70 in ascending order by the first column, Column C?

**Options:**
- **A.** ⚪ `=SORT(C1:D70, A, FALSE)`
- **B.** ⚪ `=SORT(C1:D70, 1, FALSE)`
- **C.** ⚪ `=SORT(C1:D70, A, TRUE)`
- **D.** ✅ `=SORT(C1:D70, 1, TRUE)`

**Why this is correct:**
> The spreadsheet `SORT` function syntax is `=SORT(range, sort_column, is_ascending)`. `=SORT(C1:D70, 1, TRUE)` sorts by the first column in the range in ascending order.

---

### Question #153 — Course 5: Analyze Data to Answer Questions (Module 1, Q9)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> You’re a data analyst working with a team to analyze data. One of your team members shows you a spreadsheet they’ve sorted, but you notice that one of the columns doesn’t seem to be correctly associated with the rest of the dataset. On closer examination, you realize that only that column was sorted, instead of the entire sheet. How can you and your team member sort the entire sheet? Select all that apply.

**Options:**
- **A.** ⚪ The Sort by row option
- **B.** ⚪ The Create filter view option
- **C.** ✅ The SORT function
- **D.** ✅ The Sort sheet option

**Why this is correct:**
> To sort an entire dataset without breaking row associations, analysts can use the 'Sort sheet' menu option or the dynamic `=SORT()` array function.

---

### Question #154 — Course 5: Analyze Data to Answer Questions (Module 1, Q10)
**Type:** Single Choice

**Prompt:**
> Which query will return song_title, artist_name, and album_title in alphabetical order by song_title?

**Options:**
- **A.** ✅ `SELECT song_title, artist_name, album_title FROM music_db.songs ORDER BY song_title;`
- **B.** ⚪ `SELECT song_title, artist_name, album_title FROM music_db.songs ORDER BY album_title;`
- **C.** ⚪ `SELECT playlist_name, creation_date FROM music_db.playlists ORDER BY creation_date;`
- **D.** ⚪ `SELECT song_title, artist_name, album_title FROM music_db.songs ORDER BY artist_name DESC;`

**Why this is correct:**
> To sort alphabetically from A to Z, SQL uses `ORDER BY column_name` (ascending by default). Targeting `music_db.songs` with `ORDER BY song_title` meets all requirements.

---

### Question #155 — Course 5: Analyze Data to Answer Questions (Module 2, Q1)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: A junior data analyst at a healthcare organization uses the spreadsheet _____ function to locate specific characters from insurance provider account numbers.

**Options:**
- **A.** ✅ FIND
- **B.** ⚪ IDENTIFY
- **C.** ⚪ FROM
- **D.** ⚪ WHERE

**Why this is correct:**
> The spreadsheet `FIND` function is case-sensitive and locates the starting character position of a target substring within a designated text string.

---

### Question #156 — Course 5: Analyze Data to Answer Questions (Module 2, Q2)
**Type:** Single Choice

**Prompt:**
> A data analyst works with a spreadsheet containing product information that often has very long text strings. To check for consistency, they use a function to count the number of characters in cell P12. What is the correct syntax of the function?

**Options:**
- **A.** ✅ `=LEN(P12)`
- **B.** ⚪ `=LEN(P,12)`
- **C.** ⚪ `=LEN(P:P12)`
- **D.** ⚪ `=LEN(P:12)`

**Why this is correct:**
> The `LEN` function evaluates and returns the character length of a cell. The standard syntax is `=LEN(cell_reference)`, such as `=LEN(P12)`.

---

### Question #157 — Course 5: Analyze Data to Answer Questions (Module 2, Q3)
**Type:** Single Choice

**Prompt:**
> You use a spreadsheet to organize a list of upcoming tasks at work. Column A contains the list of tasks, and column B notes their priority: high, medium, or low. What spreadsheet tool will create a drop-down list of the priorities in column B?

**Options:**
- **A.** ⚪ Find
- **B.** ✅ Data validation
- **C.** ⚪ Pop-up menus
- **D.** ⚪ Conditional formatting

**Why this is correct:**
> Spreadsheet Data Validation allows creators to define strict input parameters, including creating convenient dropdown lists from a set of permitted values.

---

### Question #158 — Course 5: Analyze Data to Answer Questions (Module 2, Q4)
**Type:** Single Choice

**Prompt:**
> An analyst works with financial data that is formatted as numbers, but it should be formatted as U.S. dollars. What spreadsheet tool should they use to correct the format?

**Options:**
- **A.** ⚪ The “Format as money” shortcut
- **B.** ⚪ The “Format as Euros” shortcut
- **C.** ⚪ The “Format as dollars” shortcut
- **D.** ✅ The “Format as currency” shortcut

**Why this is correct:**
> The 'Format as currency' shortcut converts plain numeric values into standard currency formatting with appropriate monetary symbols and decimal places.

---

### Question #159 — Course 5: Analyze Data to Answer Questions (Module 2, Q5)
**Type:** Single Choice

**Prompt:**
> You use a SQL database to evaluate rideshare efficiency. The database table contains one column of pick-up locations and another column of drop-off locations. What function will combine the pick-up and drop-off locations into a new column?

**Options:**
- **A.** ⚪ GROUP
- **B.** ✅ CONCAT
- **C.** ⚪ JOIN
- **D.** ⚪ COMBINE

**Why this is correct:**
> The `CONCAT()` function in SQL joins two or more text expressions or column values into a single consolidated string.

---

### Question #160 — Course 5: Analyze Data to Answer Questions (Module 2, Q6)
**Type:** Single Choice

**Prompt:**
> A data analyst at a symphony orchestra uses a spreadsheet to track how many concerts require more than 65 musicians. What spreadsheet tool can they use to change how cells appear when values equal 65 or more?

**Options:**
- **A.** ✅ Conditional formatting
- **B.** ⚪ Add color
- **C.** ⚪ CONVERT
- **D.** ⚪ Data validation

**Why this is correct:**
> Conditional formatting automatically applies specific visual styling (such as colors or bolding) to cells when their contents satisfy defined logical criteria.

---

### Question #161 — Course 5: Analyze Data to Answer Questions (Module 2, Q7)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: A data analyst analyzing the boiling points of various liquids uses the SQL function _____ to adjust 356.727801 °C to just three decimal places.

**Options:**
- **A.** ⚪ SHORTEN
- **B.** ⚪ DECIMAL
- **C.** ⚪ TRUNCATE
- **D.** ✅ ROUND

**Why this is correct:**
> The `ROUND(numeric_expression, decimal_places)` SQL function rounds a floating-point number to a specified number of decimal positions.

---

### Question #162 — Course 5: Analyze Data to Answer Questions (Module 2, Q8)
**Type:** Single Choice

**Prompt:**
> Spreadsheet cell E4 contains the text string Insights. To return the substring sights, what is the correct syntax?

**Options:**
- **A.** ✅ `=RIGHT(E4, 6)`
- **B.** ⚪ `=RIGHT(6, E4)`
- **C.** ⚪ `=LEFT(6, E4)`
- **D.** ⚪ `=LEFT(E4, 6)`

**Why this is correct:**
> The `=RIGHT(text, num_chars)` function returns the specified number of characters from the end of a string. `=RIGHT(E4, 6)` extracts the 6 rightmost characters ('sights') from 'Insights'.

---

### Question #163 — Course 5: Analyze Data to Answer Questions (Module 3, Q1)
**Type:** Single Choice

**Prompt:**
> You use VLOOKUP to search for the name “Liza Campbell.” However, the function doesn’t work properly because your spreadsheet has a repeated space between the first and last name. What function should you use to eliminate this space?

**Options:**
- **A.** ⚪ NOSPACE
- **B.** ⚪ CUT
- **C.** ✅ TRIM
- **D.** ⚪ VALUE

**Why this is correct:**
> The `TRIM()` function removes unnecessary leading, trailing, and duplicate spaces between words in a spreadsheet text string.

---

### Question #164 — Course 5: Analyze Data to Answer Questions (Module 3, Q2)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: The spreadsheet function _____ can be used to add up the number of times a range of cells contains the value “paid.”

**Options:**
- **A.** ⚪ RETURN
- **B.** ⚪ COUNT DISTINCT
- **C.** ✅ COUNT
- **D.** ⚪ RANGE

**Why this is correct:**
> The `COUNT` (or `COUNTIF`) function tallies occurrences of values across a range. While `COUNTIF` counts specific string matches, among the generic spreadsheet functions, counting mechanisms tabulate recorded frequencies.

---

### Question #165 — Course 5: Analyze Data to Answer Questions (Module 3, Q3)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> A data analyst writes the following formula: =MAX($E$5:$E$500). What are the purposes of the dollar signs ($)? Select all that apply.

**Options:**
- **A.** ✅ Ensure rows and columns do not change.
- **B.** ⚪ Perform the calculation more efficiently.
- **C.** ✅ Find the maximum value in the range E5 to E500 regardless of whether the formula is copied.
- **D.** ✅ Create an absolute reference.

**Why this is correct:**
> Dollar signs (`$`) in spreadsheet formulas denote absolute cell references, preventing column and row references from shifting when formulas are copied or filled.

---

### Question #166 — Course 5: Analyze Data to Answer Questions (Module 3, Q4)
**Type:** Single Choice

**Prompt:**
> What will this query return? SELECT * FROM Equipment_table LEFT JOIN Computer_table

**Options:**
- **A.** ✅ All records in the Equipment_table table and any matching rows from the Computer_table
- **B.** ⚪ All records in both Equipment_table and Computer_table
- **C.** ⚪ All records in Computer_table and any matching rows from Equipment_table
- **D.** ⚪ All rows from Equipment_table joined together with Computer_table

**Why this is correct:**
> A `LEFT JOIN` returns all records from the left table (`Equipment_table`) along with matching records from the right table (`Computer_table`). Unmatched rows from the right table return NULL.

---

### Question #167 — Course 5: Analyze Data to Answer Questions (Module 3, Q5)
**Type:** Single Choice

**Prompt:**
> In this spreadsheet, which function will search for the surface area of Lake Victoria?

**Associated Figure:**
![Figure for Question #167](/C:/Users/ASUS/.gemini/antigravity/brain/a965472a-3289-4da8-a57b-3e74bbd7c324/img/q_167_image8.png)

**Options:**
- **A.** ⚪ `=VLOOKUP(Victoria, A2:B10, 3, false)`
- **B.** ⚪ `=VLOOKUP(Victoria, A2:C10, false)`
- **C.** ✅ `=VLOOKUP("Victoria", A2:B10, 2, false)`
- **D.** ⚪ `=VLOOKUP("Victoria", B2:C10, 2, false)`

**Why this is correct:**
> In `=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])`, string search keys must be enclosed in quotes (`"Victoria"`), and exact matching requires `false`.

---

### Question #168 — Course 5: Analyze Data to Answer Questions (Module 3, Q6)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: A SQL clause containing HAVING adds a _____ to a query instead of the underlying table.

**Options:**
- **A.** ⚪ subquery
- **B.** ⚪ limit
- **C.** ⚪ join
- **D.** ✅ filter

**Why this is correct:**
> The `HAVING` clause filters aggregated groups produced by `GROUP BY`, acting as a filter on the query's summarized result set rather than the underlying base table.

---

### Question #169 — Course 5: Analyze Data to Answer Questions (Module 3, Q7)
**Type:** Single Choice

**Prompt:**
> A junior data analyst in a marketing department works with a spreadsheet containing email click-through data. To calculate the average click-through rate for a campaign, the analyst uses a function to convert the number of clicks to numeric values. What function do they use?

**Options:**
- **A.** ⚪ NUM
- **B.** ⚪ EXCHANGE
- **C.** ⚪ PROCESS
- **D.** ✅ VALUE

**Why this is correct:**
> The spreadsheet `VALUE()` function converts text representations of numbers into actual numeric values suitable for mathematical calculations.

---

### Question #170 — Course 5: Analyze Data to Answer Questions (Module 3, Q8)
**Type:** Single Choice

**Prompt:**
> Which query will select all columns from the operations table and alias the table to ops? SELECT * FROM operations ALIAS ops SELECT * FROM operations AS ops

**Options:**
- **A.** ✅ `SELECT * FROM operations AS ops`
- **B.** ⚪ `SELECT * FROM operations ALIAS ops`
- **C.** ⚪ `SELECT * FROM operations TO ops`
- **D.** ⚪ `SELECT * FROM operations NEW ops`

**Why this is correct:**
> In SQL, table aliasing assigns temporary shorthand names using the `AS` keyword: `SELECT * FROM operations AS ops`.

---

### Question #171 — Course 5: Analyze Data to Answer Questions (Module 3, Q9)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> What are the benefits of using subqueries in SQL? Select all that apply.

**Options:**
- **A.** ⚪ Subqueries can be nested in a SET command.
- **B.** ✅ Subqueries can make projects easier and more efficient.
- **C.** ✅ Subqueries make code more readable and maintainable.
- **D.** ⚪ Subqueries cannot be used within the same query.

**Why this is correct:**
> Subqueries (nested queries) simplify complex multi-step operations into clean, modular blocks, making SQL code more readable and easier to maintain.

---

### Question #172 — Course 5: Analyze Data to Answer Questions (Module 3, Q10)
**Type:** Single Choice

**Prompt:**
> What does this code do? SELECT account_table.* FROM ( SELECT * FROM transaction.sf_model_feature_2014_01 WHERE day_of_week = 'Monday' ) AS account_table WHERE account_table.availability = 'NO'

**Options:**
- **A.** ⚪ It selects all data from the transaction.sf_model_feature_2014_01 table.
- **B.** ⚪ It creates a temporary table named account_table containing all transactions from transaction.sf_model_feature_2014_01.
- **C.** ⚪ It filters the transaction.sf_model_feature_2014_01 table to include only transactions on Fridays.
- **D.** ✅ It selects all columns from the table containing transactions on Monday and filters them to display only the transactions that are unavailable.

**Why this is correct:**
> The inner subquery filters the transactions table for Monday activity, and the outer query selects all columns from that derived table where availability equals 'NO'.

---

### Question #173 — Course 5: Analyze Data to Answer Questions (Module 3, Q11)
**Type:** Single Choice

**Prompt:**
> What does this code do? SELECT e.employee_id, e.first_name, e.last_name, e.salary FROM employees e WHERE e.salary > ( SELECT AVG(salary) FROM employees WHERE department_id = e.department_id );

**Options:**
- **A.** ✅ It finds employees who earn more than the average salary in their department.
- **B.** ⚪ It calculates the average salary for all employees.
- **C.** ⚪ It groups employees by department.
- **D.** ⚪ It joins the employees table with itself.

**Why this is correct:**
> The query uses a correlated subquery to compute each department's average salary and returns only employees whose salary exceeds their department's average.

---

### Question #174 — Course 5: Analyze Data to Answer Questions (Module 4, Q1)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> A data analyst at a recycling company manually recalculates the new column materials_sorter. They want to identify any rows with values that do not match those in the original column, compost_sorter. Which SQL clauses would enable them to do so? Select all that apply.

**Options:**
- **A.** ⚪ WHERE materials_sorter >< compost_sorter
- **B.** ⚪ WHERE materials_sorter !! compost_sorter
- **C.** ✅ WHERE materials_sorter <> compost_sorter
- **D.** ✅ `WHERE materials_sorter != compost_sorter`

**Why this is correct:**
> In SQL, inequality can be expressed using either the standard ANSI operator `<>` or the exclamation operator `!=`.

---

### Question #175 — Course 5: Analyze Data to Answer Questions (Module 4, Q2)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: The SQL command _____ combines table rows with the same values into summary rows.

**Options:**
- **A.** ⚪ ORDER BY
- **B.** ⚪ WITH
- **C.** ✅ GROUP BY
- **D.** ⚪ TABLE

**Why this is correct:**
> The `GROUP BY` clause groups rows sharing identical values in specified columns into summary rows, typically used alongside aggregate functions like SUM or AVG.

---

### Question #176 — Course 5: Analyze Data to Answer Questions (Module 4, Q3)
**Type:** Single Choice

**Prompt:**
> What will this spreadsheet function return? =SUMIF(K20:K70, ”>=50”, L20:L70)

**Options:**
- **A.** ⚪ The count of the number of cells in the array K20:K70 that have a value greater than or equal to 50.
- **B.** ⚪ The sum of all values in cells K20 to K70 for which the value in cells L20 to L70 is greater than or equal to 50.
- **C.** ⚪ The sum of any values in cells K20 to K70 and cells L20 to L70 that are greater than or equal to 50.
- **D.** ✅ The sum of all values in cells L20 to L70 that correspond to values in cells K20 to K70 that are greater than or equal to 50.

**Why this is correct:**
> In `=SUMIF(range, criterion, [sum_range])`, the function evaluates cells K20:K70 for values >= 50, and sums the corresponding values in cells L20:L70.

---

### Question #177 — Course 5: Analyze Data to Answer Questions (Module 4, Q4)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following statements accurately describe pivot tables? Select all that apply.

**Options:**
- **A.** ⚪ The columns of a pivot table organize and group data horizontally.
- **B.** ✅ A pivot table can be used to count, total, or average data.
- **C.** ✅ The filters section of a pivot table is used to apply filters based on specific criteria.
- **D.** ✅ The calculated field in a pivot table is a new field that carries out calculations based on the values of other fields.

**Why this is correct:**
> Pivot tables aggregate data using calculated fields, allow multi-dimensional filtering, and can compute counts, sums, or averages across grouped categories.

---

### Question #178 — Course 5: Analyze Data to Answer Questions (Module 4, Q5)
**Type:** Single Choice

**Prompt:**
> A data professional in the trucking industry calculates the number of spreadsheet rows that contain the SKU value BK09876. Which function do they use?

**Options:**
- **A.** ✅ `=COUNTIF(G2:G30,“BK09876”)`
- **B.** ⚪ `=COUNTIF(G2:G30,“cell=BK09876”)`
- **C.** ⚪ `=COUNTIF(G2:G30,BK09876)`
- **D.** ⚪ `=COUNTIF(BK09876=G2:G30)`

**Why this is correct:**
> The `=COUNTIF(range, criterion)` syntax tallies cells matching a condition. `=COUNTIF(G2:G30, "BK09876")` counts occurrences of the specified SKU in column G.

---

### Question #179 — Course 5: Analyze Data to Answer Questions (Module 4, Q6)
**Type:** Single Choice

**Prompt:**
> What is a primary reason data analysts use temporary tables or similar structures (like WITH clauses) when working with SQL?

**Options:**
- **A.** ✅ To store intermediate results or frequently used subsets of data, making complex queries more manageable and potentially more efficient.
- **B.** ⚪ To establish universal naming conventions for tables that all database systems recognize automatically.
- **C.** ⚪ To permanently alter the data types of columns in the original source tables.
- **D.** ⚪ To automatically ensure that the underlying source data is refreshed in real-time whenever the temporary table is queried.

**Why this is correct:**
> Temporary tables and Common Table Expressions (WITH clauses) break down intricate queries, storing intermediate subsets of data to optimize performance and readability.

---

### Question #180 — Course 5: Analyze Data to Answer Questions (Module 4, Q7)
**Type:** Single Choice

**Prompt:**
> Which SQL statement will create a temporary table?

**Options:**
- **A.** ⚪ `CREATE TABLE my_table AS ( SELECT * FROM other_table );`
- **B.** ✅ `WITH my_table AS ( SELECT * FROM other_table WHERE x = 0 );`
- **C.** ⚪ `WITH my_table FROM ( SELECT * FROM other_table );`
- **D.** ⚪ `SELECT * FROM table;`

**Why this is correct:**
> A Common Table Expression (CTE) creates a temporary named result set using the `WITH table_name AS (SELECT ...)` syntax.

---

### Question #181 — Course 5: Analyze Data to Answer Questions (Module 4, Q8)
**Type:** Single Choice

**Prompt:**
> Which column of the original data was set as a "Value" when making this pivot table?

**Associated Figure:**
![Figure for Question #181](/C:/Users/ASUS/.gemini/antigravity/brain/a965472a-3289-4da8-a57b-3e74bbd7c324/img/q_181_image7.png)

**Options:**
- **A.** ⚪ time
- **B.** ⚪ COUNT
- **C.** ⚪ (Lunch, Dinner)
- **D.** ✅ num_diners

**Why this is correct:**
> In pivot tables, the Values field calculates aggregated numeric metrics. The `num_diners` column was designated as the Value to calculate totals or averages.

---
## Course 6: Share Data Through the Art of Visualization (34 Questions)

### Question #182 — Course 6: Share Data Through the Art of Visualization (Module 1, Q1)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: A data professional includes _____ visualizations in a presentation because stakeholders want to monitor data streams for information that is constantly changing.

**Options:**
- **A.** ⚪ published
- **B.** ⚪ embedded
- **C.** ✅ dynamic
- **D.** ⚪ static

**Why this is correct:**
> Dynamic visualizations continuously ingest live data feeds to update in real time, enabling stakeholders to monitor fluctuating metrics and changing conditions.

---

### Question #183 — Course 6: Share Data Through the Art of Visualization (Module 1, Q2)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> You are a junior data analyst at a web design firm presenting new website features to a client. The client team represents a broad audience of people. What steps should you take to help your visualizations be accessible to everyone? Select all that apply.

**Options:**
- **A.** ⚪ Minimize contrast between colors
- **B.** ✅ Provide text alternatives
- **C.** ✅ Label data directly whenever possible
- **D.** ⚪ Reduce the amount of information in the presentation

**Why this is correct:**
> Accessible visual design involves providing descriptive alternative text, directly labeling data points to reduce legend dependency, and maintaining high color contrast for readability.

---

### Question #184 — Course 6: Share Data Through the Art of Visualization (Module 1, Q3)
**Type:** Single Choice

**Prompt:**
> A data analyst in the science field visualizes the distribution of the length of a species of fish. The graphic represents how often the data values fall into certain ranges. What type of visualization have they created?

**Options:**
- **A.** ⚪ Venn diagram
- **B.** ✅ Histogram
- **C.** ⚪ Bar graph
- **D.** ⚪ Pie chart

**Why this is correct:**
> A histogram visualizes the frequency distribution of a continuous variable (such as fish lengths) divided into consecutive numerical bins or intervals.

---

### Question #185 — Course 6: Share Data Through the Art of Visualization (Module 1, Q4)
**Type:** Single Choice

**Prompt:**
> A data professional working in online sales finds that products frequently discussed on social media tend to sell more units. They discover this because two variables in their data rise and fall at the same time. What is this an example of?

**Options:**
- **A.** ⚪ Tabulation
- **B.** ✅ Correlation
- **C.** ⚪ Causation
- **D.** ⚪ Visualization

**Why this is correct:**
> Correlation describes a statistical relationship where two variables change in tandem, indicating co-movement without necessarily establishing direct cause-and-effect.

---

### Question #186 — Course 6: Share Data Through the Art of Visualization (Module 1, Q5)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following statements accurately describe key elements of data visualizations? Select all that apply.

**Options:**
- **A.** ⚪ Lines in visualizations must be thin.
- **B.** ✅ The value is how light or dark the colors are.
- **C.** ✅ Shapes can be used to add eye-catching contrast to a data story.
- **D.** ✅ The intensity of a color is how bright or dull it is.

**Why this is correct:**
> Effective visualizations leverage color value (lightness vs. darkness), color intensity/saturation (brightness vs. dullness), and geometric shapes to create contrast and emphasize key insights.

---

### Question #187 — Course 6: Share Data Through the Art of Visualization (Module 1, Q6)
**Type:** Single Choice

**Prompt:**
> While creating a chart, a data analyst chooses a darker shade for outliers and a lighter tint for data points that are above or below a certain threshold. Which element of effective visualization does this describe?

**Options:**
- **A.** ⚪ Clear meaning
- **B.** ⚪ Refined execution
- **C.** ⚪ Subtitles
- **D.** ✅ Sophisticated use of contrast

**Why this is correct:**
> Sophisticated use of contrast draws viewers' eyes directly to meaningful data points, such as highlighting outliers with prominent darker tones while subduing baseline points.

---

### Question #188 — Course 6: Share Data Through the Art of Visualization (Module 1, Q7)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: Pie charts use _____ to combine the individual parts in a visualization and display them together as a whole, which can help reveal patterns and trends not visible in the original datasets.

**Options:**
- **A.** ⚪ patterns
- **B.** ✅ data composition
- **C.** ⚪ sizing
- **D.** ⚪ color shading

**Why this is correct:**
> Data composition combines individual proportional components to depict parts of a whole, as seen in pie charts illustrating relative category market shares.

---

### Question #189 — Course 6: Share Data Through the Art of Visualization (Module 1, Q8)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following statements correctly describe bar graphs? Select all that apply.

**Options:**
- **A.** ⚪ Bar graphs use segments to represent the proportions of each data category compared to the whole.
- **B.** ✅ The horizontal line of a bar graph, usually placed at bottom, is called the x-axis.
- **C.** ✅ Bar graphs use size contrast to compare two or more values.
- **D.** ✅ The vertical line of a bar graph usually placed to the left is called the y-axis.

**Why this is correct:**
> Bar graphs compare quantities across categories using size contrast. By convention, the horizontal axis is the x-axis and the vertical axis is the y-axis.

---

### Question #190 — Course 6: Share Data Through the Art of Visualization (Module 2, Q1)
**Type:** Single Choice

**Prompt:**
> By default, all visualizations created using Tableau Public are available to other users. How do you hide a Viz that you are not ready to share yet??

**Options:**
- **A.** ✅ Toggle Show Viz on Profile to off
- **B.** ⚪ Select File and Save and then select Private
- **C.** ⚪ Select Source and the Private
- **D.** ⚪ Lock the Viz

**Why this is correct:**
> In Tableau Public, unchecking or toggling off 'Show Viz on Profile' hides a workbook from the public profile view until it is ready for release.

---

### Question #191 — Course 6: Share Data Through the Art of Visualization (Module 2, Q2)
**Type:** Single Choice

**Prompt:**
> A data team uses Tableau to create a line chart of financial data, with the ability to filter by company, industry, and time period. This enables financial analysts to view how companies are performing relative to their peers and the overall market. What type of visualization are they using?

**Options:**
- **A.** ⚪ Infographic
- **B.** ✅ Interactive
- **C.** ⚪ Public
- **D.** ⚪ Static

**Why this is correct:**
> Interactive visualizations feature dynamic controls (such as dropdown filters, tooltips, and sliders) allowing users to explore customized subsets of data.

---

### Question #192 — Course 6: Share Data Through the Art of Visualization (Module 2, Q3)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: A diverging palette is a color theme that displays two ranges of data values using two different hues, with color _____ representing the magnitude of the values.

**Options:**
- **A.** ⚪ overlays
- **B.** ✅ intensity
- **C.** ⚪ markers
- **D.** ⚪ borders

**Why this is correct:**
> A diverging color palette uses two distinct hues with varying intensity radiating from a neutral midpoint, where saturation signifies the magnitude of positive or negative extremes.

---

### Question #193 — Course 6: Share Data Through the Art of Visualization (Module 2, Q4)
**Type:** Single Choice

**Prompt:**
> While designing a bar chart in Tableau, you use a color scheme with high contrast between the bars to ensure they are easy to distinguish for people with color vision deficiencies. What does it mean to have contrast?

**Options:**
- **A.** ⚪ The color scheme is uniform
- **B.** ⚪ The color scheme is aesthetically pleasing
- **C.** ✅ The color scheme uses a range of different colors
- **D.** ⚪ The color scheme is monotone

**Why this is correct:**
> Color contrast relies on distinct visual variations in hue and value, making adjacent bars easily distinguishable for audiences with color vision deficiencies.

---

### Question #194 — Course 6: Share Data Through the Art of Visualization (Module 2, Q5)
**Type:** Single Choice

**Prompt:**
> An analyst works with Tableau to analyze highway traffic data. They select specific time routes in the southeastern United States, then analyze the traffic patterns in those states. What tool do they use to select this region?

**Options:**
- **A.** ⚪ Rectangular
- **B.** ⚪ Pan
- **C.** ⚪ Radial
- **D.** ✅ Lasso

**Why this is correct:**
> The Lasso selection tool in Tableau allows analysts to draw freeform boundaries around irregular geographic clusters or data points on a map.

---

### Question #195 — Course 6: Share Data Through the Art of Visualization (Module 2, Q6)
**Type:** Single Choice

**Prompt:**
> You use Tableau for an analysis project about cheese-tasting preferences. You drag the Cheese Type field onto a shelf, selecting the specific cheese type cheddar. This enables you to visualize a subset of the data that is relevant to your analysis. What menu are you using in this scenario?

**Options:**
- **A.** ✅ Filters
- **B.** ⚪ Formats
- **C.** ⚪ Attributes
- **D.** ⚪ Dimensions

**Why this is correct:**
> In Tableau, dragging a field to the Filters shelf restricts the visualization to specific chosen values (such as filtering specifically for 'cheddar').

---

### Question #196 — Course 6: Share Data Through the Art of Visualization (Module 2, Q7)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: A data professional uses Tableau’s _____ tool to horizontally and vertically shift their perspective of a large map in order to better view the data about a specific smaller region.

**Options:**
- **A.** ⚪ lasso
- **B.** ✅ pan
- **C.** ⚪ radial
- **D.** ⚪ rectangular

**Why this is correct:**
> Tableau's Pan tool allows analysts to drag and shift their viewport horizontally and vertically across maps or large scatter plots without altering the zoom level.

---

### Question #197 — Course 6: Share Data Through the Art of Visualization (Module 2, Q8)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following statements accurately describe key design principles for creating data visualizations? Select all that apply.

**Options:**
- **A.** ⚪ Optimizing the number of elements might include using hue to emphasize important lines.
- **B.** ✅ Optimizing the data-ink ratio entails minimizing elements such as boxes around legends and use of shadows.
- **C.** ✅ A key color principle is keeping color consistent throughout the visuals.
- **D.** ✅ Using orientation effectively requires selecting inclusive color scales that make sense for everyone viewing them.

**Why this is correct:**
> Key visualization principles include maximizing the data-ink ratio by eliminating chart junk, maintaining consistent color palettes, and selecting inclusive, intuitive color scales.

---

### Question #198 — Course 6: Share Data Through the Art of Visualization (Module 2, Q9)
**Type:** Single Choice

**Prompt:**
> Data from which of the following scenarios is best suited for visualization using a line chart?

**Options:**
- **A.** ⚪ A range of test scores
- **B.** ✅ The rise and fall of stock prices in 2023
- **C.** ⚪ Most frequently ordered items on a menu
- **D.** ⚪ Products by type

**Why this is correct:**
> Line charts are the optimal visual format for tracking continuous changes and fluctuations in numeric metrics over time, such as daily stock prices.

---

### Question #199 — Course 6: Share Data Through the Art of Visualization (Module 2, Q10)
**Type:** Single Choice

**Prompt:**
> Which type of data is best suited for visualization using a histogram?

**Options:**
- **A.** ⚪ Comparing the distribution of 2 variables
- **B.** ✅ Continuous data over time
- **C.** ⚪ Proportional data representing parts of a whole
- **D.** ⚪ Data points without a specific order

**Why this is correct:**
> Histograms display the frequency distribution of continuous numerical data grouped into intervals, revealing underlying patterns, skewness, and spread.

---

### Question #200 — Course 6: Share Data Through the Art of Visualization (Module 3, Q1)
**Type:** Single Choice

**Prompt:**
> A junior data analyst at a manufacturing company analyzes product quality data to identify potential issues. While reviewing a scatterplot of product defect rate versus production batch, the analyst notices a data point far above the average defect rate. What should they do with this outlier?

**Options:**
- **A.** ⚪ Drop it from the scatterplot
- **B.** ✅ Determine whether it is an important observation
- **C.** ⚪ Hide it from the scatterplot
- **D.** ⚪ Move it closer to the main trendline

**Why this is correct:**
> Outliers should never be reflexively deleted; analysts must investigate them to determine whether they represent meaningful real-world phenomena or data errors.

---

### Question #201 — Course 6: Share Data Through the Art of Visualization (Module 3, Q2)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: Charts, graphs, and other dashboard elements should be cohesive, which means they are _____ and make good use of available space.

**Options:**
- **A.** ✅ balanced
- **B.** ⚪ colorful
- **C.** ⚪ labeled
- **D.** ⚪ detailed

**Why this is correct:**
> Cohesive dashboard design requires visual balance, where complementary charts, cards, and KPIs harmonize across available layout space without overcrowding.

---

### Question #202 — Course 6: Share Data Through the Art of Visualization (Module 3, Q3)
**Type:** Single Choice

**Prompt:**
> You are building a dashboard in Tableau. To create a single-layer grid that contains no overlapping elements, which layout should you choose?

**Options:**
- **A.** ⚪ Itemized
- **B.** ⚪ Layered
- **C.** ⚪ Floating
- **D.** ✅ Tiled

**Why this is correct:**
> A Tiled layout in Tableau snaps elements into a single-layer, non-overlapping grid, whereas a Floating layout allows objects to overlap across multiple layers.

---

### Question #203 — Course 6: Share Data Through the Art of Visualization (Module 3, Q4)
**Type:** Single Choice

**Prompt:**
> A data analyst wants to be able to edit the formatting of a presentation visual directly. In addition, they do not want it to update automatically in other places. Which method should they use when adding the visual to their presentation?

**Options:**
- **A.** ✅ Copy and paste
- **B.** ⚪ Screenshot
- **C.** ⚪ Link
- **D.** ⚪ Embed

**Why this is correct:**
> Copying and pasting a visual directly into presentation slides creates a static, editable snapshot that does not automatically synchronize with external source files.

---

### Question #204 — Course 6: Share Data Through the Art of Visualization (Module 3, Q5)
**Type:** Single Choice

**Prompt:**
> A data analyst at an e-commerce company uses data to identify which customers are most likely to make a purchase. The analyst shares this information with the marketing team in a report that uses data visualizations and storytelling techniques to make the findings clear and actionable. What aspect of data storytelling does this scenario describe?

**Options:**
- **A.** ⚪ Setting
- **B.** ✅ Narrative
- **C.** ⚪ Spotlighting
- **D.** ⚪ Takeaways

**Why this is correct:**
> Narrative structure in data storytelling weaves facts, visual trends, and business context into a compelling storyline that drives stakeholder understanding and decision-making.

---

### Question #205 — Course 6: Share Data Through the Art of Visualization (Module 3, Q6)
**Type:** Single Choice

**Prompt:**
> What Tableau tool can be used to limit the data displayed on a dashboard in order to save stakeholders time and effort?

**Options:**
- **A.** ⚪ Pre-sorting
- **B.** ⚪ Pre-sizing
- **C.** ⚪ Pre-building
- **D.** ✅ Pre-filtering

**Why this is correct:**
> Pre-filtering limits data at the datasource level before dashboard rendering, reducing clutter and significantly improving dashboard loading performance.

---

### Question #206 — Course 6: Share Data Through the Art of Visualization (Module 3, Q7)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following statements correctly describe presentation best practices? Select all that apply.

**Options:**
- **A.** ✅ The characters are the people affected by the story, such as stakeholders, customers, or clients.
- **B.** ✅ The setting describes background information about the data project and the current situation.
- **C.** ⚪ The plot includes recommendations from the data insights.
- **D.** ✅ The aha moment involves sharing recommendations.

**Why this is correct:**
> A compelling data story includes relatable characters (stakeholders and customers), contextual setting, a clear narrative arc, and an 'aha moment' that delivers actionable recommendations.

---

### Question #207 — Course 6: Share Data Through the Art of Visualization (Module 3, Q8)
**Type:** Single Choice

**Prompt:**
> You prepare to communicate to stakeholders about an analysis project. You consider how to capture and hold people’s interest and attention. What aspect of data storytelling does this scenario describe?

**Options:**
- **A.** ⚪ Discussion
- **B.** ⚪ Theme
- **C.** ✅ Engagement
- **D.** ⚪ Takeaways

**Why this is correct:**
> Audience engagement involves capturing and retaining stakeholder focus through relatable narratives, dynamic presentation pacing, and interactive dialogue.

---

### Question #208 — Course 6: Share Data Through the Art of Visualization (Module 4, Q1)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> You perform a colleague test prior to a presentation. Several coworkers ask for the meaning of an acronym used in one of your charts. What strategies might help you improve your presentation? Select all that apply.

**Options:**
- **A.** ⚪ Remove the chart to avoid confusion
- **B.** ✅ Define the acronym on the slide containing the chart
- **C.** ✅ Add a speaker note to include the definition during your presentation
- **D.** ⚪ Move the chart to a later slide

**Why this is correct:**
> Addressing audience confusion during presentations is best handled by defining unfamiliar acronyms directly on the slide or verbally clarifying them in speaker notes.

---

### Question #209 — Course 6: Share Data Through the Art of Visualization (Module 4, Q2)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: A framework guides the audience through a presentation, creating logical connections to the _____ and the business task.

**Options:**
- **A.** ⚪ visuals
- **B.** ✅ findings
- **C.** ⚪ metrics
- **D.** ⚪ hypothesis

**Why this is correct:**
> A presentation framework provides a structured logical flow, linking analysis findings directly to the core business task and organizational goals.

---

### Question #210 — Course 6: Share Data Through the Art of Visualization (Module 4, Q3)
**Type:** Single Choice

**Prompt:**
> You give a presentation about statistical modeling to an audience that knows little about this very technical subject. Which McCandless Method concept will help ensure your audience does not become confused while trying to understand the presentation?

**Options:**
- **A.** ✅ Answer obvious questions before they’re asked
- **B.** ⚪ Tell the audience why the graphic matters
- **C.** ⚪ State the insight of the graphic
- **D.** ⚪ Call out data to support the insights

**Why this is correct:**
> The McCandless Method recommends anticipating and answering obvious questions immediately to build audience trust and prevent cognitive distraction.

---

### Question #211 — Course 6: Share Data Through the Art of Visualization (Module 4, Q4)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following statements accurately describe presentation best practices? Select all that apply.

**Options:**
- **A.** ⚪ Focus on specifics, then move on to general interest topics about your analysis.
- **B.** ✅ Begin with broad ideas that help the audience put the findings in context.
- **C.** ✅ A dress rehearsal is an effective way to prepare to present data.
- **D.** ✅ When introducing a visualization, give the audience five seconds to process it.

**Why this is correct:**
> Presentation best practices recommend starting with broad contextual overviews, conducting dress rehearsals, and pausing five seconds after showing a new chart to let viewers process it.

---

### Question #212 — Course 6: Share Data Through the Art of Visualization (Module 4, Q5)
**Type:** Single Choice

**Prompt:**
> After giving a presentation about social media trends, your stakeholders express concern about the source of your data. They are unfamiliar with the organization that generated the data for the analyses you referenced. Which kind of objection are they making?

**Options:**
- **A.** ⚪ Analysis
- **B.** ⚪ Presentation skills
- **C.** ✅ Data
- **D.** ⚪ Findings

**Why this is correct:**
> A data objection arises when stakeholders challenge the credibility, methodology, or provenance of the underlying data sources referenced in the analysis.

---

### Question #213 — Course 6: Share Data Through the Art of Visualization (Module 4, Q6)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: The second slide of a presentation should include a statement of _____, such as: “The aim of this project was to determine the impact of reduced orders on inventory availability.”

**Options:**
- **A.** ✅ purpose
- **B.** ⚪ action
- **C.** ⚪ process
- **D.** ⚪ findings

**Why this is correct:**
> Opening presentation slides should clearly articulate the statement of purpose, defining the central research question and business goal behind the initiative.

---

### Question #214 — Course 6: Share Data Through the Art of Visualization (Module 4, Q7)
**Type:** Single Choice

**Prompt:**
> A data professional at a public school system is asked to investigate learning software. The analyst believes the software will improve test scores. They plan to prove this theory by analyzing test scores, student engagement data, and teacher feedback. What does this scenario describe?

**Options:**
- **A.** ⚪ Modifying a statistic
- **B.** ✅ Making a hypothesis
- **C.** ⚪ Addressing a business task
- **D.** ⚪ Disproving a trend

**Why this is correct:**
> Formulating a hypothesis involves stating an informed, testable theory or proposed explanation that the analyst sets out to investigate using empirical evidence.

---

### Question #215 — Course 6: Share Data Through the Art of Visualization (Module 4, Q8)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> What strategies can you use to convey confidence during a presentation? Select all that apply.

**Options:**
- **A.** ⚪ Take a long pause between each sentence
- **B.** ✅ Seek out feedback about your presentation skills from others
- **C.** ✅ Speak to your audience in short sentences
- **D.** ✅ Practice your presentation skills

**Why this is correct:**
> Conveying presentation confidence involves rehearsing thoroughly, speaking in clear concise sentences, and actively soliciting peer feedback to refine delivery.

---
## Course 7: Introduction to Data Analysis Using Python (45 Questions)

### Question #216 — Course 7: Introduction to Data Analysis Using Python (Module 1, Q1)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> A data team researches which programming language they can use  to perform their coding work most effectively. They want a language that is easy to learn and has a supportive user community. Ultimately, they select Python. What are some other benefits of using Python for coding? Select all that apply.

**Options:**
- **A.** ⚪ Python is a low-level language.
- **B.** ✅ Python is based on simple syntax.
- **C.** ✅ Python is versatile.
- **D.** ✅ Python has thousands of open-source libraries.

**Why this is correct:**
> Python is a high-level programming language renowned for its readable syntax, versatility across domains, and extensive ecosystem of open-source data libraries like pandas and NumPy.

---

### Question #217 — Course 7: Introduction to Data Analysis Using Python (Module 1, Q2)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: The open-source web application _____ enables data professionals to modularize code into cells in order to organize them in sections, as well as collaborate on data projects and integrate code.

**Options:**
- **A.** ⚪ Implicit analysis
- **B.** ⚪ Dynamic coding
- **C.** ✅ Jupyter Notebook
- **D.** ⚪ Dot notation

**Why this is correct:**
> Jupyter Notebook is an open-source web application that partitions executable code, documentation, and visualizations into modular cells for interactive analysis and collaboration.

---

### Question #218 — Course 7: Introduction to Data Analysis Using Python (Module 1, Q3)
**Type:** Single Choice

**Prompt:**
> FIll in the blank: In Python, a _____ is an object’s data type that bundles data and functionality together.

**Options:**
- **A.** ✅ class
- **B.** ⚪ keyword
- **C.** ⚪ float
- **D.** ⚪ method

**Why this is correct:**
> In object-oriented programming with Python, a class is a blueprint or data type that encapsulates data attributes and executable functions (methods) into an integrated object.

---

### Question #219 — Course 7: Introduction to Data Analysis Using Python (Module 1, Q4)
**Type:** Single Choice

**Prompt:**
> In Python, what does assignment refer to?

**Options:**
- **A.** ⚪ A combination of numbers, symbols, or other variables that produce a result when evaluated
- **B.** ✅ The process of storing a value in a variable
- **C.** ⚪ A sequence of characters and punctuation that contains textual information
- **D.** ⚪ A value associated with an object or class which is referenced by name using dot notation

**Why this is correct:**
> Variable assignment is the process of binding a value to a named variable using the assignment operator (`=`), storing data in memory for later access.

---

### Question #220 — Course 7: Introduction to Data Analysis Using Python (Module 1, Q5)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> A data professional names a variable in Python, then receives an error message. Which of the following elements may have caused the error? Select all that apply.

**Options:**
- **A.** ✅ Ampersand
- **B.** ✅ Tab
- **C.** ⚪ Letter
- **D.** ⚪ Underscore

**Why this is correct:**
> Python variable names cannot contain whitespace (tabs or spaces) or special punctuation characters like ampersands (`&`), which trigger syntax errors.

---

### Question #221 — Course 7: Introduction to Data Analysis Using Python (Module 1, Q6)
**Type:** Single Choice

**Prompt:**
> Which of the following is an effective variable name? Mark all that apply.

**Options:**
- **A.** ✅ fun_variables
- **B.** ⚪ fun(variables)
- **C.** ⚪ 3_fun_variables
- **D.** ⚪ fun variable$

**Why this is correct:**
> Python variable naming conventions require names to start with a letter or underscore, contain only alphanumeric characters and underscores, and avoid reserved punctuation.

---

### Question #222 — Course 7: Introduction to Data Analysis Using Python (Module 1, Q7)
**Type:** Single Choice

**Prompt:**
> In Python, which data type represents a sequence of characters and punctuation that contains textual information?

**Options:**
- **A.** ✅ String
- **B.** ⚪ Float
- **C.** ⚪ Boolean
- **D.** ⚪ Integer

**Why this is correct:**
> In Python, the `str` (string) data type represents an immutable sequence of characters, symbols, and text enclosed in quotation marks.

---

### Question #223 — Course 7: Introduction to Data Analysis Using Python (Module 1, Q8)
**Type:** Single Choice

**Prompt:**
> A data professional converts integers into strings using a predefined function. This is an example of what type of conversion?

**Options:**
- **A.** ⚪ Immutable conversion
- **B.** ⚪ Implicit conversion
- **C.** ⚪ Mutable conversion
- **D.** ✅ Explicit conversion

**Why this is correct:**
> Explicit conversion (type casting) occurs when a developer explicitly calls a conversion function (such as `str()`, `int()`, or `float()`) to transform data between types.

---

### Question #224 — Course 7: Introduction to Data Analysis Using Python (Module 1, Q9)
**Type:** Single Choice

**Prompt:**
> You’re working in a Jupyter notebook. Consider the following cells: Cell 1: x = 10 Cell 2: x = 'Python' Cell 3: x = 5 Cell 4: print(x) You execute the cells in the following order: cell 1 → cell 2 → cell 3 →cell 2 → cell 4. What is the output of cell 4?

**Options:**
- **A.** ⚪ Error, because you cannot run cells out of order in Jupyter notebooks.
- **B.** ⚪ 10
- **C.** ⚪ 5
- **D.** ✅ 'Python'

**Why this is correct:**
> Jupyter notebook cells execute in the order they are run, regardless of their top-to-bottom layout. Running cell 2 after cell 3 overwrites `x` with 'Python', which is printed in cell 4.

---

### Question #225 — Course 7: Introduction to Data Analysis Using Python (Module 1, Q10)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which of the following are valid statements (i.e., will NOT result in a code error) in Python? Select all that apply.

**Options:**
- **A.** ✅ 6 > 3
- **B.** ✅ `x == 2`
- **C.** ⚪ 15.56 \ x
- **D.** ✅ 14 % 2

**Why this is correct:**
> Valid Python statements use standard comparison and arithmetic operators like `>`, `==`, and `%` (modulo). A standalone backslash (`\`) without escaping produces a syntax error.

---

### Question #226 — Course 7: Introduction to Data Analysis Using Python (Module 2, Q1)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: In Python, else is a reserved keyword that executes when preceding conditions evaluate as _____ .

**Options:**
- **A.** ⚪ true
- **B.** ⚪ not equal
- **C.** ✅ false
- **D.** ⚪ equal

**Why this is correct:**
> The `else` statement provides a default fallback block that executes automatically when all preceding `if` and `elif` conditional tests evaluate to False.

---

### Question #227 — Course 7: Introduction to Data Analysis Using Python (Module 2, Q2)
**Type:** Single Choice

**Prompt:**
> In Python, what is the process of restructuring code while maintaining its original functionality?

**Options:**
- **A.** ⚪ Branching
- **B.** ⚪ Reprogramming
- **C.** ⚪ Converting
- **D.** ✅ Refactoring

**Why this is correct:**
> Refactoring is the engineering practice of restructuring existing computer code to improve readability and reduce complexity without changing its external behavior.

---

### Question #228 — Course 7: Introduction to Data Analysis Using Python (Module 2, Q3)
**Type:** Single Choice

**Prompt:**
> A data professional wants to define a function to calculate the square of a number. What code should they begin with?

**Options:**
- **A.** ⚪ if find_square(n):
- **B.** ⚪ else find_square(n):
- **C.** ⚪ return find_square(n):
- **D.** ✅ `def find_square(n):`

**Why this is correct:**
> Python functions are declared using the `def` keyword followed by the function name, parameter list in parentheses, and a concluding colon (e.g. `def find_square(n):`).

---

### Question #229 — Course 7: Introduction to Data Analysis Using Python (Module 2, Q4)
**Type:** Single Choice

**Prompt:**
> A data professional wants to make a Python function produce new results and save the results for later use. What keyword should they use in their code?

**Options:**
- **A.** ✅ return
- **B.** ⚪ if
- **C.** ⚪ else
- **D.** ⚪ and

**Why this is correct:**
> The `return` statement sends a computed value or object back to the caller from a function, making the output available for subsequent assignments and operations.

---

### Question #230 — Course 7: Introduction to Data Analysis Using Python (Module 2, Q5)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> What are best practices for writing clean code? Select all that apply.

**Options:**
- **A.** ✅ Reusability
- **B.** ✅ Clarity
- **C.** ✅ Modularity
- **D.** ⚪ Redundancy

**Why this is correct:**
> Clean coding standards emphasize clarity (readability), modularity (breaking code into distinct single-purpose units), and reusability, while actively avoiding unnecessary redundancy.

---

### Question #231 — Course 7: Introduction to Data Analysis Using Python (Module 2, Q6)
**Type:** Single Choice

**Prompt:**
> What is the Python comparator for equal to?

**Options:**
- **A.** ⚪ `>=`
- **B.** ⚪ `!=`
- **C.** ⚪ `<=`
- **D.** ✅ `==`

**Why this is correct:**
> In Python, the double equal sign (`==`) is the comparison operator for equality, whereas a single equal sign (`=`) is used for variable assignment.

---

### Question #232 — Course 7: Introduction to Data Analysis Using Python (Module 2, Q7)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: In Python, the _____ statement branches the execution based on a specific condition being true.

**Options:**
- **A.** ⚪ else
- **B.** ⚪ elif
- **C.** ⚪ then
- **D.** ✅ if

**Why this is correct:**
> The `if` statement evaluates a boolean expression and executes its indented suite of code only when the condition evaluates to True.

---

### Question #233 — Course 7: Introduction to Data Analysis Using Python (Module 2, Q8)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> Which code block(s) will yield results that are identical to those of the following function? Select all that apply. def is_even(x): if x % 2 == 0: return True else: return False

**Options:**
- **A.** ✅ `def is_even(x):
    return x % 2 == 0`
- **B.** ⚪ `def is_even(x):
    if x % 2 != 0:
        return True
    return False`
- **C.** ✅ `def is_even(x):
    if x % 2 == 0:
        return True
    return False`
- **D.** ✅ `def is_even(x):
    if x % 2 != 0:
        return False
    else:
        return True`

**Why this is correct:**
> Options A, C, and D all correctly return True for even numbers (`x % 2 == 0`) and False for odd numbers. Option B inverts the logic by returning True when `x % 2 != 0`.

---

### Question #234 — Course 7: Introduction to Data Analysis Using Python (Module 2, Q9)
**Type:** Single Choice

**Prompt:**
> A data professional writes the following code: print(not 4 == 'Data'). What result will Python display when they run the code?

**Options:**
- **A.** ⚪ False
- **B.** ⚪ Equal
- **C.** ⚪ Not equal
- **D.** ✅ True

**Why this is correct:**
> In Python, `4 == 'Data'` evaluates to False because an integer never equals a string. The `not` operator negates False to return True.

---

### Question #235 — Course 7: Introduction to Data Analysis Using Python (Module 2, Q10)
**Type:** Single Choice

**Prompt:**
> A data professional wants to summarize a function’s behavior and explain its arguments and return values. What should they add to the beginning of the function’s body?

**Options:**
- **A.** ⚪ A logical operator
- **B.** ✅ A docstring
- **C.** ⚪ An algorithm
- **D.** ⚪ A comparator

**Why this is correct:**
> A docstring is a multi-line string literal placed immediately below a function definition to document its purpose, parameters, and return types.

---

### Question #236 — Course 7: Introduction to Data Analysis Using Python (Module 3, Q1)
**Type:** Single Choice

**Prompt:**
> In Python, what method works by interpreting a string as a sequence of characters, where each character has a numbered slot?

**Options:**
- **A.** ✅ index()
- **B.** ⚪ format()
- **C.** ⚪ range()
- **D.** ⚪ type()

**Why this is correct:**
> The `index()` string method scans a character sequence and returns the zero-based numeric index position of the first occurrence of a specified substring.

---

### Question #237 — Course 7: Introduction to Data Analysis Using Python (Module 3, Q2)
**Type:** Single Choice

**Prompt:**
> A data professional assigns the string 'palm and pine' to the variable trees. What Python code can they use to find the index of the character 'm'?

**Options:**
- **A.** ⚪ index.palm(‘m’)
- **B.** ✅ trees.index(‘m’)
- **C.** ⚪ index.trees(‘m’)
- **D.** ⚪ palm.index(‘m’)

**Why this is correct:**
> In Python, calling `.index('m')` on the string variable `trees` (`trees.index('m')`) returns the index where character 'm' appears.

---

### Question #238 — Course 7: Introduction to Data Analysis Using Python (Module 3, Q3)
**Type:** Single Choice

**Prompt:**
> What would be the output from executing the following code? num = 123.456789 print(f'{num:.3f}')

**Options:**
- **A.** ⚪ 123.456
- **B.** ✅ 123.457
- **C.** ⚪ 12345.679%
- **D.** ⚪ 1.235e+02

**Why this is correct:**
> The format specifier `:.3f` rounds a floating-point number to three decimal places. `123.456789` rounds up at the third decimal position to produce `123.457`.

---

### Question #239 — Course 7: Introduction to Data Analysis Using Python (Module 3, Q4)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: The Python range() function returns a sequence of numbers starting from zero; then increments by _____, by default; then stops before the given number.

**Options:**
- **A.** ⚪ zero
- **B.** ⚪ two
- **C.** ⚪ three
- **D.** ✅ one

**Why this is correct:**
> The Python `range(stop)` function generates a sequence starting at 0, incrementing by 1 by default, and terminating just before the specified stopping value.

---

### Question #240 — Course 7: Introduction to Data Analysis Using Python (Module 3, Q5)
**Type:** Single Choice

**Prompt:**
> A data professional assigns the string 'football' to the variable sport. What Python code will return the slice 'ball'?

**Options:**
- **A.** ⚪ sport[-1]
- **B.** ✅ sport[4: ]
- **C.** ⚪ sport[ :4]
- **D.** ⚪ sport[1:4]

**Why this is correct:**
> String slicing syntax is `[start:stop]`. In 'football', slice `sport[4:]` starts at index 4 ('b') and extracts through the end of the string, yielding 'ball'.

---

### Question #241 — Course 7: Introduction to Data Analysis Using Python (Module 3, Q6)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: In Python, a data professional can use the _____ method to insert specific substrings in a larger string.

**Options:**
- **A.** ⚪ type()
- **B.** ⚪ range()
- **C.** ⚪ print()
- **D.** ✅ format()

**Why this is correct:**
> The `format()` method (or f-strings) allows developers to interpolate variables and dynamic expressions directly into placeholder targets within larger string templates.

---

### Question #242 — Course 7: Introduction to Data Analysis Using Python (Module 3, Q7)
**Type:** Single Choice

**Prompt:**
> What type of loop can a data professional use to repeat a specific block of code until a condition is no longer met?

**Options:**
- **A.** ⚪ if loop
- **B.** ⚪ for loop
- **C.** ⚪ else loop
- **D.** ✅ while loop

**Why this is correct:**
> A `while` loop repeatedly executes a block of code as long as its specified conditional statement remains True, terminating once the condition evaluates to False.

---

### Question #243 — Course 7: Introduction to Data Analysis Using Python (Module 3, Q8)
**Type:** Single Choice

**Prompt:**
> What Python code can a data professional use to concatenate the strings 'brain' and 'storm'?

**Options:**
- **A.** ⚪ `‘brain’ != ‘storm’`
- **B.** ✅ ‘brain’ + ‘storm’
- **C.** ⚪ ‘brain’ % ‘storm’
- **D.** ⚪ `‘brain’ == ‘storm’`

**Why this is correct:**
> In Python, the addition operator (`+`) performs string concatenation, joining `'brain'` and `'storm'` into the combined string `'brainstorm'`.

---

### Question #244 — Course 7: Introduction to Data Analysis Using Python (Module 3, Q9)
**Type:** Single Choice

**Prompt:**
> A data professional wants to set up a for loop. They write the following code: for x in range(5, 101, 10): . What is the step value of the range() function?

**Options:**
- **A.** ⚪ 100
- **B.** ✅ 10
- **C.** ⚪ 5
- **D.** ⚪ 101

**Why this is correct:**
> In `range(start, stop, step)`, the third parameter designates the step interval. For `range(5, 101, 10)`, the step increment value is 10.

---

### Question #245 — Course 7: Introduction to Data Analysis Using Python (Module 3, Q10)
**Type:** Single Choice

**Prompt:**
> What Python code instructs the computer to loop through values from 750 to 850 (inclusive)?

**Options:**
- **A.** ⚪ for x in range(750, 850):
- **B.** ⚪ for x in range(751, 851):
- **C.** ✅ for x in range(750, 851):
- **D.** ⚪ for x in range(751, 850):

**Why this is correct:**
> Because Python's `range()` function is upper-bound exclusive, looping from 750 through 850 inclusive requires setting the stop boundary to 851 (`range(750, 851)`).

---

### Question #246 — Course 7: Introduction to Data Analysis Using Python (Module 4, Q1)
**Type:** Single Choice

**Prompt:**
> A data professional wants to merge two pandas dataframes. They want to join the data so only the keys that are in both dataframes get included in the merge. What technique can they use to do so?

**Options:**
- **A.** ⚪ Outer join
- **B.** ⚪ Right join
- **C.** ✅ Inner join
- **D.** ⚪ Left join

**Why this is correct:**
> An inner join combines two pandas DataFrames by matching keys, retaining only rows whose join keys exist in both datasets.

---

### Question #247 — Course 7: Introduction to Data Analysis Using Python (Module 4, Q2)
**Type:** Single Choice

**Prompt:**
> A data professional is working with two Python sets: set A and set B. What function can they use to find only the elements present in set A that are not also in set B?

**Options:**
- **A.** ⚪ symmetric_difference()
- **B.** ✅ difference()
- **C.** ⚪ union()
- **D.** ⚪ intersection()

**Why this is correct:**
> In Python set operations, `A.difference(B)` returns a new set containing all elements present in set A that are not members of set B.

---

### Question #248 — Course 7: Introduction to Data Analysis Using Python (Module 4, Q3)
**Type:** Single Choice

**Prompt:**
> A data professional is working with a pandas dataframe. They want to select a subset of rows and columns by index. What method can they use to do so?

**Options:**
- **A.** ✅ iloc[]
- **B.** ⚪ concat()
- **C.** ⚪ loc[]
- **D.** ⚪ merge()

**Why this is correct:**
> The `.iloc[]` indexer in pandas performs integer-based positional indexing to select rows and columns by their numerical indices.

---

### Question #249 — Course 7: Introduction to Data Analysis Using Python (Module 4, Q4)
**Type:** Single Choice

**Prompt:**
> In Python, what data structure helps store and manipulate an ordered collection of items?

**Options:**
- **A.** ⚪ Tuple
- **B.** ✅ List
- **C.** ⚪ Set
- **D.** ⚪ Dictionary

**Why this is correct:**
> A Python list is a mutable, ordered collection of heterogeneous elements that preserves insertion sequence and supports indexing and slicing.

---

### Question #250 — Course 7: Introduction to Data Analysis Using Python (Module 4, Q5)
**Type:** Single Choice

**Prompt:**
> A data professional is working with a pandas dataframe named sales that contains sales data for a retail website. They want to know the price of the least expensive item. What code can they use to calculate the minimum value of the Price column?

**Options:**
- **A.** ⚪ `sales = ‘Price’.min()`
- **B.** ✅ sales[‘Price’].min()
- **C.** ⚪ sales.min().Price
- **D.** ⚪ sales.min().(Price)

**Why this is correct:**
> In pandas, column values are accessed using bracket notation `dataframe['ColumnName']` and statistical methods like `.min()` to calculate the minimum value.

---

### Question #251 — Course 7: Introduction to Data Analysis Using Python (Module 4, Q6)
**Type:** Single Choice

**Prompt:**
> In Python, which of the following characters can a data professional use to instantiate a dictionary?

**Options:**
- **A.** ⚪ < >
- **B.** ⚪ [ ]
- **C.** ⚪ ( )
- **D.** ✅ { }

**Why this is correct:**
> Python dictionaries are instantiated using curly braces `{}` with key-value pairs separated by colons, or via the `dict()` constructor.

---

### Question #252 — Course 7: Introduction to Data Analysis Using Python (Module 4, Q7)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> How do global variables differ from other variables in Python? Select all that apply.

**Options:**
- **A.** ✅ Global variables can be accessed from anywhere in a script.
- **B.** ⚪ Global variables cannot be accessed from a program.
- **C.** ✅ Global variables can be accessed from anywhere in a program.
- **D.** ⚪ Global variables cannot be accessed from a script.

**Why this is correct:**
> Global variables are defined at the module/script level outside functions and can be read and accessed across all functions throughout the entire program.

---

### Question #253 — Course 7: Introduction to Data Analysis Using Python (Module 4, Q8)
**Type:** Single Choice

**Prompt:**
> A data professional is working with a dictionary named employees that contains employee data for a healthcare company. What Python code can they use to retrieve both the dictionary’s keys and values?

**Options:**
- **A.** ⚪ keys.employees()
- **B.** ⚪ items.employees()
- **C.** ✅ employees.items()
- **D.** ⚪ employees.keys()

**Why this is correct:**
> The `.items()` dictionary method returns an iterable view of key-value tuple pairs (`(key, value)`), providing access to both keys and values simultaneously.

---

### Question #254 — Course 7: Introduction to Data Analysis Using Python (Module 4, Q9)
**Type:** Multiple Choice (Select all that apply)

**Prompt:**
> In Python, what types of data can tuples contain? Select all that apply.

**Options:**
- **A.** ✅ Integers
- **B.** ⚪ Modules
- **C.** ✅ Strings
- **D.** ✅ Floats

**Why this is correct:**
> Python tuples are versatile sequences that can store arbitrary heterogeneous data types, including integers, strings, floats, and nested objects.

---

### Question #255 — Course 7: Introduction to Data Analysis Using Python (Module 4, Q10)
**Type:** Single Choice

**Prompt:**
> A data professional is working with a list named cities that contains data on global cities. What Python code can they use to add the string 'Mumbai' as the second element in the list?

**Options:**
- **A.** ⚪ cities.insert(2, ‘Mumbai’)
- **B.** ⚪ cities.insert(‘Mumbai’)
- **C.** ✅ cities.insert(1, ‘Mumbai’)
- **D.** ⚪ cities.insert(1)

**Why this is correct:**
> Python uses zero-based indexing. Inserting an item as the second element requires index 1, using `cities.insert(1, 'Mumbai')`.

---

### Question #256 — Course 7: Introduction to Data Analysis Using Python (Module 4, Q11)
**Type:** Single Choice

**Prompt:**
> Fill in the blank: A _____ NumPy array can be created from a list of lists, where each internal list is the same length.

**Options:**
- **A.** ⚪ four-dimensional
- **B.** ⚪ three-dimensional
- **C.** ✅ two-dimensional
- **D.** ⚪ one-dimensional

**Why this is correct:**
> A two-dimensional NumPy array (matrix) is created from a list of equally-sized lists, representing rows and columns of numeric data.

---

### Question #257 — Course 7: Introduction to Data Analysis Using Python (Module 4, Q12)
**Type:** Single Choice

**Prompt:**
> A data analyst is working with social media posts, emails, and videos. How would this type of data best be classified?

**Options:**
- **A.** ⚪ Structured data, because it can be organized into rows and columns
- **B.** ✅ Unstructured data, because it cannot be stored as columns and rows in a relational database
- **C.** ⚪ Structured data, because it comes from digital sources
- **D.** ⚪ Unstructured data, because it always contains numbers

**Why this is correct:**
> Social media posts, emails, and video files lack fixed tabular schemas, classifying them as unstructured data that cannot fit neatly into relational tables.

---

### Question #258 — Course 7: Introduction to Data Analysis Using Python (Module 4, Q13)
**Type:** Single Choice

**Prompt:**
> why is it important for a data analyst to understand data ethics and privacy?

**Options:**
- **A.** ⚪ Because it automatically makes algorithms more accurate
- **B.** ⚪ Because it removes the need to check data for bias
- **C.** ✅ Because analysts make many judgment calls about the correct use and application of data
- **D.** ⚪ Because it guarantees the data will never contain any errors

**Why this is correct:**
> Data analysts frequently make discretionary decisions regarding data collection, cleaning, and model interpretation, making a solid understanding of data ethics and privacy essential.

---

### Question #259 — Course 7: Introduction to Data Analysis Using Python (Module 4, Q14)
**Type:** Single Choice

**Prompt:**
> Which of the following would be considered personally identifiable information (PII)?

**Options:**
- **A.** ✅ A person's social security number and credit card information
- **B.** ⚪ A company's total annual sales revenue
- **C.** ⚪ The average temperature of a city
- **D.** ⚪ A list of product categories in a store

**Why this is correct:**
> Personally Identifiable Information (PII) includes sensitive identifiers like Social Security Numbers and credit card details that can uniquely identify a specific individual.

---

### Question #260 — Course 7: Introduction to Data Analysis Using Python (Module 4, Q15)
**Type:** Single Choice

**Prompt:**
> What is the primary purpose of metadata in data analytics?

**Options:**
- **A.** ⚪ To replace the original data and reduce storage requirements in databases
- **B.** ✅ To provide information about other data and help analysts interpret the contents of data within a database
- **C.** ⚪ To create backup copies of data files for security purposes
- **D.** ⚪ To convert unstructured data into structured formats for analysis

**Why this is correct:**
> Metadata ('data about data') provides crucial structural, operational, and contextual information that enables analysts to understand, query, and interpret database contents accurately.

---

