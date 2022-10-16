import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Details } from '../models/details';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-pokedetails',
  templateUrl: './pokedetails.component.html',
  styleUrls: ['./pokedetails.component.scss']
})
export class PokedetailsComponent implements OnInit {

  pkm!: Details;

  constructor (
    private _route: ActivatedRoute,
    private _pokeapiService: PokeapiService
  ) { }

  ngOnInit (): void {
    const id = this._route.snapshot.paramMap.get('id') ?? "";
    this._pokeapiService
      .getById(id)
      .subscribe(
        (data) => this.pkm = data
      );
  }

}
