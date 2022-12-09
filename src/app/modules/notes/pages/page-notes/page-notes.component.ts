import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxMasonryOptions } from 'ngx-masonry';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-page-notes',
  templateUrl: './page-notes.component.html',
  styleUrls: ['./page-notes.component.css'],
})
export class PageNotesComponent {
  notes = this.notesService.notes;
  title = this.notesService.title;

  public myOptions: NgxMasonryOptions = {
    gutter: 20,
    resize: true,
  };

  constructor(
    private notesService: NotesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.notesService.fetchNotes().subscribe({
      error: (err) => console.log(err),
    });
  }
}
