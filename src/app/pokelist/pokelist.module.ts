import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';

import { PokelistComponent } from './pokelist.component';
import { PokecardComponent } from './pokecard/pokecard.component';
import { FormsModule } from '@angular/forms';
import { PokedetailsComponent } from './pokedetails/pokedetails.component';
import { RouterModule } from '@angular/router';
import { PokelistRoutingModule } from './pokelist-routing.module';



@NgModule({
  declarations: [
    PokelistComponent,
    PokecardComponent,
    PokedetailsComponent,
  ],
  imports: [
    PokelistRoutingModule,
    CommonModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
  ]
})
export class PokelistModule { }
