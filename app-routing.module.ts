import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BoxComponent } from './box/box.component';
import { NavbarComponent } from './navbar/navbar.component';
const routes: Routes = [
  {path:'homepage',component:HomepageComponent}, 
  {path:'column',component:BoxComponent},
  {path:'navbar',component:NavbarComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
