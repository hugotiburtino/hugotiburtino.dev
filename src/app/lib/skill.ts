import { SkillCategory } from './skill-category.enum';


export class Skill {

    subject: string;
    categories: SkillCategory[];

    constructor(subject: string, categories?: number[]) {
        this.subject = subject;
        this.categories = categories;
    }

}
