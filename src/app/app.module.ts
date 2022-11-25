import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListFilmComponent } from './list-film/list-film.component';
import { ItemFilmComponent } from './item-film/item-film.component';
import {FilmService} from "./services/film.service";
import {HttpClientModule} from "@angular/common/http";
import {Routes, RouterModule,Router} from "@angular/router";
import { SignINComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { FavorisComponent } from './favoris/favoris.component';
import { SerchbarComponent } from './serchbar/serchbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const appRoutes :Routes =[
  {path :'' , component : ListFilmComponent},
  {path :'SingIn' , component : SignINComponent},
  {path :'SingOut' , component : SignOutComponent},
  {path :'Home' , component : HomeComponent},
  {path :'Details/:id' , component : DetailsComponent},
  {path :'Favoris' , component : FavorisComponent},
  {path :'**' , redirectTo : '/not-found'},
]

@NgModule({
  declarations: [
    AppComponent,
    ListFilmComponent,
    ItemFilmComponent,
    SignINComponent,
    SignOutComponent,
    HomeComponent,
    DetailsComponent,
    FavorisComponent,
    SerchbarComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
