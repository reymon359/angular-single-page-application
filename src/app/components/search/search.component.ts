import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes: any[] = [];
  searchTerm: string;

  constructor(private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService) {
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.searchTerm = params['term'];
      this.heroes = this.heroesService.searchHeroes(params['term']);
    });
  }

}
