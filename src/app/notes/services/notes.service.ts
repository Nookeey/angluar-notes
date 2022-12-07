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
      .pipe(tap((notesAttrs) => this.notes.next(notesAttrs)));
  }

  createNote(data: Note): Observable<Note> {
    return this.http.post<Note>(`${environment.apiUrl}/notes`, data).pipe(
      map((note) => new Note(note.title, note.text, note.category, note.tags)),
      tap((note) => this.notes.next([...this.notes.getValue(), note]))
    );
  }

  deleteNote(id: number): Observable<Note> {
    return this.http.delete<Note>(`${environment.apiUrl}/notes/${id}`).pipe(
      tap((note) => {
        const notes = this.notes.getValue();
        const index = notes.findIndex((note) => note.id === id);
        notes.splice(index, 1);
        this.notes.next(notes);
      })
    );
  }

  setFavorite(noteId: number, isFavorite: boolean): Observable<Note> {
    return this.http
      .patch<Note>(`${environment.apiUrl}/notes/${noteId}`, { isFavorite })
      .pipe(
        tap((note) => {
          console.log(note);
        })
      );
  }

  getFavoriteNotes(): Observable<NoteAttrs[]> {
    return this.http
      .get<NoteAttrs[]>(`${environment.apiUrl}/notes?isFavorite=true`)
      .pipe(tap((notesAttrs) => this.notes.next(notesAttrs)));
  }

  getNotesByCategory(id: number) {
    return this.http
      .get<NoteAttrs[]>(`${environment.apiUrl}/notes?category.id=${id}`)
      .pipe(tap((notesAttrs) => this.notes.next(notesAttrs)));
  }

  getNotesByTag(id: number) {
    return this.http.get<NoteAttrs[]>(`${environment.apiUrl}/notes`).pipe(
      map((notesAttrs) =>
        notesAttrs.filter((note) => {
          if (note.tags) {
            return note.tags.find((tag) => tag.id === id);
          }
          return;
        })
      ),
      tap((notesAttrs) => this.notes.next(notesAttrs))
    );
  }
}
