// task.component.ts
import { Component, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Task } from '../model/task.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-task',
  template: `
    <div class="task-card" (click)="toggleClientInfo()">
      <h2>{{ task?.data?.Description }}</h2>
      <p><strong>Подкатегория:</strong> {{ task?.data?.Subcategory }}</p>
      <p><strong>Формат ответа:</strong> {{ task?.data?.AnswerFormat }}</p>
      <p><strong>Срок:</strong> {{ task?.data?.Term }}</p>

      <div *ngIf="showClientInfoFlag">
        <h3>Информация о клиенте:</h3>
        <p><strong>Имя:</strong> {{ clientInfo?.name }}</p>
        <p><strong>Контакты:</strong> {{ clientInfo?.contacts }}</p>
        <button (click)="respondToTask()">Откликнуться</button>
      </div>
    </div>
  `,
  styles: [`
    .task-card {
      background-color: #283142;
      color: #fff;
      padding: 20px;
      border-radius: 8px;
      margin: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    h2,h3 {
      color: #3498db;
    }

    .task-card button {
      background-color: #3498db;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    
    .task-card button:hover {
      background-color: #2980b9;
    }
  `],
})
export class TaskComponent {
  tasks: any[] = [];
  @Input() task: any;
  clientInfo: { name: string, contacts: string } | null = null;
  showClientInfoFlag: boolean = false;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.dataService.getTasks().subscribe(
      (tasks) => {
        console.log('Полученные задачи с сервера:', tasks);
        this.tasks = tasks.map((task) => task.data);
      },
      (error) => {
        console.error('Ошибка при получении задач:', error);
      }
    );
  }

  toggleClientInfo() {
    if (this.showClientInfoFlag) {
      this.showClientInfoFlag = false;
    } else {
      const clientId = this.task.data.Client;

      this.dataService.getClientInfo(clientId).subscribe(
        (clientInfo) => {
          console.log('Информация о клиенте:', clientInfo);
          this.clientInfo = clientInfo;
          this.dataService.setSelectedTask(this.task);
          this.showClientInfoFlag = true;
        },
        (error) => {
          console.error('Ошибка при получении информации о клиенте:', error);
        }
      );
    }
  }

  respondToTask() {
    const taskId = this.task.id;
  
    this.dataService.respondToTask(taskId).subscribe(
      (response) => {
        console.log('Успешно откликнулись на задачу:', response);
      },
      (error) => {
        console.error('Ошибка при отклике на задачу:', error);
  
        console.error('Ошибка в стеке вызовов:', error.stack);
      }
    );
  }
  
}


