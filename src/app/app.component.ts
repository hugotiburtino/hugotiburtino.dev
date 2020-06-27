import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <app-header></app-header>
      <app-projects-panel></app-projects-panel>
      <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
