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
  @Output() title = new EventEmitter();

  constructor(
    private categoriesService: CategoriesService,
    private tagsService: TagsService,
    private notesService: NotesService
  ) {}

  ngOnInit(): void {}

  getAllNotes() {
    this.title.emit('Notes');
    this.notesService.fetchNotes().subscribe();
  }

  getFavoriteNotes() {
    this.title.emit('Favorite');
    this.notesService.getFavoriteNotes().subscribe();
  }

  getNotesByCategory(category: Category) {
    this.title.emit(category.name);
    this.notesService.getNotesByCategory(category.id).subscribe();
  }

  getNotesByTag(tag: Tag) {
    this.title.emit(`#${tag.name}`);
    this.notesService.getNotesByTag(tag.id).subscribe();
  }
}
