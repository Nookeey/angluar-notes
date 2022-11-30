import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categories = new BehaviorSubject<Category[]>([]);

  constructor(private http: HttpClient) {}

  fetchCategories(): Observable<Category[]> {
    return this.http
      .get<Category[]>(`${environment.apiUrl}/categories`)
      .pipe(
        tap((categories) =>
          this.categories.next([...this.categories.getValue(), ...categories])
        )
      );
  }

  createCategory(data: Category): Observable<Category> {
    return this.http
      .post<Category>(`${environment.apiUrl}/categories`, data)
      .pipe(
        tap((category) =>
          this.categories.next([...this.categories.getValue(), category])
        )
      );
  }

  getCategoryById(id: number) {
    return this.categories.pipe(
      map((categories) => categories.find((category) => category.id === id))
    );
  }
}
