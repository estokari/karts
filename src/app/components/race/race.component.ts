import { Component, OnInit, Input } from '@angular/core';
import { DatamanagerService } from '../../shared/services/datamanager.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  raceData:any;
  @Input() numRace:any;

  constructor(private datamanagerService: DatamanagerService) { }

  
  
  ngOnInit(): void {

    const self = this;

    let race = parseInt(this.numRace) -1;

    this.datamanagerService.getPositionsByRace(race).then(data => {
      
      self.raceData = data;

    });
  
  }

  

}
