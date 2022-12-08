import { CategoryColor } from './../../modules/notes/interfaces/category-color';
import { Tag } from './../../modules/notes/interfaces/tag';
import { Category } from './../../modules/notes/interfaces/category';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NotesService } from 'src/app/modules/notes/services/notes.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/modules/notes/services/categories.service';
import { TagsService } from 'src/app/modules/notes/services/tags.service';
import { Note } from 'src/app/modules/notes/interfaces/note';
import { CategoriesColorsService } from 'src/app/modules/notes/services/categories-colors.service';

type noteFormGroup = FormGroup<{
  title: FormControl<string>;
  text: FormControl<string>;
  category?: FormControl<Category>;
  tags?: FormControl<Tag[]>;
}>;

type categoryFormGroup = FormGroup<{
  name: FormControl<string>;
  color: FormControl<CategoryColor>;
}>;

type tagFormGroup = FormGroup<{
  name: FormControl<string>;
}>;

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.css'],
})
export class ModalCreateComponent implements OnInit, OnDestroy {
  catrgories = this.categoriesService.categories;
  tags = this.tagsService.tags;
  categoryColors = this.categoriesColorsService.categoryColors;

  formNote = new FormGroup({
    title: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    text: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    category: new FormControl(),
    tags: new FormControl(),
  });

  formCategory = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    color: new FormControl(
      new CategoryColor({
        id: 0,
        name: '',
        light: '',
        dark: '',
      }),
      {
        validators: [Validators.required],
        nonNullable: true,
      }
    ),
  });

  formTag: tagFormGroup = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: number,
    private dialogRef: MatDialogRef<ModalCreateComponent>,
    private notesService: NotesService,
    private categoriesService: CategoriesService,
    private tagsService: TagsService,
    private categoriesColorsService: CategoriesColorsService
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.dialogRef.close(this.data);
  }

  onSubmitNote() {
    if (this.formNote.invalid) return;

    const data = new Note(
      this.formNote.getRawValue().title,
      this.formNote.getRawValue().text,
      this.formNote.getRawValue().category,
      this.formNote.getRawValue().tags
    );

    this.notesService.createNote(data).subscribe({
      complete: () => this.dialogRef.close(),
    });
  }

  onSubmitCategory() {
    console.log(this.formCategory.getRawValue());
    if (this.formCategory.invalid) return;
    const data = new Category(
      this.formCategory.getRawValue().name,
      this.formCategory.getRawValue().color
    );
    this.categoriesService.createCategory(data).subscribe({
      complete: () => this.dialogRef.close(),
    });
  }

  onSubmitTag() {
    console.log(this.formTag.getRawValue());
    if (this.formTag.invalid) return;
    const newTag = {
      id: Math.floor(Math.random() * 1000),
      name: this.formTag.getRawValue().name,
    };
    this.tagsService.createTag(newTag).subscribe({
      complete: () => this.dialogRef.close(),
    });
  }

  // getTagNameById(id?: string) {
  //   console.log(id);

  //   this.tags
  //     .pipe(map((tags) => tags.find((tag) => tag.id === Number(id))))
  //     .subscribe((tag) => {
  //       this.tag = tag?.name;
  //       console.log(this.tag);
  //     });
  // }
}
