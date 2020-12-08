import { Injectable } from '@angular/core';
import Classification from '../../../data/classification.json';

@Injectable({
  providedIn: 'root'
})
export class DatamanagerService {

  constructor() {}

  async getWholeData(){
    return Classification;
  }

  async getPositionsByRace(race){

    const whole = this.getWholeData();
    let result = [];

    await whole.then(res => {
      
      for (const key in res) {
        if (Object.prototype.hasOwnProperty.call(res, key)) {
          const element = res[key];

          result.push({
            id_rider: element._id,
            rider: element.name,
            timestring: element.races[race].time,
            timeInSeconds: this.getSeconds(element.races[race].time)
          });
          
        }
      }

      result.sort((a, b) => (a.timeInSeconds > b.timeInSeconds) ? 1 : -1);
      
    });

    return result;

  }

  async getRiderById(id){

    const whole = this.getWholeData();

    let rider = {};

    await whole.then(res => {

      let result = res.filter(obj => {
        return obj._id === id
      })

      rider = result[0];

    });

    return rider;
    
  }

  getSeconds(timeStr){

    let time = timeStr.split(':');


    let seconds = parseInt(time[0]) * 3600 + parseInt(time[1]) * 60 + parseFloat(time[2]);

    return seconds;

  }

}
