import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../lib/project.class';

/**
 * Service that provide info about projects
 */
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  /**
   * Reads current list of projects from json file
   * @returns Observable<Project[]>
   */
  public getProjects() {
    return this.http.get<Project[]>('../../assets/projects.json');
  }
}
