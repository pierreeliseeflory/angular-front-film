# FrontAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

On utilise le framework Angular Material avec le thème par défaut.

## Development server

`ng serve` ou `npm start` pour lancer le projet puis http://localhost:4200/

## Contenu

### Composants

* films
  * create-film (formulaire de création)
  * delete-dialog-film (popup d'avertissement)
  * film (détails)
  * filter-films (fonction de recherche sur une liste simplifiée de films)
  * films (liste des films)
* realisateur
  * create-realisateur (formulaire de création)
  * delete-dialog (popup d'avertissement)
  * filter-realisateurs (fonction de recherche sur une liste simplifiée de réalisateurs)
  * realisateur (détails)
  * realisateurs (liste des réalisateurs)
* page d'erreur 404

### Modèles

* film
* realisateur
* genre

### Services

* film
* realisateur
* genre

### Traduction

* fr
* en

### Fonctionnalités

* Fonction de pagination, tri et filtrage sur les films
* Fonction de pagination sur les réalisateurs
* Fonction de recherche poussée sur les films et les réalisateurs
* Signalement de page introuvable avec une erreur 404
