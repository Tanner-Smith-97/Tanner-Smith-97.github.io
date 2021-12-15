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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Sdev2110Component } from './pages/courses/sdev2110/sdev2110.component';
import {MatInputModule} from "@angular/material/input";
import { ProjectsHomeComponent } from './projects/projects-home/projects-home.component';
import {MatTabsModule} from "@angular/material/tabs";
import {HttpClientModule} from "@angular/common/http";
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {MatSliderModule} from "@angular/material/slider";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDialogModule} from "@angular/material/dialog";
import { DiscordBotComponent } from './projects/discord-bot/discord-bot.component';
import { Sdev1040Component } from './pages/courses/sdev1040/sdev1040.component';
import { Sdev2610Component } from './pages/courses/sdev2610/sdev2610.component';
import { SDEV2520Component } from './pages/courses/sdev2520/sdev2520.component';

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
    ContactMeComponent,
    Sdev2110Component,
    ProjectsHomeComponent,
    ProgressSpinnerComponent,
    DiscordBotComponent,
    Sdev1040Component,
    Sdev2610Component,
    SDEV2520Component
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
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    HttpClientModule,
    MatCardModule,
    MatRadioModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
