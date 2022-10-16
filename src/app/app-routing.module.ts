import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokedetailsComponent } from './pokelist/pokedetails/pokedetails.component';
import { PokelistComponent } from './pokelist/pokelist.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'pokelist', loadChildren: () => import('./pokelist/pokelist.module').then(m => m.PokelistModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
