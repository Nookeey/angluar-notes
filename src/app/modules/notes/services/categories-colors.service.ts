import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CategoryColor } from './../interfaces/category-color';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesColorsService {
  categoryColors = new BehaviorSubject<CategoryColor[]>([]);

  constructor(private http: HttpClient) {}

  fetchCategoryColors(): Observable<CategoryColor[]> {
    return this.http
      .get<CategoryColor[]>(`${environment.apiUrl}/category-colors`)
      .pipe(
        tap((categoryColors) =>
          this.categoryColors.next([
            ...this.categoryColors.getValue(),
            ...categoryColors,
          ])
        )
      );
  }
}
