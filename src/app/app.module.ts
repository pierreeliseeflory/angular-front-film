import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './films/film/film.component';
import { RealisateursComponent } from './realisateurs/realisateurs.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { RealisateurComponent } from './realisateurs/realisateur/realisateur.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DeleteDialogComponent } from './realisateurs/delete-dialog/delete-dialog.component';
import { DeleteDialogFilmComponent } from './films/delete-dialog-film/delete-dialog-film.component';
import { FilterFilmsComponent } from './films/filter-films/filter-films.component';
import { FilterRealisateursComponent } from './realisateurs/filter-realisateurs/filter-realisateurs.component';
import { CreateFilmComponent } from './films/create-film/create-film.component';
import { CreateRealisateurComponent } from './realisateurs/create-realisateur/create-realisateur.component';
import { PageErreurComponent } from './page-erreur/page-erreur.component';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmComponent,
    RealisateursComponent,
    RealisateurComponent,
    DeleteDialogComponent,
    DeleteDialogFilmComponent,
    FilterFilmsComponent,
    FilterRealisateursComponent,
    CreateFilmComponent,
    CreateRealisateurComponent,
    PageErreurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }, 
      defaultLanguage: 'en'
    }),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }