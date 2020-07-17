import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../classes/skill';
import { Aboutme } from '../classes/aboutme';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutmeService {

  dataUrl = environment.aboutmeUrl;
  constructor(private http: HttpClient) { }

  /**
   * Reads info "about me"
   * @returns Observable<Aboutme>
   */
  public getAboutme() {
    return this.http.get<Aboutme>(this.dataUrl);
  }
}
