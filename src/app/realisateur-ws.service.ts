import { Injectable } from '@angular/core';

import { Realisateur } from './realisateurs/realisateur.model'

import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RealisateurWSService {

  constructor(private http: HttpClient) { 
  };

   getRealisateurs = (taillePage: number, page: number) => {
    const params = new HttpParams()
      .set('size', String(taillePage))
      .set('offset', String(page));

    const url = environment.realisateurUrl + 'all'; 

    return this.http
      .get<any>(url, {params});
  }

  getRealisateur = (id: string): Promise<any> => {
    const params = new HttpParams()
      .set('id', String(id));

    var realisateur:Realisateur;
    const url = environment.realisateurUrl;

    return this.http
      .get<any>(url, {params})
      .toPromise();
  }

  createRealisateur = (
    nom: string,
    prenom: string,
    dateNaissance: string
  ) => {
    const body = {
      "nom" : nom,
      "prenom": prenom,
      "dateNaissance": dateNaissance
    }

    const url = environment.realisateurUrl; 

    return this.http
      .post<any>(url, body, {observe: "response"});
  }

  updateRealisateur = (
    nom: string,
    prenom: string,
    dateNaissance: string,
    id: string
  ) => {
    const body = {
      "nom" : nom,
      "prenom": prenom,
      "dateNaissance": dateNaissance,
      "id": id
    }

    const url = environment.realisateurUrl; 

    return this.http
      .put<any>(url, body, {observe: "response"});
  }

  deleteRealisateur = (
    id: string
  ) => {
    const params = new HttpParams()
    .set('id', id);

    const url = environment.realisateurUrl; 

    return this.http
      .delete<any>(url, {params});
  }
}