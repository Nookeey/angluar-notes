import { Tag } from './../../interfaces/tag';
import { Category } from './../../interfaces/category';
import { NoteAttrs } from './../../interfaces/note';
import { Component, Input, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { TagsService } from '../../services/tags.service';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-notes-note',
  templateUrl: './notes-note.component.html',
  styleUrls: ['./notes-note.component.css'],
})
export class NotesNoteComponent implements OnInit {
  @Input() note!: NoteAttrs;
  defaultBgColor = 'rgb(203 213 225)';

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {}

  setFavorite(id: number): void {
    this.note.isFavorite = !this.note.isFavorite;
    this.notesService.setFavorite(id, this.note.isFavorite).subscribe();
  }

  deleteNote(id: number): void {
    this.notesService.deleteNote(id).subscribe();
  }
}
