import { NotesService } from './../../services/notes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  notes = this.notesService.notes;

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.notesService.getNotes().subscribe({
      error: (err) => console.log(err),
    });
  }
}
