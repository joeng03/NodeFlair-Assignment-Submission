// For demonstraction purposes, only selected attributes/categories of a type would be listed here.

export type ICompany = {
    id: number;
    companyname: string;
    avatar: string;
    rating: number;
};

const Specialization = ["Backend", "Frontend", "Fullstack", "Data Eng", "PM", "Cybersec Eng"] as const;
export type Specialization = (typeof Specialization)[number];

const Location = ["Singapore", "Malaysia", "Thailand", "Taiwan"] as const;
export type Location = (typeof Location)[number];

export type TechStackCategory = {
    name: string;
};

export interface IJob {
    id: number;
    title: string;
    company: ICompany;
    position: Specialization;
    formatted_salary_min: string;
    formatted_salary_max: string;
    remuneration_frequency: string;
    is_salary_estimated: boolean;
    location: Location;
    tech_stacks: TechStackCategory[];
    time_ago: string;
}
