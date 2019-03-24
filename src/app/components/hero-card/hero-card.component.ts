import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() hero: any = {}; // With the input i mean that the info can come from outside
  @Input() index: number;

  @Output() heroSelected: EventEmitter<number>; // It is going to emmit a index (number)

  constructor(private router: Router) {
    this.heroSelected = new EventEmitter(); // Initialize the EventEmitter
  }

  ngOnInit() {
  }

  seeHero() {
    // OLD
    // this.router.navigate(['/hero', this.index]);
    this.heroSelected.emit(this.index);
  }
}
