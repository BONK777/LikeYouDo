// data.service.ts
import { Injectable } from '@angular/core';
import { Task } from '../model/task.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class DataService {
  loadSubcategories(arg0: string) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'https://maraton.builtwithdark.com';

  constructor(private http: HttpClient) { }

    private selectedTaskSubject = new BehaviorSubject<Task | null>(null);
    public selectedTask$ = this.selectedTaskSubject.asObservable();

    private performerDataSubject = new BehaviorSubject<{ name: string, contacts: string } | null>(null);
    performerData$ = this.performerDataSubject.asObservable();

    private clientDataSubject = new BehaviorSubject<{ name: string, contacts: string } | null>(null);
    public clientData$ = this.clientDataSubject.asObservable();

    private selectedSubcategorySubject = new BehaviorSubject<any | null>(null);
    public selectedSubcategory$ = this.selectedSubcategorySubject.asObservable();

    private clientAccessKey: string = '';
    private performerAccessKey: string = '';

    private selectedSubcategory: any | null = null;

    private selectedTermSource = new BehaviorSubject<string | null>(null);

    private selectedTermSubject = new BehaviorSubject<string | null>(null);
    selectedTerm$ = this.selectedTermSource.asObservable();

    private selectedTypeSubject = new BehaviorSubject<string | null>(null);
    selectedType$ = this.selectedTypeSubject.asObservable();

      setSelectedType(type: string) {
        this.selectedTypeSubject.next(type);
      }

      setSelectedTerm(term: string) {
        this.selectedTermSubject.next(term);
      }

      setSelectedSubcategory(subcategory: any) {
        this.selectedSubcategory = subcategory;
      }

      getSelectedSubcategory(): any | null {
        return this.selectedSubcategory;
      }

      registerClient(data: {name: string, contacts: string }): Observable<any> {
        console.log('Данные перед отправкой:', data);
        return this.http.post(`${this.apiUrl}/client`, data);
      }
    
      setPerformerData(data: { name: string, contacts: string }) {
        this.performerDataSubject.next(data);
      } 

      registerPerformer(data: { name: string, contacts: string }): Observable<any> {
        console.log('Данные перед отправкой:', data);
        return this.http.post(`${this.apiUrl}/performer`, data);
      }

      getCategories(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/categories`);
      }
    
      getSubcategories(categoryId: string): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/category?id=${categoryId}`);
      }

      setSelectedTask(task: Task) {
        this.selectedTaskSubject.next(task);
      }
    
      getSelectedTask(): Observable<Task | null> {
        return this.selectedTask$;
      }

      setClientAccessKey(key: string): void {
        this.clientAccessKey = key;
      }

      getClientAccessKey(): string {
        return this.clientAccessKey;
      }

      setPerformerAccessKey(accessKey: string): void {
        console.log('Установлен токен:', accessKey);
        this.performerAccessKey = accessKey;
      }
      

      getPerformerAccessKey(): string {
        const key = this.performerAccessKey;
        if (!key) {
          console.error('Токен авторизованного пользователя отсутствует.');
        }
        console.log('Токен авторизованного пользователя:', key);
        return key;
      }      
      

      saveTaskToDatabase(task: Task): Observable<Task> {
        const authToken = this.getClientAccessKey();
        // const authToken = "gUIop2-Ze7Q7l-mmIvXe";

        const headers = new HttpHeaders().set('Authorization', authToken);

        const options = { headers: headers };

        console.log('отправляем:', task);

        return this.http.post<Task>(`${this.apiUrl}/task`, task, options);
      }

      getTasks(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/tasks`);
      }

      getClientInfo(clientId: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/client?id=${clientId}`);
      }

      respondToTask(taskId: string): Observable<any> {
        const authToken = this.getPerformerAccessKey();
      
        const headers = new HttpHeaders().set('Authorization', authToken);
        const options = { headers: headers };
        const requestBody = { "taskId": taskId };
        console.log('токен авторизованного пользователя:', authToken);
      
        return this.http.post<any>(`${this.apiUrl}/performer/task`, requestBody, options);
      }
      
    }
