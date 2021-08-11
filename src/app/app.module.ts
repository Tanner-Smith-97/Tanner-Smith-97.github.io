import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";
import {_MatMenuDirectivesModule, MatMenuModule} from "@angular/material/menu";
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { Itec1018Component } from './pages/courses/itec1018/itec1018.component';
import { CourseWorkComponent } from './pages/course-work/course-work.component';
import { Sdev1022Component } from './pages/courses/sdev1022/sdev1022.component';
import { Sdev1041Component } from './pages/courses/sdev1041/sdev1041.component';
import { Sdev1060Component } from './pages/courses/sdev1060/sdev1060.component';
import { Sdev1090Component } from './pages/courses/sdev1090/sdev1090.component';
import { Sdev2210Component } from './pages/courses/sdev2210/sdev2210.component';
import { Sdev2220Component } from './pages/courses/sdev2220/sdev2220.component';
import { Sdev2410Component } from './pages/courses/sdev2410/sdev2410.component';
import { Sdev2420Component } from './pages/courses/sdev2420/sdev2420.component';
import { TextGameComponent } from './text-game/text-game.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    NavBarComponent,
    NavigationBarComponent,
    HeaderComponent,
    HomeComponent,
    AboutMeComponent,
    Itec1018Component,
    CourseWorkComponent,
    Sdev1022Component,
    Sdev1041Component,
    Sdev1060Component,
    Sdev1090Component,
    Sdev2210Component,
    Sdev2220Component,
    Sdev2410Component,
    Sdev2420Component,
    TextGameComponent,
    ContactMeComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatExpansionModule,
        MatListModule,
        _MatMenuDirectivesModule,
        MatMenuModule,
        appRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
