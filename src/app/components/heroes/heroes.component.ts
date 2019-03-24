import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  constructor(private heroesSer: HeroesService, private router:Router) { }

  ngOnInit() {
    this.heroes = this.heroesSer.getHeroes();
    console.log(this.heroes);
  }

  // Old code when we didnt use the app-hero-card
  seeHero(idx: number) {
    this.router.navigate(['/hero', idx]);
  }
}
