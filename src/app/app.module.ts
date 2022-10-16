import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { PokelistModule } from './pokelist/pokelist.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './nav/nav.component';

@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    PokelistModule,
    SharedModule,
  ],

  providers: [],

  bootstrap: [AppComponent]

})
export class AppModule { }
