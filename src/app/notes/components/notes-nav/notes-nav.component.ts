import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { NotesService } from '../../services/notes.service';
import { TagsService } from '../../services/tags.service';

@Component({
  selector: 'app-notes-nav',
  templateUrl: './notes-nav.component.html',
  styleUrls: ['./notes-nav.component.css'],
})
export class NotesNavComponent implements OnInit {
  categories = this.categoriesService.categories;
  tags = this.tagsService.tags;

  constructor(
    private categoriesService: CategoriesService,
    private tagsService: TagsService,
    private notesService: NotesService
  ) {}

  ngOnInit(): void {}

  getAllNotes() {
    this.notesService.fetchNotes().subscribe();
  }

  getFavoriteNotes() {
    this.notesService.getFavoriteNotes().subscribe();
  }

  getNotesByCategory(id: number) {
    this.notesService.getNotesByCategory(id).subscribe();
  }

  getNotesByTag(id: number) {
    this.notesService.getNotesByTag(id).subscribe();
  }
}
