import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RealisateurWSService } from 'src/app/realisateur-ws.service';
import { map, startWith} from 'rxjs/operators';


export interface Filter {
  id: string;
  titre: string;
}

@Component({
  selector: 'app-filter-realisateurs',
  templateUrl: './filter-realisateurs.component.html',
  styleUrls: ['./filter-realisateurs.component.css']
})
export class FilterRealisateursComponent implements OnInit {
  myControl = new FormControl();
  options: any[];
  filteredOptions: Observable<Filter[]>;

  constructor(
    private realisateurWSService: RealisateurWSService,
    private router: Router
  ) {
    this.options = [];
    this.myControl = new FormControl('');
   }

  ngOnInit() {
    this.getAllRealisateurs();    
    
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
          if (elt.id != undefined)  this.router.navigateByUrl('realisateur?id=' + elt.id);
        });
  }
      

  displayFn(user: Filter): string {
    return user && user.titre ? user.titre : '';
  }

  private _filter(titre: string): Filter[] {      
    const filterValue = titre.toLowerCase();

    return this.options.filter(option =>  option.titre.toLowerCase().indexOf(filterValue) !== -1);
  }

  getAllRealisateurs() {
    this.realisateurWSService.getRealisateurs(-1, 0).subscribe(response => {
      response.data.forEach(element => {
        this.options.push(
          {
            "id": element.id.toString(),
            "titre": element.prenom + ' ' + element.nom
          }
        )
      })
    })
  }
}
