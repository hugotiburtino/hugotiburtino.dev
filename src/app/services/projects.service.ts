import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../lib/project.class';
import { environment } from 'src/environments/environment';
import { resolve } from 'dns';

/**
 * Service that provides info about projects
 */
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  dataUrl = environment.projectsUrl
  constructor(private http: HttpClient) { }

  /**
   * Reads current list of projects from json file
   * @returns Observable<Project[]>
   */
  public getProjects() {
    return this.http.get<Project[]>(this.dataUrl)
  }
}
