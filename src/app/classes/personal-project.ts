import { Project } from './project';

export class PersonalProject extends Project {

  isPersonal?: boolean;

  constructor(name: string, url?: string, srcCodeUrl?: string,
              summary?: string, techs?: string[], isPersonal?: boolean) {
    super(name, url, srcCodeUrl, summary, techs);
    this.isPersonal = isPersonal;
  }

}
