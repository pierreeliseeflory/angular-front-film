import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { RealisateurWSService } from 'src/app/realisateur-ws.service';

@Component({
  selector: 'app-create-realisateur',
  templateUrl: './create-realisateur.component.html',
  styleUrls: ['./create-realisateur.component.css']
})
export class CreateRealisateurComponent implements OnInit {
  prenom: string;
  nom: string;
  dateNaissance: Date;

  uncomplete: string;
  close: string;
  added: string;
  error: string;

  constructor(
    private realisateurWSService: RealisateurWSService,
    private datepipe: DatePipe,
    private _snackBar : MatSnackBar,
    translate: TranslateService) {
    translate.get('uncomplete').subscribe((text:string) => {this.uncomplete = text});
    translate.get('close').subscribe((text:string) => {this.close = text});
    translate.get('added').subscribe((text:string) => {this.added = text});
    translate.get('error').subscribe((text:string) => {this.error = text});

    }

  ngOnInit(): void {
  }

  post() {
    if (this.nom == null || this.prenom == null || this.dateNaissance == null) {
      this._snackBar.open(this.uncomplete, this.close, {
        duration: 2000,
      })
    } else {
      this.realisateurWSService.createRealisateur(
        this.nom,
        this.prenom,
        this.datepipe.transform(this.dateNaissance, 'yyyy-MM-dd')
      ).subscribe(response => {
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
