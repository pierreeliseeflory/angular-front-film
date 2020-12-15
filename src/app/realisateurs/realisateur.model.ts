export class Realisateur {
    dateNaissance:Date;
    id:number;
    nom:string;
    prenom:string;

    constructor(
        id:number,
        dateNaissance:Date,
        nom:string,
        prenom:string){
        this.dateNaissance = dateNaissance;
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
    }
}
