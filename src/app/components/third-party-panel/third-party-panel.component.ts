import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { ThirdPartyProject } from 'src/app/classes/third-party-project';
import { ProjectsPanelComponent } from '../projects-panel/projects-panel.component';

@Component({
  selector: 'app-third-party-panel',
  templateUrl: './third-party-panel.component.html',
  styleUrls: ['./third-party-panel.component.css']
})
export class ThirdPartyPanelComponent extends ProjectsPanelComponent {

  heading = 'At Third Party\'s Projects';

  projects: ThirdPartyProject[];

  constructor(service: ProjectsService) {
    super(service);
  }
}
