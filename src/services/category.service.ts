import { Injectable } from '@angular/core';
import { CategoryApiService } from './api.category.service';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private apiService: CategoryApiService) {}

  getAllCategories(): Observable<Category[]> {
    return this.apiService.getAllCategories();
  }

  getCategoryById(id: number): Observable<Category> {
    return this.apiService.getCategoryById(id);
  }

  createCategory(category: Category): Observable<Category> {
    return this.apiService.createCategory(category);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.apiService.updateCategory(id, category);
  }

  deleteCategory(id: number): Observable<void> {
    return this.apiService.deleteCategory(id);
  }
}
