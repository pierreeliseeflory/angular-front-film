import { Injectable } from '@angular/core';

import { Film } from './films/film.model'

import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmWSService {

  constructor(private http: HttpClient) { 
  };

   getFilms = (taillePage: number, page: number, category: string, order: boolean) => {
    const params = new HttpParams()
      .set('size', String(taillePage))
      .set('offset', String(page))
      .set('category', String(category))
      .set('order', String(order))

    const url = environment.filmUrl + 'all'; 

    return this.http
      .get<any>(url, {params});
  }

  getFilm = (id: string): Promise<any> => {
    const params = new HttpParams()
      .set('id', id);

    const url = environment.filmUrl;

    return this.http
      .get<any>(url, {params})
      .toPromise()
  }

  createFilm = (
    titre: string,
    duration: number,
    realisateur: number,
    genre: number
  ) => {
    const body = {
      "titre" : titre,
      "duration": duration,
      "realisateur": realisateur,
      "genre": genre
    }

    const url = environment.filmUrl; 

    return this.http
      .post<any>(url, body, {observe: "response"});
  }

  updateFilm = (
    titre: string,
    duration: number,
    realisateur: number,
    id: string,
    genre: number,
  ) => {
    const body = {
      "titre" : titre,
      "duration": duration,
      "realisateur": realisateur,
      "genre": genre,
      "id": id
    }

    const url = environment.filmUrl; 

    return this.http
      .put<any>(url, body, {observe: "response"});
  }

  deleteFilm = (
    id: string
  ) => {
    const params = new HttpParams()
    .set('id', id);

    const url = environment.filmUrl; 

    return this.http
      .delete<any>(url, {params});
  }
}
