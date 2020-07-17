import { SkillCategory } from '../lib/skill-category.enum';


export class Skill {

    subject: string;
    categories: SkillCategory[];

    constructor(subject: string, categories?: SkillCategory[]) {
        this.subject = subject;
        this.categories = categories;
    }

}
