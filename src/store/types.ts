// For demonstraction purposes, only selected attributes/categories of a type would be listed here.

export type ICompany = {
    id: number;
    companyname: string;
    logo_url: string;
    rating: number;
};

const Specialization = ["Backend", "Frontend", "Fullstack", "Data Eng", "PM", "Cybersec Eng"] as const;
export type Specialization = (typeof Specialization)[number];

const Location = ["Singapore", "Malaysia", "Thailand", "Taiwan"] as const;
export type Location = (typeof Location)[number];

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
    "Strategy",
];
export type TechStackCategory = (typeof TechStackCategory)[number];

export interface IJob {
    id: number;
    jobTitle: string;
    company: ICompany;
    specialization: Specialization;
    formatted_salary_min: string;
    formatted_salary_max: string;
    remuneration_frequency: string;
    is_salary_estimated: boolean;
    location: Location;
    techStacks: TechStackCategory[];
    time_ago: string;
}
