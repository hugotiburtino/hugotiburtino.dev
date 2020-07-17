import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './submodules/app-routing.module';
import { MaterialModule } from './submodules/material.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsPanelComponent } from './components/projects-panel/projects-panel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { IdRefPipe } from './lib/idref.pipe';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { SkillsPanelComponent } from './components/skills-panel/skills-panel.component';
import { ContactComponent } from './components/contact/contact.component';
import { ThirdPartyPanelComponent } from './components/third-party-panel/third-party-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProjectsPanelComponent,
    NavbarComponent,
    HeaderComponent,
    IdRefPipe,
    AboutmeComponent,
    SkillsPanelComponent,
    ContactComponent,
    ThirdPartyPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
