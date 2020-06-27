export class Project {

    name: string;
    url: string;
    srcCodeUrl: string;
    imgs: string[];
    summary: string;

    constructor(name: string, url?: string, srcCodeUrl?: string,
                summary?: string) {
        this.name = name;
        this.url = url;
        this.srcCodeUrl = srcCodeUrl;
        this.summary = summary;
    }

    static factory(project: Project) {
        return new Project(project.name, project.url,
            project.srcCodeUrl, project.summary);
    }
}
