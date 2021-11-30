import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { SignInComponent } from './components/forms/sign-in/sign-in.component';
import { SignUpComponent } from './components/forms/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [ 
{ path: '', component: HomeComponent },
{ path: 'home', component: HomeComponent },
{ path: 'exercises', component: ExercisesComponent },
{ path: 'sign-in', component: SignInComponent },
{ path: 'sign-up', component: SignUpComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'about', component: AboutComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
