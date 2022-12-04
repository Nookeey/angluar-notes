import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NotesService } from 'src/app/notes/services/notes.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/notes/services/categories.service';
import { TagsService } from 'src/app/notes/services/tags.service';
import { Note } from 'src/app/notes/interfaces/note';

type noteFormGroup = FormGroup<{
  title: FormControl<string>;
  text: FormControl<string>;
  categoryId?: FormControl<number>;
  tagsIds?: FormControl<number[]>;
}>;

type categoryFormGroup = FormGroup<{
  name: FormControl<string>;
  color: FormControl<string>;
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

  formNote = new FormGroup({
    title: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    text: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    categoryId: new FormControl(0, {
      validators: [Validators.required],
      nonNullable: true,
    }),
    tagsIds: new FormControl([], {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  formCategory: categoryFormGroup = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    color: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
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
    private tagsService: TagsService
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.dialogRef.close(this.data);
  }

  onSubmitNote() {
    console.log(this.formNote.getRawValue());
    return;
    if (this.formNote.invalid) return;

    const data = new Note(
      this.formNote.getRawValue().title,
      this.formNote.getRawValue().text,
      this.formNote.getRawValue().categoryId,
      this.formNote.getRawValue().tagsIds
    );

    this.notesService.createNote(data).subscribe({
      complete: () => this.dialogRef.close(),
    });
  }

  onSubmitCategory() {
    console.log(this.formCategory.getRawValue());
    if (this.formCategory.invalid) return;
    const newCategory = {
      id: Math.floor(Math.random() * 1000),
      name: this.formCategory.getRawValue().name,
      color: this.formCategory.getRawValue().color,
    };
    this.categoriesService.createCategory(newCategory).subscribe({
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
}
