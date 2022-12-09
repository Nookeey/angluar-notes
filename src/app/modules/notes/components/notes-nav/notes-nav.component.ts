import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../../interfaces/category';
import { Tag } from '../../interfaces/tag';
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

  getNotesByCategory(category: Category) {
    this.notesService.getNotesByCategory(category).subscribe();
  }

  getNotesByTag(tag: Tag) {
    this.notesService.getNotesByTag(tag).subscribe();
  }
}
