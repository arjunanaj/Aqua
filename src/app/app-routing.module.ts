import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"signIn",component:SignInComponent},
  {path:"signUp",component:SignUpComponent},
  {path:"about",component:AboutComponent},
  {path:"service",component:ServiceComponent},
  {path:"contact",component:ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled', 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
