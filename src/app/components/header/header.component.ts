import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotesService } from 'src/app/notes/services/notes.service';
import { ModalCreateComponent } from '../modal-create/modal-create.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog, private notesService: NotesService) {}

  ngOnInit(): void {}

  openModal() {
    let dialogRef = this.dialog.open(ModalCreateComponent, {
      data: 10,
      disableClose: false,
      hasBackdrop: true,
    });

    dialogRef.afterClosed();
  }

  getAllNotes() {
    this.notesService.fetchNotes().subscribe();
  }
}
