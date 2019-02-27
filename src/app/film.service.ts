import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http : HttpClient) { }
  getFilm(a) {
    return this.http.get(`http://www.omdbapi.com/?apikey=b643c3d7&t=${a}`);
  }
}
