import { Component, OnInit } from '@angular/core';
import { AboutmeService } from '../services/aboutme.service';
import { Skill } from '../lib/skill';
import { SkillCategory } from '../lib/skill-category.enum';

@Component({
  selector: 'app-skills-panel',
  templateUrl: './skills-panel.component.html',
  styleUrls: ['./skills-panel.component.css']
})
export class SkillsPanelComponent implements OnInit {

  skills: Skill[];
  category = SkillCategory;
  backEndSkills: Skill[];
  frontEndSkills: Skill[];

  constructor(private service: AboutmeService) { }

  ngOnInit(): void {
    this.service.getAboutme().subscribe(data => {
      this.skills = data.skills;
      this.categorize();
    });
  }

  categorize() {
    this.backEndSkills = this.skills.filter(sk =>
      sk.categories && sk.categories.includes(this.category.Backend)
      );
    this.frontEndSkills = this.skills.filter(sk =>
      sk.categories && sk.categories.includes(this.category.Frontend)
      );
  }

}
