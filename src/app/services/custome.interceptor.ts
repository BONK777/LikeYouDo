import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'http://localhost:1337/api/';
  // private apiUrl = 'https://81b4-2a00-1370-8176-1af9-2c1f-9068-3579-4043.ngrok-free.app/api/';

  constructor(private http: HttpClient) { }

  private headersWithToken(): HttpHeaders {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzAzMjQyOTg1LCJleHAiOjE3MDU4MzQ5ODV9.MILShKUiKpHi4s195GMTV8ww9XI-YAacaP7WGgfAlNI';
    
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      "ngrok-skip-browser-warning": "69420"
    });
  }
  // private headersWithToken(): HttpHeaders {
  //   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzAxMTY5NzMxLCJleHAiOjE3MDM3NjE3MzF9.DLHELqfCd0As_pJHKF-dbkzu2zHXJEt_mYu3a1LVlMk';

  //   return new HttpHeaders({
  //     Authorization: `Bearer ${token}`,
  //   });
  // }

  getCategories(): Observable<any> {
    // const headers = this.headersWithToken();
    return this.http.get(`${this.apiUrl}categories`);
  } // категории

  getSubCategories(categoryId?: number): any[] {
    // const headers = this.headersWithToken();
    const url = `${this.apiUrl}sub-categories?populate=*`;
    const json = this.http.get<any>(url);
    const resItems: any = []
    json.pipe(map((items: any) => {
      console.log(items.data);
      for (const item of items.data) {
        console.log(item);
        
        if (item.attributes.category.data.id == categoryId) {
          resItems.push(item)
        }
      }
      return resItems
    }
    )).subscribe()
    console.log(resItems);
    return resItems
  }

  postAuthLocal(): Observable<any> {
    const headers = this.headersWithToken();

    const url = `${this.apiUrl}auth/local`;

    const requestBody = {};

    return this.http.post(url, requestBody, { headers });
  }
  
  // подкатегории
}

