import { Component, Input, OnInit } from '@angular/core';
import { Details } from '../models/details';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.scss', '../pokelist.component.scss']
})
export class PokecardComponent implements OnInit {

  @Input()
  pokemons!: Pokemon[];

  constructor () { }

  ngOnInit (): void {
  }
  


}
