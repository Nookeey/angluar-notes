import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesComponent } from './notes.component';
import { NotesRoutingModule } from './notes-routing.module';
import { NotesNoteComponent } from './components/notes-note/notes-note.component';
import { NotesNavComponent } from './components/notes-nav/notes-nav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxMasonryModule } from 'ngx-masonry';
import { MatMenuModule } from '@angular/material/menu';
import { PageNotesComponent } from './pages/page-notes/page-notes.component';
import { PageCreateComponent } from './pages/page-create/page-create.component';

@NgModule({
  declarations: [
    NotesComponent,
    NotesNoteComponent,
    NotesNavComponent,
    PageNotesComponent,
    PageCreateComponent,
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
