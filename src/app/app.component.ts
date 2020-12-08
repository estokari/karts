import { Component, OnInit } from '@angular/core';
import { DatamanagerService } from './shared/services/datamanager.service';
import { RaceComponent } from './components/race/race.component';
import { ChampionshipComponent } from './components/championship/championship.component';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgbCarouselConfig]
})
export class AppComponent implements OnInit{
  
  title = 'devaway-app';

  constructor (private datamanagerService: DatamanagerService, config: NgbCarouselConfig){

    config.interval = 6000;
    config.keyboard = true;
    config.pauseOnHover = true;

  }

  ngOnInit(): void { 

  }
}
