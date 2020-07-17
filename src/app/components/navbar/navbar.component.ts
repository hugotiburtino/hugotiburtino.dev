import { Component, OnInit } from '@angular/core';
import { Tab } from '../../classes/tab';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  tabs: Tab[];

  constructor() { }

  ngOnInit(): void {

    this.tabs = [new Tab('Projects', 'projects-panel'), new Tab('Contact')];

  }

}
