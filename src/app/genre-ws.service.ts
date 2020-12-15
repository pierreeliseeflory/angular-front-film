import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Genre } from './genres/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreWSService {

  constructor(private http: HttpClient) { }

  getGenres = () => {
    const url = environment.genreUrl + 'all';

    return this.http.get<any>(url);
  }

  getGenre = async (id: string) => {
    var genre: Genre;
    const url = environment.genreUrl;

    return this.http.get<Genre>(url);
  }
}