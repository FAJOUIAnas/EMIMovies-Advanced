import { Component, OnInit } from '@angular/core';
import {Film} from "../Model/Film";
import {FilmService} from "../services/film.service";

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit {
  constructor(private filmService :FilmService) { }
  affiche($event :Film){
  }
  films :Film[]=[];
  search(searchPrefix: string) : void {
    this.filmService.searchMovies(searchPrefix)
      .subscribe((theFilms : Film[]) => this.films = theFilms)
  }

  ngOnInit(): void {
    this.filmService.getAll().then((data :any)=> {this.films =data.results})
  }

}
