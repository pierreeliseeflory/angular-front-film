import { Component, OnInit } from '@angular/core';

import { Realisateur } from './realisateur.model';
import { PageEvent } from '@angular/material/paginator';
import { RealisateurWSService } from '../realisateur-ws.service';

@Component({
  selector: 'app-realisateurs',
  templateUrl: './realisateurs.component.html',
  styleUrls: ['./realisateurs.component.css']
})
export class RealisateursComponent implements OnInit {
  dataSource: Realisateur[];
  pageIndex: number;
  pageSize: number;
  length: number;
  pageEvent: PageEvent;

  constructor( 
    private realisateurWSService: RealisateurWSService
    ) { 
    this.dataSource = [];
    this.pageIndex = 0;
    this.pageSize = 5;
    this.length = 0;
  }

  updatePaginator(event?:PageEvent): PageEvent {
    if (event != null) {
      this.pageSize = event.pageSize;
      this.pageIndex = event.pageIndex;
    }
    this.realisateurWSService.getRealisateurs(this.pageSize, this.pageIndex).subscribe((response) => {     
      this.dataSource = [];
      response.data.forEach(element => {
            this.dataSource.push(
              new Realisateur (
                element.id,
                element.dateNaissance,
                element.nom,
                element.prenom
              ));
      });
      this.length = response.total;     
    })
    return event;
  }
  
  ngOnInit(): void {
    this.updatePaginator();
  }
}
