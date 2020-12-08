import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RaceComponent } from '../race/race.component';
import { ChampionshipComponent } from '../championship/championship.component';
import { NgbCarousel , NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarousel]
})
export class HomeComponent implements OnInit {

  races:number = 10;
  play = true;
  stop = false;

  @ViewChild('scores', {static : true}) carousel: NgbCarousel;

  constructor(config: NgbCarousel) { 
    config.interval = 6000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

  goToSlide(slide) {
    this.carousel.select(slide);
    this.stopSlider();
  }

  prevSlider(){
    this.carousel.prev();
    this.stopSlider();
  }

  nextSlider(){
    this.carousel.next();
    this.stopSlider();
  }

  stopSlider(){
    this.carousel.pause();
    this.stop = true;
    this.play = false; 
  }

  playSlider(){
    this.carousel.cycle();
    this.stop = false;
    this.play = true; 
  }



}
