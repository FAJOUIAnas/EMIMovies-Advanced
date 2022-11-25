import { Component, OnInit } from '@angular/core';
import {Film} from "../Model/Film";
import {FilmService} from "../services/film.service";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor( private filmService:FilmService,private route:ActivatedRoute) { }
  films?: Film
  /*AfficherDetail(id: number) : void {
    this.filmService.searchMoviesById(id)
      .subscribe((theFilms : Film) =>{console.log(theFilms);this.films = theFilms} )

  }*/
  getUrl(name : any){
    return this.filmService.getimagefromapi(name);
  }

  ngOnInit(): void {
    let id : number = this.route.snapshot.params['id'];
      this.filmService.searchMoviesById(id).subscribe({
      next : (data : any) => {
        this.films = data
        console.log(this.films)
      }
    })
  }

}
