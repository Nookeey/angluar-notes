import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tag } from '../interfaces/tag';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  tags = new BehaviorSubject<Tag[]>([]);

  constructor(private http: HttpClient) {}

  fetchTags(): Observable<Tag[]> {
    return this.http
      .get<Tag[]>(`${environment.apiUrl}/tags`)
      .pipe(tap((tags) => this.tags.next([...this.tags.getValue(), ...tags])));
  }

  createTag(data: Tag): Observable<Tag> {
    return this.http
      .post<Tag>(`${environment.apiUrl}/tags`, data)
      .pipe(tap((tag) => this.tags.next([...this.tags.getValue(), tag])));
  }

  getTagsByIds(ids: number[]): Observable<Tag[]> {
    return this.tags.pipe(
      map((tags) => tags.filter((tag) => ids.includes(tag.id)))
    );
  }
}
