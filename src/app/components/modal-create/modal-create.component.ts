import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NotesService } from 'src/app/notes/services/notes.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

type noteFormGroup = FormGroup<{
  title: FormControl<string>;
  text: FormControl<string>;
}>;

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.css'],
})
export class ModalCreateComponent implements OnInit, OnDestroy {
  form: noteFormGroup = new FormGroup({
    title: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    text: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: number,
    private dialogRef: MatDialogRef<ModalCreateComponent>,
    private notesService: NotesService
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.dialogRef.close(this.data);
  }

  onSubmit() {
    console.log(this.form.getRawValue());
    if (this.form.invalid) return;
    const newNote = {
      id: Math.floor(Math.random() * 1000),
      title: this.form.getRawValue().title,
      text: this.form.getRawValue().text,
      data: new Date().toLocaleDateString(),
      favorite: false,
      categoryId: 1,
      tags: ['tag1', 'tag2'],
    };
    this.notesService.createNote(newNote).subscribe({
      next: (note) => {
        console.log(note);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.dialogRef.close();
      },
    });
  }
}
