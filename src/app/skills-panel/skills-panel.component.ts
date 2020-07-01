import { Component, OnInit } from '@angular/core';
import { AboutmeService } from '../services/aboutme.service';
import { Skill } from '../lib/skill';

@Component({
  selector: 'app-skills-panel',
  templateUrl: './skills-panel.component.html',
  styleUrls: ['./skills-panel.component.css']
})
export class SkillsPanelComponent implements OnInit {

  skills: Skill[];

  constructor(private service: AboutmeService) { }

  ngOnInit(): void {
    this.service.getAboutme().subscribe(data => {
      this.skills = data.skills;
    });
  }

}
