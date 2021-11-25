import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppMenuNavComponent } from './menu-nav/app-menu-nav.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { PeliculasSectionComponent } from './peliculas-section/peliculas-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuNavComponent,
    HomeSectionComponent,
    PeliculasSectionComponent,
    ContactSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
