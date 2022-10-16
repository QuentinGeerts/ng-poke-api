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
  API_URL: string = 'https://pokeapi.co/api/v2/pokemon?limit=__count__&offset=0';

  constructor (
    private _httpClient: HttpClient
  ) { }

  get (count: number = 10) {
    return this._httpClient.get<Resources>(this.API_URL.replace("__count__", count.toString()));
  }

  getDetails (url: string) {
    return this._httpClient.get<Details>(url);
  }

  getSpecies (url: string) {
    return this._httpClient.get<Species>(url);
  }

  getById (id: string) {
    return this._httpClient.get<Details>(`${this.BASE_URL}/${id}`);
  }

}
