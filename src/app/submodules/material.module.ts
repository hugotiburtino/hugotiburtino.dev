import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    MatSidenavModule,
    MatTooltipModule,
    MatListModule,
    MatChipsModule
  ]
})
export class MaterialModule { }
