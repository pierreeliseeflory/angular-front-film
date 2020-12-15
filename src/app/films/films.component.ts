import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';

import { Film } from './film.model';
import { FilmWSService } from '../film-ws.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent {
  dataSource: MatTableDataSource<Film>;
  pageIndex: number;
  pageSize: number;
  length: number;
  pageEvent: PageEvent;
  category: string;
  order: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'title', 'duration', 'director', 'genre'];

  constructor(
    private filmWSService: FilmWSService,
    ) {
      this.pageIndex = 0;
      this.pageSize = 5;
      this.length = 0;
      this.category = "id";
      this.order = true;

    }
    
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.updatePaginator(null);
    
  }
  
  updatePaginator(event?:PageEvent): PageEvent {
    if (event != null) {
      this.pageSize = event.pageSize;
      this.pageIndex = event.pageIndex;
    }
    this.filmWSService.getFilms(this.pageSize, this.pageIndex, this.category, this.order).subscribe((response) => {     
      // this.dataSource = [];
      var sources : Film[] = [];
      response.data.forEach(element => {
            sources.push(
              new Film(
                element.id,
                element.titre,
                element.duration,
                element.realisateur,
                element.realisateurName,
                element.genre,
                element.genreName
              ));
      });
    this.dataSource = new MatTableDataSource(sources);
    this.dataSource.paginator = this.paginator;
    this.length = response.total;
    })
    return event;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  sorting(cat: string) {
    if (cat === this.category) this.order = !this.order;
    else {
      this.category = cat;
      this.order = true;
    }
      this.updatePaginator(null);   
  }
}
