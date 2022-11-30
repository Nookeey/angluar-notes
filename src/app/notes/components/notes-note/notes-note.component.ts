import { NoteAttrs } from './../../interfaces/note';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-note',
  templateUrl: './notes-note.component.html',
  styleUrls: ['./notes-note.component.css'],
})
export class NotesNoteComponent implements OnInit {
  @Input() note!: NoteAttrs;

  constructor() {}

  ngOnInit(): void {}
}
