import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedetailsComponent } from './pokedetails/pokedetails.component';
import { PokelistComponent } from './pokelist.component';

const routes: Routes = [
    { path: '', component: PokelistComponent },
    { path: 'details/:id', component: PokedetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokelistRoutingModule { }
