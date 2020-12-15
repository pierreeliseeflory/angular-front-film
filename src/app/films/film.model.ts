export class Film {
    id: number;
    titre: string;
    duration: number;
    realisateur: number;
    realisateur_nom: string;
    genre: number;
    genre_nom: string;

    constructor(id: number,
        titre: string,
        duration: number,
        realisateur: number,
        realisateur_nom: string,
        genre: number,
        genre_nom: string){
        this.id = id;
        this.titre = titre;
        this.duration = duration;
        this.realisateur = realisateur;
        this.realisateur_nom = realisateur_nom;
        this.genre = genre;
        this.genre_nom = genre_nom;
    }
}
