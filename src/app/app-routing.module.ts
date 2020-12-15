import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './films/film/film.component';
import { FilterFilmsComponent } from './films/filter-films/filter-films.component';
import { RealisateursComponent } from './realisateurs/realisateurs.component';
import { RealisateurComponent } from './realisateurs/realisateur/realisateur.component';
import { FilterRealisateursComponent } from './realisateurs/filter-realisateurs/filter-realisateurs.component';
import { PageErreurComponent } from './page-erreur/page-erreur.component';


const routes: Routes = [
  { path: '404', component: PageErreurComponent },
  { path: 'film/all', component: FilmsComponent },
  { path: 'film', component: FilmComponent },
  { path: 'realisateur/all', component: RealisateursComponent },
  { path: 'realisateur', component: RealisateurComponent },
  { path: 'filmFilter', component: FilterFilmsComponent },
  { path: 'DirectorFilter', component: FilterRealisateursComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
