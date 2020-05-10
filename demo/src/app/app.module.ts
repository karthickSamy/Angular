import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavResponsiveComponent } from './sidenav-responsive/sidenav-responsive.component';
import { MaterialModuleModule } from './material-module/material-module.module';
import { NavbarExampleComponent } from './navbar-example/navbar-example.component';
import { AiCicdComponent } from './ai-cicd/ai-cicd.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavResponsiveComponent,
    NavbarExampleComponent,
    AiCicdComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
