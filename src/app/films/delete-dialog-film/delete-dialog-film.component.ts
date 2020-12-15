import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-dialog-film',
  templateUrl: './delete-dialog-film.component.html',
  styleUrls: ['./delete-dialog-film.component.css']
})
export class DeleteDialogFilmComponent implements OnInit {

  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  delete() {
    this.onDelete.emit();
  }
}
