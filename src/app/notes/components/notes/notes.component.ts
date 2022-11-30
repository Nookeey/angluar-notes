import { NotesService } from './../../services/notes.service';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { TagsService } from '../../services/tags.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  notes = this.notesService.notes;

  constructor(
    private notesService: NotesService,
    private categoriesService: CategoriesService,
    private tagsService: TagsService
  ) {}

  ngOnInit(): void {
    this.categoriesService.fetchCategories().subscribe();

    this.tagsService.fetchTags().subscribe();

    this.notesService.fetchNotes().subscribe({
      error: (err) => console.log(err),
    });
  }
}
