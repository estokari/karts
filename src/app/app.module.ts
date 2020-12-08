import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RaceComponent } from './components/race/race.component';
import { ChampionshipComponent } from './components/championship/championship.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RiderComponent } from './components/rider/rider.component';
import { routing } from './app.routing';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RaceComponent,
    ChampionshipComponent,
    RiderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
