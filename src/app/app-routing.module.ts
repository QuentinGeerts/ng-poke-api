import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokelistComponent } from './pokelist/pokelist.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'pokelist', component: PokelistComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
