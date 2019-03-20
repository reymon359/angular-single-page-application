import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  constructor(private heroesSer: HeroesService) { }

  ngOnInit() {
    this.heroes = this.heroesSer.getHeroes();
    console.log(this.heroes);
  }

}
