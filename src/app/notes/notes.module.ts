import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './components/notes/notes.component';
import { NotesNoteComponent } from './components/notes-note/notes-note.component';
import { NotesNavComponent } from './components/notes-nav/notes-nav.component';
import { NotesModalCreateComponent } from './components/notes-modal-create/notes-modal-create.component';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxMasonryModule } from 'ngx-masonry';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    NotesComponent,
    NotesNoteComponent,
    NotesNavComponent,
    NotesModalCreateComponent,
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    MatIconModule,
    MatExpansionModule,
    NgxMasonryModule,
    MatMenuModule,
  ],
})
export class NotesModule {}
