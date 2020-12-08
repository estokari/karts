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

    return await this.getWholeData().then(res => {


      let riders = res.map((rider) => {

        return {
          rider : rider,
          timestring: rider.races[race].time,
          score : this.getSeconds(rider.races[race].time)
        };
      });

      let ridersSorted = riders.sort((a, b) => (a.score > b.score) ? 1 : -1);

       

      return ridersSorted.map((rider, index) => {
        return {
          rider: rider,
          position: (index + 1)
        }
      });
      
    });
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

  async getMainClassification(){

    return await this.getWholeData().then(res => {

      let riders = res.map((rider) => {

        let time = 0;
        
        rider.races.forEach(element => {
          time += this.getSeconds(element.time);
        });

        return {
          rider : rider,
          score : time
        };
      });

      return riders.sort((a, b) => (a.score > b.score) ? 1 : -1);
    })
  }

  async getRiderPositionInRace(rider, race){

    //let pos:any;

    return await this.getPositionsByRace(race).then(res => {

      let result = res.filter(obj => {
        return obj.rider.rider._id === rider
      });

      //console.log(r);
      return result[0].position
      


    })
    
  }

  getSeconds(timeStr){

    let time = timeStr.split(':');
    let seconds = parseInt(time[0]) * 3600 + parseInt(time[1]) * 60 + parseFloat(time[2]);

    return seconds;
  }

}
