import { Tag } from './../../interfaces/tag';
import { Category } from './../../interfaces/category';
import { NoteAttrs } from './../../interfaces/note';
import { Component, Input, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { TagsService } from '../../services/tags.service';

@Component({
  selector: 'app-notes-note',
  templateUrl: './notes-note.component.html',
  styleUrls: ['./notes-note.component.css'],
})
export class NotesNoteComponent implements OnInit {
  @Input() note!: NoteAttrs;
  category: Category | undefined;
  tags: Tag[] | [] = [];
  defaultBgColor = 'rgb(203 213 225)';

  constructor(
    private categoriesService: CategoriesService,
    private tagsService: TagsService
  ) {}

  ngOnInit(): void {
    this.categoriesService
      .getCategoryById(this.note.categoryId)
      .subscribe((category) => {
        this.category = category;

        if (category === undefined) {
          this.category = new Category({
            id: 0,
            name: '',
            color: this.defaultBgColor,
          });
        }
      });

    this.tagsService
      .getTagsByIds(this.note.tagsIds)
      .subscribe((tag) => (this.tags = tag));
  }
}
