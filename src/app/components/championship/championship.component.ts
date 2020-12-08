import { Component, OnInit } from '@angular/core';
import { DatamanagerService } from '../../shared/services/datamanager.service';

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.scss']
})
export class ChampionshipComponent implements OnInit {

  classification:any = [];

  constructor(private datamanagerService: DatamanagerService) { }

  ngOnInit(): void {

    const self = this;
  
    this.datamanagerService.getMainClassification().then(data => {
      
      self.classification =  data;
      
    });

  }

}
