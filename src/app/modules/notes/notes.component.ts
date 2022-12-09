import { Component, OnInit } from '@angular/core';
import { CategoriesColorsService } from './services/categories-colors.service';
import { CategoriesService } from './services/categories.service';
import { TagsService } from './services/tags.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  constructor(
    private categoriesService: CategoriesService,
    private tagsService: TagsService,
    private categoriesColorsService: CategoriesColorsService
  ) {}

  ngOnInit(): void {
    this.categoriesService.fetchCategories().subscribe();

    this.tagsService.fetchTags().subscribe();

    this.categoriesColorsService.fetchCategoryColors().subscribe();
  }
}
