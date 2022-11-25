import {Component, Input, OnInit} from '@angular/core';
import {FilmService} from "../services/film.service";
import {Film} from "../Model/Film";

@Component({
  selector: 'app-serchbar',
  templateUrl: './serchbar.component.html',
  styleUrls: ['./serchbar.component.css']
})
export class SerchbarComponent implements OnInit {
  @Input() films :Film[]=[];

  constructor( private filmService:FilmService) { }

  ngOnInit(): void {
  }


}
