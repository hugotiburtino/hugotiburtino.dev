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

  title = 'Programming Skills';
  skills: Skill[];
  category = SkillCategory;
  /** Map of skills
   * Key: Skill category
   * Value: Array of skills
   */
  skillsMap = new Map();

  constructor(private service: AboutmeService) { }

  ngOnInit(): void {
    this.service.getAboutme().subscribe(data => {
      this.skills = data.skills;
      this.categorize();
    });
  }
  /**
   * Method that fills up the Map of skills
   */
  categorize() {
    for (const item of Object.keys(this.category)) {
      this.skillsMap.set(this.category[item], this.skills.filter(sk =>
           sk.categories && sk.categories.includes(this.category[item])));
    }
  }


}
