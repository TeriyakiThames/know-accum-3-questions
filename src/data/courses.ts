export interface CourseSection {
  id: number;
  title: string;
  courseraUrl: string;
  hasQuiz: boolean;
}

export const COURSE_SECTIONS: CourseSection[] = [
  {
    id: 1,
    title: 'Foundations: Data, Data, Everywhere',
    courseraUrl: 'https://www.coursera.org/learn/foundations-data/home/welcome',
    hasQuiz: true,
  },
  {
    id: 2,
    title: 'Ask Questions to Make Data-Driven Decisions',
    courseraUrl: 'https://www.coursera.org/learn/ask-questions-make-decisions/home/welcome',
    hasQuiz: true,
  },
  {
    id: 3,
    title: 'Prepare Data for Exploration',
    courseraUrl: 'https://www.coursera.org/learn/data-preparation/home/welcome',
    hasQuiz: true,
  },
  {
    id: 4,
    title: 'Process Data from Dirty to Clean',
    courseraUrl: 'https://www.coursera.org/learn/process-data/home/welcome',
    hasQuiz: true,
  },
  {
    id: 5,
    title: 'Analyze Data to Answer Questions',
    courseraUrl: 'https://www.coursera.org/learn/analyze-data/home/welcome',
    hasQuiz: true,
  },
  {
    id: 6,
    title: 'Share Data Through the Art of Visualization',
    courseraUrl: 'https://www.coursera.org/learn/visualize-data/home/welcome',
    hasQuiz: true,
  },
  {
    id: 7,
    title: 'Introduction to Data Analysis Using Python',
    courseraUrl: 'https://www.coursera.org/learn/introduction-to-data-analysis-using-python/home/welcome',
    hasQuiz: true,
  },
  {
    id: 8,
    title: 'Google Data Analytics Capstone: Complete a Case Study',
    courseraUrl: 'https://www.coursera.org/learn/google-data-analytics-capstone/home/welcome',
    hasQuiz: false,
  },
  {
    id: 9,
    title: 'Accelerate Your Job Search with AI',
    courseraUrl: 'https://www.coursera.org/learn/accelerate-your-job-search-with-ai/home/welcome',
    hasQuiz: false,
  },
];

export const COURSES_MAP = new Map<number, CourseSection>(
  COURSE_SECTIONS.map((c) => [c.id, c])
);

export function getCourseById(id: number): CourseSection | undefined {
  return COURSES_MAP.get(id);
}
