import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RaceComponent } from './components/race/race.component';
import { ChampionshipComponent } from './components/championship/championship.component';

@NgModule({
  declarations: [
    AppComponent,
    RaceComponent,
    ChampionshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
