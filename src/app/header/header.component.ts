import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Hugo Tiburtino';
  subtitle = '';
  @Output() aboutMeBarActive = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  showAboutMe() {
    this.aboutMeBarActive.emit(true)
  }

}
