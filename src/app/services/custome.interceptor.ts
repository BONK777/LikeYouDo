import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'https://maraton.builtwithdark.com';

  constructor(private http: HttpClient) { }

  private headersWithToken(): HttpHeaders {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzAzMjQyOTg1LCJleHAiOjE3MDU4MzQ5ODV9.MILShKUiKpHi4s195GMTV8ww9XI-YAacaP7WGgfAlNI';
    
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      "ngrok-skip-browser-warning": "69420"
    });
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/categories`);
  } 

  getSubcategories(categoryId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/category?id=${categoryId}`);
  }
}

