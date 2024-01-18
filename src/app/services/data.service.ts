// data.service.ts
import { Injectable } from '@angular/core';
import { Task } from '../model/task.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class DataService {

  // private apiUrl = 'https://81b4-2a00-1370-8176-1af9-2c1f-9068-3579-4043.ngrok-free.app/api';
  private apiUrl = 'http://localhost:1337/api/';

  constructor(private http: HttpClient) { }

  private headersWithToken(): HttpHeaders {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzAxMTY5NzMxLCJleHAiOjE3MDM3NjE3MzF9.DLHELqfCd0As_pJHKF-dbkzu2zHXJEt_mYu3a1LVlMk';

    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  [x: string]: any;
    private taskData: Task = {
        id: 0,
        attributes: {
          description: '',
          term: { id: 0, term: '' },
          answerFormat: { id: 0, format: '' },
          subCategory: { data: { id: 0, attributes: { name: '' } } },
        },
      };

      getTask(): Task {
        return this.taskData;
      }

      setTask(task: Task): void {
        this.taskData = task;
      }
      
      setDescription(description: string): void {
        this.taskData.attributes.description = description;
      }

      setSubCategory(subCategoryId: number, subCategoryName: string): void {
        this.taskData.attributes.subCategory.data.id = subCategoryId;
        this.taskData.attributes.subCategory.data.attributes.name = subCategoryName;
      }

      setAnswerFormat(formatId: number, formatValue: string): void {
        this.taskData.attributes.answerFormat.id = formatId;
        this.taskData.attributes.answerFormat.format = formatValue;
      }

      setTerm(termId: number, termValue: string): void {
        this.taskData.attributes.term.id = termId;
        this.taskData.attributes.term.term = termValue;
      }

      saveTaskToDatabase(): Observable<Task> {
        const headers = this.headersWithToken();
        console.log('Записанный таск:', this.taskData); // Выводим в консоль записанный таск
        return this.http.post<Task>(`${this.apiUrl}/tasks`, this.taskData, { headers });
      }

}
