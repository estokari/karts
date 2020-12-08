import { Component, OnInit } from '@angular/core';
import { DatamanagerService } from './shared/services/datamanager.service';
import { RaceComponent } from './components/race/race.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'devaway-app';

  constructor (private datamanagerService: DatamanagerService){

  }

  ngOnInit(): void { 

  }
}
