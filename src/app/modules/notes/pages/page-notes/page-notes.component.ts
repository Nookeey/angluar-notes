import { Component, Input } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-page-notes',
  templateUrl: './page-notes.component.html',
  styleUrls: ['./page-notes.component.css'],
})
export class PageNotesComponent {
  notes = this.notesService.notes;
  @Input() title: string = 'Notes';

  public myOptions: NgxMasonryOptions = {
    gutter: 20,
    resize: true,
  };

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    console.log(this.title);

    this.notesService.fetchNotes().subscribe({
      error: (err) => console.log(err),
    });
  }
}
