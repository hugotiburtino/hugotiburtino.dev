import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/app/classes/project';

@Component({
  selector: 'app-third-party-panel',
  templateUrl: './third-party-panel.component.html',
  styleUrls: ['./third-party-panel.component.css']
})
export class ThirdPartyPanelComponent implements OnInit {

  title = "At Third Party's Projects"

  projects: Project[];

  constructor(private service: ProjectsService) { }

  ngOnInit(): void {
    this.service.getProjects().subscribe(
      (data) => this.projects = data.filter((proj) => !(proj as any).isPersonal),
      err => console.error('Error occurred while fetching projects data: ', err)
    ); // TODO: better error handling
  }

}
