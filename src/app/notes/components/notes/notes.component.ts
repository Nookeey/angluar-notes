import { NotesService } from './../../services/notes.service';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { TagsService } from '../../services/tags.service';
import { CategoriesColorsService } from '../../services/categories-colors.service';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  notes = this.notesService.notes;
  title = 'Notes';

  public myOptions: NgxMasonryOptions = {
    gutter: 20,
    resize: true,
  };

  constructor(
    private notesService: NotesService,
    private categoriesService: CategoriesService,
    private tagsService: TagsService,
    private categoriesColorsService: CategoriesColorsService
  ) {}

  ngOnInit(): void {
    this.categoriesService.fetchCategories().subscribe();

    this.tagsService.fetchTags().subscribe();

    this.notesService.fetchNotes().subscribe({
      error: (err) => console.log(err),
    });

    this.categoriesColorsService.fetchCategoryColors().subscribe();
  }

  setTitle(event: string) {
    this.title = event;
  }
}
