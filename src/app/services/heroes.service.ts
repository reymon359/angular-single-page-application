import { Injectable } from '@angular/core';


@Injectable()
export class HeroesService {

  private heroes: Hero[] = [
    {
      name: "Aquaman",
      bio: "Aquaman's most recognized power is the telepathic ability to communicate with marine life, which can summon at great distances.",
      img: "assets/img/aquaman.png",
      appearance: "1941-11-01",
      house: "DC"
    },
    {
      name: "Batman",
      bio: "The main features of Batman are summarized in <<physical dexterity, deductive skills, and obsession>>. Most of the basic features of comics have varied by the different interpretations they have given to the character. ",
      img: "assets/img/batman.png",
      appearance: "1939-05-01",
      house: "DC"
    },
    {
      name: "Daredevil",
      bio: "Having lost his sight, Daredevil's remaining four senses were increased by radiation to superhuman levels in the accident he had as a child. Despite his blindness, he can 'see' through a 'sixth sense' that serves as a radar similar to that of bats.",
      img: "assets/img/daredevil.png",
      appearance: "1964-01-01",
      house: "Marvel"
    },
    {
      name: "Hulk",
      bio: "His main power is his ability to increase his strength to virtually unlimited levels while increasing his fury. Depending on which Hulk personality is in charge at the time (the Hulk Banner is the weakest, but compensates with his intelligence).",
      img: "assets/img/hulk.png",
      appearance: "1962-05-01",
      house: "Marvel"
    },
    {
      name: "Green Lantern",
      bio: "Possessor of the ring of power that possesses the capacity to create manifestations of solid light by means of the utilization of the thought. It is fed by the Green Flame (revised by later writers as a mystical power called Starheart), a magical flame contained within an orb (the orb was actually a green metal meteorite that fell to Earth, which was found by a lamp manufacturer called Chang).",
      img: "assets/img/green-lantern.png",
      appearance: "1940-06-01",
      house: "DC"
    },
    {
      name: "Spider-Man",
      bio: "After being bitten by a radioactive spider, he obtained the following superhuman powers: great strength, agility, being able to climb walls. Spider-Man's strength allows it to lift 10 tons or more. Thanks to this great strength, Spider-Man can perform unbelievable jumps. An \"arachnid sense\", which allows you to know if a danger hangs over it, before it happens. Sometimes this can lead Spider-Man to the source of danger.",
      img: "assets/img/spiderman.png",
      appearance: "1962-08-01",
      house: "Marvel"
    },
    {
      name: "Wolverine",
      bio: "In the fictitious universe of Marvel, Wolverine possesses regenerative powers that can heal any wound, no matter how deadly, and that same power makes it immune to any disease on Earth and some extraterrestrials. It also possesses a superhuman force, which although it is not compared with that of other superheroes such as the Hulk, it surpasses that of any human.",
      img: "assets/img/wolverine.png",
      appearance: "1974-11-01",
      house: "Marvel"
    }
  ];

  constructor() { }

  // An experiment to check i
  // this.http.get('assets/heroes.json').subscribe( (res:any) => {
  //      console.log(res);
  //  });

  getHeroes() {
    return this.heroes;
  }

  getHero(idx: string) {
    return this.heroes[idx];
  }

  searchHeroes(term: string): Hero[] {
    let heroesArr: Hero[] = [];
    term = term.toLowerCase();
    // New for. To get the hero index in the search component
    for (let i = 0; i < this.heroes.length; i++) {
      let hero = this.heroes[i];
      let name = hero.name.toLowerCase();
      if (name.indexOf(term) >= 0) {
        hero.idx = i;
        heroesArr.push(hero);
      }
    }
    // OLD For
    // for (let hero of this.heroes) {
    //   let name = hero.name.toLowerCase();
    //   if (name.indexOf(term) >= 0) {
    //     heroesArr.push(hero);
    //   }
    // }
    return heroesArr;
  }

}


export interface Hero {
  name: string,
  bio: string,
  img: string,
  appearance: string,
  house: string,
  idx?: number
};
