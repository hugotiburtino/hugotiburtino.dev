export class Skill {

    subject: string;
    categories: string[];

    constructor(subject: string, categories?: string[]) {
        this.subject = subject;
        this.categories = categories;
    }

}
