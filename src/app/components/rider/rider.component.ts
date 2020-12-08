import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatamanagerService } from '../../shared/services/datamanager.service';

@Component({
  selector: 'app-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.scss']
})
export class RiderComponent implements OnInit {

  rider:any = {};

  constructor(private route: ActivatedRoute, private datamanagerService: DatamanagerService) { 
  }

  ngOnInit(): void {

    const self = this;
    let idRider = this.route.snapshot.params['id'];

    this.datamanagerService.getRiderById(this.route.snapshot.params['id']).then(res => {

      self.rider = res;
      self.rider.picture = self.rider.picture.replace('64x64','256x256');
      let rs = self.rider.races.map((race, index) => {

        return {
          timestring: race.time,
          score: this.datamanagerService.getSeconds(race.time),
        }
      });

      self.rider.best = rs.sort((a, b) => (a.score > b.score) ? 1 : -1)[0].timestring;    

      self.rider.races.map((race, index) => {

        this.datamanagerService.getRiderPositionInRace(idRider, index).then((data) => {
            self.rider.races[index]['position'] = data; 
        })
      })      
      
    });
  }

}
