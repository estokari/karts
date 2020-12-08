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

    this.datamanagerService.getRiderById(this.route.snapshot.params['id']).then(res => {

      self.rider = res;
      self.rider.picture = self.rider.picture.replace('64x64','256x256');
      let rs = self.rider.races.map((races) => {
        return {
          timestring: races.time,
          score: this.datamanagerService.getSeconds(races.time)
        }
      });

      self.rider.best = rs.sort((a, b) => (a.score > b.score) ? 1 : -1)[0].timestring;    
      console.log(self.rider.best);
      
    });
  }

}
