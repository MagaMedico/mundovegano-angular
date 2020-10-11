import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VeganListComponent } from './vegan-list/vegan-list.component';
import { VeganDietComponent } from './vegan-diet/vegan-diet.component';

@NgModule({
  declarations: [
    AppComponent,
    VeganListComponent,
    VeganDietComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
