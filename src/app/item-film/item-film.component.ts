import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Film} from "../Model/Film";
import {FilmService} from "../services/film.service";

@Component({
  selector: 'app-item-film',
  templateUrl: './item-film.component.html',
  styleUrls: ['./item-film.component.css']
})
export class ItemFilmComponent implements OnInit {
  @Input() filmItem!: Film;
  @Input() index!: string;
  constructor(private filmService :FilmService) { }
  @ Output() filmSelected =new EventEmitter<Film>();
  OnSelect(){
    alert(this.filmItem.title);
  }
  getUrl(name : any){
    return this.filmService.getimagefromapi(name);
  }




  ngOnInit(): void {
  }

}
