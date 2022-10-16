import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  constructor (
    private _pokeapiService: PokeapiService
  ) { }

  ngOnInit (): void {
    this.initLists(this.count);
  }

  searchByCount () {
    this.initLists(this.count);
  }

  private initLists (count: number) {
    // Clear pokemon list
    this.pokemons = [];

    // Calls API
    this._pokeapiService
      .get(this.count)
      .subscribe((resources: Resources) => {
        this.pokeInfo = resources;
        resources.results.forEach(pokemon => {
          // Récupération des détails de chaque pokémon
          this._pokeapiService
            .getDetails(pokemon.url)
            .subscribe((details: Details) => {
              this._pokeapiService
                .getSpecies(details.species.url)
                .subscribe((species: Species) => {
                  this.pokemons.push(
                    {
                      id: details.id,
                      details: details,
                      species: species
                    }
                  );

                  // Tri par id
                  this.pokemons.sort((a, b) => a.id - b.id);
                });
            });
        });
      })


  }

}
