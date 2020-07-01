import { Component, OnInit } from '@angular/core';
import { AboutmeService } from '../services/aboutme.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  completeName: string;

  elevatorPitch: string;

  constructor(private service: AboutmeService) { }

  ngOnInit(): void {
    this.service.getAboutme().subscribe(data => {
      this.completeName = data.completeName;
      this.elevatorPitch = data.elevatorPitch;
    });
  }

}
