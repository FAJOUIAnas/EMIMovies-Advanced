import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Film} from "../Model/Film";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
const API_TOKEN :any= "a11d4e6521d46720f8cba6b511835438"
const url= 'https://api.themoviedb.org/3/movie/popular?api_key=' + API_TOKEN

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  movies?: Film[]

  constructor(private http : HttpClient) {
  }



  get( id: number){

  }

  getAll(){
    return this.http.get(url)
      .toPromise()
      .then((response : any)=> response)
      .catch((error)=> console.error(error))
  }

  getimagefromapi( poster_path: string){
    return 'https://image.tmdb.org/t/p/w300' + poster_path
  }

  searchMovies(moviePrefix: string): Observable<Film[]> {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=en-US&query=${moviePrefix}%20&page=1&include_adult=true`
    return this.http.get<Film[]>(url).pipe(map((res: any) => res.results))
  }
  searchMoviesById(id : number) : Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key='+ API_TOKEN +'&language=fr')
  }



  // .subscribe((response : Response) => {
  //   console.log(response.status)
  //   console.log(response.headers)
  //   console.log(response.json())

}
