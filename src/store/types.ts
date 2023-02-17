// For demonstraction purposes, only selected attributes/categories of a type would be listed here.

export type ICompany = {
    id: number;
    name: string;
    avatar: string;
    rating: number;
};

const Specialization = ["Backend", "Frontend", "Fullstack", "Data Eng", "PM", "Cybersec Eng"] as const;
export type Specialization = typeof Specialization[number];

export type salary = undefined | [number, number];

const Location = ["Singapore", "Malaysia", "Thailand", "Taiwan"] as const;
export type Location = typeof Location[number];

const TechStackCategory = [
    "Java",
    "JavaScript",
    "TypeScript",
    "C++",
    "Python",
    "SQL",
    "Go",
    "Linux",
    "Git",
    "Docker",
    "AWS",
    "IAM",
    "play",
    "REST API",
    "API",
    "TDD",
];
export type TechStackCategory = typeof TechStackCategory[number];

export interface IJob {
    id: number;
    jobTitle: string;
    company: ICompany;
    specialization: Specialization;
    salary: salary;
    location: Location;
    techStack: TechStackCategory[];
    postDate: string;
}
