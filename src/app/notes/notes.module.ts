import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './components/notes/notes.component';
import { NotesNoteComponent } from './components/notes-note/notes-note.component';
import { NotesNavComponent } from './components/notes-nav/notes-nav.component';
import { NotesModalCreateComponent } from './components/notes-modal-create/notes-modal-create.component';

@NgModule({
  declarations: [
    NotesComponent,
    NotesNoteComponent,
    NotesNavComponent,
    NotesModalCreateComponent,
  ],
  imports: [CommonModule, NotesRoutingModule],
})
export class NotesModule {}
