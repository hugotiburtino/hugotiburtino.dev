import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './submodules/app-routing.module';
import { MaterialModule } from './submodules/material.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsPanelComponent } from './projects-panel/projects-panel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { IdRefPipe } from './lib/idref.pipe';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsPanelComponent } from './skills-panel/skills-panel.component';
import { ContactComponent } from './contact/contact.component';


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
    ContactComponent
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
