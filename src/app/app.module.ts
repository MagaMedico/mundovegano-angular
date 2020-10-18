import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VeganListComponent } from './vegan-list/vegan-list.component';
import { VeganDietComponent } from './vegan-diet/vegan-diet.component';

import { FormsModule } from '@angular/forms';
import { VeganAboutComponent } from './vegan-about/vegan-about.component';
import { VeganHomeComponent } from './vegan-home/vegan-home.component';

@NgModule({
  declarations: [
    AppComponent,
    VeganListComponent,
    VeganDietComponent,
    VeganAboutComponent,
    VeganHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
