import { Component, OnInit } from '@angular/core';
import { AboutmeService } from '../../services/aboutme.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  completeName: string;

  elevatorPitch: string;

  city: string;

  status: string;

  constructor(private service: AboutmeService) { }

  ngOnInit(): void {
    this.service.getAboutme().subscribe(
      data => {
        this.completeName = data.completeName;
        this.elevatorPitch = data.elevatorPitch;
        this.city = data.city;
        this.status = data.status;
      }, err => console.error('Error occurred while fetching projects data: ', err));
  }

}
