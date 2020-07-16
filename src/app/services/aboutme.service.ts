import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../lib/skill';
import { Aboutme } from '../lib/aboutme';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutmeService {

  dataUrl = environment.aboutmeUrl
  constructor(private http: HttpClient) { }

  /**
   * Reads info "about me"
   * @returns Observable<Aboutme>
   */
  public getAboutme() {
    return this.http.get<Aboutme>(this.dataUrl);
  }
}
