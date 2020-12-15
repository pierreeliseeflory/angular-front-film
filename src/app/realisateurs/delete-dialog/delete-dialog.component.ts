import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {
  
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  constructor() { 
  }

  ngOnInit(): void {
  }

  delete() {
    this.onDelete.emit();
  }

}
