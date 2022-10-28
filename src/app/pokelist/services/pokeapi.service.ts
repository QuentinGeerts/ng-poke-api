import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Details } from '../models/details';
import { Pokemon } from '../models/pokemon';
import { Resources } from '../models/resouces';
import { Species } from '../models/species';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  BASE_URL: string = 'https://pokeapi.co/api/v2/pokemon';
  API_URL: string = 'https://pokeapi.co/api/v2/pokemon?limit=__count__&offset=__offset__';

  pokemons: Pokemon[] = [];

  constructor (private _httpClient: HttpClient) { }

  private getDetails (url: string) {
    return this._httpClient.get<Details>(url);
  }

  private getSpecies (url: string) {
    return this._httpClient.get<Species>(url);
  }

  getAll (count: number = 10, offset: number = 0) {
    return this._httpClient.get<Resources>(
      this.API_URL.replace("__count__", count.toString().replace("__offset__", offset.toString()))
    );
  }

  getById (id: string) {
    return this._httpClient.get<Resources>(`${this.BASE_URL}/${id}`);
  }

  mapPokemon (rsc: Resources) {

    // Clear array
    this.pokemons.splice(0, this.pokemons.length);

    console.log('rsc :>> ', rsc);

    rsc.results.forEach((pokemonInfo) => {
      this.getDetails(pokemonInfo.url)
        .subscribe((details: Details) => {
          this.getSpecies(details.species.url)
            .subscribe((species: Species) => {
              const poke: Pokemon = { id: details.id, details: details, species: species };
              this.pokemons.push(poke);

              console.log('poke :>> ', poke);

              // Tri par id
              this.pokemons.sort((a, b) => a.id - b.id);
            });
        });
    });
  }
}
