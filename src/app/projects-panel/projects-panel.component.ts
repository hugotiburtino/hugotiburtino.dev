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

  /**
   * Handles the action button clicks of a project card
   * @param target The button clicked
   * @param project The project whose card button was clicked
   */
  onClick(target, project) {
    /**
     * Since Angular Material wraps text of the button element
     * into a node by itself, we need to find the value of the button first
     */
    const value: number = target.value | target.parentElement.value;
    const [SEE, INFO, SOURCE_CODE] = [0, 1, 2];
    if (value === SEE) {
      window.open(project.url, '_blank').focus();
    } else if (value === INFO) {
      // Implementme
    } else if (value === SOURCE_CODE) {
      window.open(project.srcCodeUrl, '_blank').focus();
    }
  }
}
