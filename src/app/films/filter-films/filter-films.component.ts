import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import { map, startWith} from 'rxjs/operators';
import { FilmWSService } from 'src/app/film-ws.service';
import { Router } from '@angular/router';


export interface Filter {
  id: string;
  titre: string;
}


@Component({
  selector: 'app-filter-films',
  templateUrl: './filter-films.component.html',
  styleUrls: ['./filter-films.component.css']
})
export class FilterFilmsComponent implements OnInit {
  myControl = new FormControl();
  options: any[];
  filteredOptions: Observable<Filter[]>;

  constructor(
    private filmWSService: FilmWSService,
    private router: Router
  ) {
    this.options = [];
    this.myControl = new FormControl('');
   }

  ngOnInit() {
    this.getAllFilms();    
    
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(titre => titre ? this._filter(titre) : this.options.slice())
      );  
      
      this.myControl
        .valueChanges
        .pipe()
        .subscribe((elt: any) => {
          if (elt.id != undefined)  this.router.navigateByUrl('film?id=' + elt.id);
        });
  }
      

  displayFn(user: Filter): string {
    return user && user.titre ? user.titre : '';
  }

  private _filter(titre: string): Filter[] {      
    const filterValue = titre.toLowerCase();

    return this.options.filter(option => option.titre.toLowerCase().indexOf(filterValue)  !== -1);
  }

  getAllFilms() {
    this.filmWSService.getFilms(-1, 0, "id", true).subscribe(res => {
      res.data.forEach(element => {
        this.options.push(
          {
            "id": element.id.toString(),
            "titre": element.titre
          }
        )
      })
    })
  }
}
