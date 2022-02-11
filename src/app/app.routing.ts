import {RouterModule, Routes} from "@angular/router";
import {AboutMeComponent} from "./pages/about-me/about-me.component";
import {Itec1018Component} from "./pages/courses/itec1018/itec1018.component";
import {HomeComponent} from "./pages/home/home.component";
import {CourseWorkComponent} from "./pages/course-work/course-work.component";
import {Sdev1022Component} from "./pages/courses/sdev1022/sdev1022.component";
import {Sdev1041Component} from "./pages/courses/sdev1041/sdev1041.component";
import {Sdev1040Component} from "./pages/courses/sdev1040/sdev1040.component";
import {Sdev1060Component} from "./pages/courses/sdev1060/sdev1060.component";
import {Sdev1090Component} from "./pages/courses/sdev1090/sdev1090.component";
import {Sdev2110Component} from "./pages/courses/sdev2110/sdev2110.component";
import {Sdev2210Component} from "./pages/courses/sdev2210/sdev2210.component";
import {Sdev2220Component} from "./pages/courses/sdev2220/sdev2220.component";
import {Sdev2410Component} from "./pages/courses/sdev2410/sdev2410.component";
import {Sdev2420Component} from "./pages/courses/sdev2420/sdev2420.component";
import {SDEV2520Component} from "./pages/courses/sdev2520/sdev2520.component";
import {Sdev2610Component} from "./pages/courses/sdev2610/sdev2610.component";
import {ContactMeComponent} from "./contact-me/contact-me.component";
import {TextGameComponent} from "./text-game/text-game.component";
import {DiscordBotComponent} from "./projects/discord-bot/discord-bot.component";
import {ProjectsHomeComponent} from "./projects/projects-home/projects-home.component";

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'about-me', component: AboutMeComponent },
  {path: 'course-work', component: CourseWorkComponent},
  {path: 'itec1018', component: Itec1018Component},
  {path: 'sdev1022', component: Sdev1022Component},
  {path: 'sdev1040', component: Sdev1040Component},
  {path: 'sdev1041', component: Sdev1041Component},
  {path: 'sdev1060', component: Sdev1060Component},
  {path: 'sdev1090', component: Sdev1090Component},
  {path: 'sdev2110', component: Sdev2110Component},
  {path: 'sdev2210', component: Sdev2210Component},
  {path: 'sdev2220', component: Sdev2220Component},
  {path: 'sdev2410', component: Sdev2410Component},
  {path: 'sdev2420', component: Sdev2420Component},
  {path: 'sdev2520', component: SDEV2520Component},
  {path: 'sdev2610', component: Sdev2610Component},
  {path: 'projects-home', component: ProjectsHomeComponent},
  {path: 'text-game', component: TextGameComponent},
  {path: 'discord-bot', component: DiscordBotComponent},
  {path: 'contact-me', component: ContactMeComponent},

  //otherwise redirect to home
  {path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
