import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'http://localhost:1337/api/';

  constructor(private http: HttpClient) { }

  // private headersWithToken(): HttpHeaders {
  //   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzAxMTY5NzMxLCJleHAiOjE3MDM3NjE3MzF9.DLHELqfCd0As_pJHKF-dbkzu2zHXJEt_mYu3a1LVlMk';

  //   return new HttpHeaders({
  //     Authorization: `Bearer ${token}`,
  //   });
  // }

  getCategories(): Observable<any> {
    // const headers = this.headersWithToken();
    return this.http.get(`${this.apiUrl}categories`, { headers });
  } // категории

  getSubCategories(categoryId?: number): any[] {
    // const headers = this.headersWithToken();
    const url = `${this.apiUrl}sub-categories?populate=*`;
    const json = this.http.get<any>(url, { headers });
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
  
  
  // подкатегории
}

