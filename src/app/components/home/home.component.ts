import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RaceComponent } from '../race/race.component';
import { ChampionshipComponent } from '../championship/championship.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  races:number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
