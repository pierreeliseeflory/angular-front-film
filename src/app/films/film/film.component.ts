import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Film } from '../film.model';

import { FilmWSService } from 'src/app/film-ws.service';
import { DeleteDialogFilmComponent } from '../delete-dialog-film/delete-dialog-film.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { RealisateurWSService } from 'src/app/realisateur-ws.service';
import { GenreWSService } from 'src/app/genre-ws.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
})
export class FilmComponent implements OnInit {
  film: Film;
  id: string;
  titre: string;
  duration: number;
  realisateur: number;
  genre: number;
  realisateurs: any[];
  genres: any[];

  empty: string;
  close: string;
  error: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmWSService: FilmWSService,
    private realisateurWSService: RealisateurWSService,
    private genreWSService: GenreWSService,
    private router: Router,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    translate: TranslateService
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.id = params['id'];
    });
    this.realisateurs = [];
    this.genres = [];
    translate.get('empty').subscribe((text:string) => {this.empty = text});
    translate.get('close').subscribe((text:string) => {this.close = text});
    translate.get('error').subscribe((text:string) => {this.error = text});
  }

  getFilm() {
    this.filmWSService.getFilm(this.id).then( res => {
      this.film = new Film(
        res.id,
        res.titre,
        res.duration,
        res.realisateur,
        res.realisateurName,
        res.genre,
        res.genreName
      );
    })
    .catch( err => {
      this.router.navigateByUrl('404');
    })
  }

  ngOnInit(): void {
    this.getFilm();
    this.getListRealisateurs();
    this.getListGenres();
  }

  getListRealisateurs(): void {
    this.realisateurWSService.getRealisateurs(-1, 0).subscribe((response) => {
      response.data.forEach((element) => {
        this.realisateurs.push({
          id: element.id,
          appelation: element.prenom + ' ' + element.nom,
        });
      });
    });
  }

  getListGenres(): void {
    this.genreWSService.getGenres().subscribe((response) => {
      response.forEach((element) => {
        this.genres.push({
          id: element.id,
          nom: element.nom,
        });
      });
    });
  }

  delete() {
    const dialogRef = this.dialog.open(DeleteDialogFilmComponent);

    const sub = dialogRef.componentInstance.onDelete.subscribe((result) => {
      this.filmWSService.deleteFilm(this.id).subscribe((response) => {
        this.router.navigateByUrl('film/all');
      });
    });
  }

  updateFilm() {
    if (
      this.titre == null &&
      this.duration == null &&
      this.realisateur == null &&
      this.genre == null
    ) {
      this._snackBar.open(this.empty, this.close, {
        duration: 2000,
      });
    } else {
      if (!this.titre) this.titre = this.film.titre;
      if (!this.duration) this.duration = this.film.duration;
      if (!this.realisateur) this.realisateur = this.film.realisateur;
      if (!this.genre) this.genre = this.film.genre;
      this.filmWSService
        .updateFilm(this.titre, this.duration, this.realisateur, this.id, this.genre)
        .subscribe((response) => {
          if (response.status == 200) {
            location.reload();
          } else {
            this._snackBar.open(this.error, this.close, {
              duration: 2000,
            });
          }
        });
    }
  }
}
