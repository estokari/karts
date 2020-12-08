import { Component, OnInit } from '@angular/core';
import { DatamanagerService } from './shared/services/datamanager.service';


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
