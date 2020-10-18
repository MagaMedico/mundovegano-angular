import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeganAboutComponent } from './vegan-about/vegan-about.component';
import { VeganHomeComponent } from './vegan-home/vegan-home.component';

const routes: Routes = [
  { path:'', component: VeganHomeComponent },
  { path:'home', component: VeganHomeComponent },
  { path:'about', component: VeganAboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
