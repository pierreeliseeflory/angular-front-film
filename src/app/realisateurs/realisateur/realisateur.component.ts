import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouteReuseStrategy } from '@angular/router';
import { Realisateur } from '../realisateur.model';

import { RealisateurWSService } from 'src/app/realisateur-ws.service'
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-realisateur',
  templateUrl: './realisateur.component.html',
  styleUrls: ['./realisateur.component.css']
})
export class RealisateurComponent implements OnInit {

  realisateur:Realisateur;
  id:string;
  prenom: string;
  nom: string;
  dateNaissance: Date;

  field: string;
  close: string;
  error: string;

  constructor(private activatedRoute: ActivatedRoute, 
    private realisateurWS: RealisateurWSService,
    private router: Router,
    private datepipe: DatePipe,
    private _snackBar : MatSnackBar,
    public dialog: MatDialog,
    translate: TranslateService) {
      this.activatedRoute.queryParams.subscribe(params => {
        this.id = params['id'];
      });
      translate.get('empty').subscribe((text:string) => {this.field = text});
      translate.get('close').subscribe((text:string) => {this.close = text});
      translate.get('error').subscribe((text:string) => {this.error = text});
  }

  getRealisateur() {
    this.realisateurWS.getRealisateur(this.id).then(data => {
      this.realisateur = new Realisateur(
        data.id, 
        data.dateNaissance, 
        data.nom, 
        data.prenom
      )
    })
    .catch(err => {
      this.router.navigateByUrl('404');
    })
  }
  
  ngOnInit() {
    this.getRealisateur();
  }

  delete() {
    const dialogRef = this.dialog.open(DeleteDialogComponent);

    const sub = dialogRef.componentInstance.onDelete.subscribe(result => {
      this.realisateurWS.deleteRealisateur(this.id).subscribe(
        response => {
          this.router.navigateByUrl("realisateur/all");
        }
      )
    });
  }

  update() {
    if (this.nom == null && this.prenom == null && this.dateNaissance == null) {
      this._snackBar.open(this.field, this.close, {
        duration: 2000,
      })
    } else {
      if (!this.nom) this.nom = this.realisateur.nom;
      if (!this.prenom) this.prenom = this.realisateur.prenom;
      if (!this.dateNaissance) this.dateNaissance = this.realisateur.dateNaissance;
      this.realisateurWS.updateRealisateur(this.nom, this.prenom, this.datepipe.transform(this.dateNaissance, 'yyyy-MM-dd'), this.id).subscribe(
        response => {
          if (response.status == 200) {
            location.reload();
          } else {
            this._snackBar.open( this.error, this.close, {
              duration: 2000,
            })
        }
      })
    }
  }
}