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


    this.datamanagerService.getPositionsByRace(0).then(data => {
      console.log(data);

      for (const key in data) {

        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const element = data[key];

          this.datamanagerService.getRiderById(element.id_rider).then(data => {

            console.log(data);
            

          });
          
        }
      }

    });

  }
}
