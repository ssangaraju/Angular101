import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'welcome', component: WelcomeComponent},
{path: 'about', component: AboutComponent},
];

@NgModule({
  declarations:[HomeComponent, WelcomeComponent, AboutComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
