import { Component, OnInit } from '@angular/core';
import { Project } from '../lib/project.class';
import { ProjectsService } from '../services/projects.service';

/**
 * Component that is responsable for displaying data
 * about projects
 */
@Component({
  selector: 'app-projects-panel',
  templateUrl: './projects-panel.component.html',
  styleUrls: ['./projects-panel.component.css']
})
export class ProjectsPanelComponent implements OnInit {

  /** List of current projects */
  projects: Project[];

  /**
   * @param ProjectsService service that provides info
   * to fill up the projects list
   */
  constructor(private service: ProjectsService) { }

  ngOnInit(): void {
    // Get projects from ProjectService and add them to projects list
    this.service.getProjects().subscribe(data => {
      this.projects = [];
      for (const project of data) {
        this.projects.push(Project.factory(project));
      }
    });
  }

  
  onClick(button: HTMLButtonElement, project) {
    /* TODO: change "See", "Info" and "Source Code" for values like numbers
             that way we can be more flexibel with names at view */
    if (button.innerText == "See") {
      window.open(project.url, "_blank").focus()
    } else if (button.innerText == "Info") {
      // Implementme
    } else if (button.innerText == "Source Code") {
      window.open(project.srcCodeUrl, "_blank").focus()
    } 
  }
}
