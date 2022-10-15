import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokelistComponent } from './pokelist.component';
import { PokecardComponent } from './pokecard/pokecard.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PokelistComponent,
    PokecardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class PokelistModule { }
