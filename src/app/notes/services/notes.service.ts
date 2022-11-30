import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Note, NoteAttrs } from '../interfaces/note';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  notes = new BehaviorSubject<NoteAttrs[]>([]);

  constructor(private http: HttpClient) {}

  fetchNotes(): Observable<NoteAttrs[]> {
    return this.http
      .get<NoteAttrs[]>(`${environment.apiUrl}/notes`)
      .pipe(
        tap((notesAttrs) =>
          this.notes.next([...this.notes.getValue(), ...notesAttrs])
        )
      );
  }

  createNote(data: NoteAttrs): Observable<Note> {
    return this.http.post<Note>(`${environment.apiUrl}/notes`, data).pipe(
      map((noteAttrs) => new Note(noteAttrs)),
      tap((note) => this.notes.next([...this.notes.getValue(), note]))
    );
  }
}
