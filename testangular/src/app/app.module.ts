import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Section1Component } from './section1/section1.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    Section1Component,
    HeaderComponent
  ],
  imports: [
    BrowserModule
    // los modulos se usan para hacer lazy loading
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
