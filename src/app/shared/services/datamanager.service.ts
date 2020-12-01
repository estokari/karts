import { Injectable } from '@angular/core';
import Classification from '../../../data/classification.json';

@Injectable({
  providedIn: 'root'
})
export class DatamanagerService {

  constructor() { 
    
  }

  async getWholeData(){
    return Classification;
  }

  async getPositionsByRace(race){

    const whole = this.getWholeData();
    let result = [];

    //console.log(whole);
    await whole.then(res => {
      
      for (const key in res) {
        if (Object.prototype.hasOwnProperty.call(res, key)) {
          const element = res[key];

          result.push({
            id_rider: element._id,
            rider: element.name,
            timestring: element.races[race].time,
            timeStamp: Date.parse("Wed Jun 20 " + element.races[0].time + " +0000 2020")
          });
          
        }
      }

      result.sort((a, b) => parseFloat(a.timeStamp) - parseFloat(b.timeStamp));      
      
    });

    return result;

  }

}
