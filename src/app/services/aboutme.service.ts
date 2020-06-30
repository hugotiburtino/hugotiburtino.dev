import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../lib/skill';

@Injectable({
  providedIn: 'root'
})
export class AboutmeService {

  constructor(private http: HttpClient) { }

  /**
   * Reads info "about me"
   * @returns Observable<any>
   */
  public getAboutme() {
    return this.http.get<Aboutme>('../../assets/aboutme.json');
  }
}

class Aboutme {
  completeName: string;

  elevatorPitch: string;

  skills: Skill[];

}
