import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { FilmWSService } from 'src/app/film-ws.service';
import { GenreWSService } from 'src/app/genre-ws.service';
import { RealisateurWSService } from 'src/app/realisateur-ws.service';

@Component({
  selector: 'app-create-film',
  templateUrl: './create-film.component.html',
  styleUrls: ['./create-film.component.css']
})
export class CreateFilmComponent implements OnInit {

  realisateurs: any[];
  genres: any[];
  titre: string;
  duration: number;
  realisateur: number;
  genre: number;

  fields: string;
  close: string;
  error: string;
  added: string;

  constructor(
    private filmWSService: FilmWSService,
    private realisateurWSService: RealisateurWSService,
    private genreWSService: GenreWSService,
    private _snackBar : MatSnackBar,
    translate: TranslateService
  ) {
    this.realisateurs = [];
    this.genres = [];
    translate.get('error').subscribe((text:string) => {this.error = text});
    translate.get('close').subscribe((text:string) => {this.close = text});
    translate.get('filmAdded').subscribe((text:string) => {this.added = text});
    translate.get('uncomplete').subscribe((text:string) => {this.fields = text});
  }

  ngOnInit(): void {
    this.getListRealisateurs();
    this.getListGenres();
  }

  getListRealisateurs(): void {
    this.realisateurWSService.getRealisateurs(-1, 0).subscribe(
      response => {
        response.data.forEach(element => {
          this.realisateurs.push(
            {
              "id": element.id,
              "appelation": element.prenom + " " + element.nom
            }
          )
        })
      }
    )
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

  createFilm() {
    if (this.titre == null || this.duration == null || this.realisateur == null || this.genre == null) {
      this._snackBar.open(this.fields, this.close, {
        duration: 2000,
      })
    } else {
      this.filmWSService.createFilm(this.titre, this.duration, this.realisateur, this.genre).subscribe(response => {
        var message: string;
        if (response.status == 200) {
          message = this.added;        
        } else {
          message = this.error;        

        }
          this._snackBar.open(message, this.close, {
            duration: 2000,
          })
      })
    }
  }

}
