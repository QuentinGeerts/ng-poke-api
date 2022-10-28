import { Component, OnInit } from '@angular/core';
import { Details } from './models/details';
import { Pokemon } from './models/pokemon';
import { Resources } from './models/resouces';
import { Species } from './models/species';
import { PokeapiService } from './services/pokeapi.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.scss']
})
export class PokelistComponent implements OnInit {

  count: number = 20;
  pokeInfo!: Resources;

  pokemons: Pokemon[] = [];

  constructor (private _pokeapiService: PokeapiService) { }

  ngOnInit (): void {
    this.initLists(this.count);
  }

  searchByCount () {
    this.initLists(this.count);
  }

  private initLists (count: number) {
    this._pokeapiService
      .getAll(count)
      .subscribe((rsc: Resources) => {
        this._pokeapiService.mapPokemon(rsc);
        this.pokemons = this._pokeapiService.pokemons;
      });
  }

}
