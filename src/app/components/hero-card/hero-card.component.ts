import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() hero:any = {}; // With the input i mean that the info can come from outside
  @Input() index:number;
  constructor( private router:Router) { }

  ngOnInit() {
  }

  seeHero(){
        this.router.navigate(['/hero', this.index]);
  }
}
