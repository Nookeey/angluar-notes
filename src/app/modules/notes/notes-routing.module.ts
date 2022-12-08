import { NotesComponent } from './notes.component';
import { PageCreateComponent } from './pages/page-create/page-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotesComponent } from './pages/page-notes/page-notes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'notes',
    pathMatch: 'full',
  },
  {
    path: 'notes',
    component: NotesComponent,
    children: [
      {
        path: '',
        component: PageNotesComponent,
        pathMatch: 'full',
      },
      {
        path: 'create',
        component: PageCreateComponent,
      },
    ],
  },
  {
    path: 'notes/create',
    component: PageCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
