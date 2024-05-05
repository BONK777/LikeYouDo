import { Component, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Task } from '../model/task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  template: `
  <div class="client-data-container">
    <div class="tasks-container">
      <div class="task-card" (click)="toggleClientInfo()" [@fadeInUp]>
        <div class="task-info">
          <h2>{{ task?.data?.description }}</h2>
          <p><strong>Подкатегория:</strong> {{ task?.data?.subcategory }}</p>
          <p><strong>Срок:</strong> {{ task?.data?.term }}</p>
        
          <div *ngIf="showClientInfoFlag">
            <h3>Информация о клиенте:</h3>
            <p><strong>Имя:</strong> {{ clientInfo?.name }}</p>
            <p><strong>Контакты:</strong> {{ clientInfo?.contacts }}</p>
            <button (click)="respondToTask()">Откликнуться</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [
    `
    .client-data-container {
      color: #fff;
      border-radius: 10px;
      margin-bottom: 20px;
    }

    .tasks-container {
      margin-top: 20px;
    }

    .task-card {
      background-color: #283142;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 20px;
      border-radius: 5px;
      margin-bottom: 10px;
      cursor: pointer; 
      transition: background-color 0.3s ease; 
    }

    .task-card:hover {
      background-color: #34495e;
    }

    h2,h3 {
      color: #3498db;
    }

    .task-info {
      padding: 10px 0;
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
    `
  ],
})
export class TaskComponent {
  @Input() task: any;
  clientInfo: { name: string, contacts: string } | null = null;
  showClientInfoFlag: boolean = false;

  constructor(private router: Router, private dataService: DataService) {}

  toggleClientInfo() {
    this.showClientInfoFlag = !this.showClientInfoFlag;

    // OLD
    // if (this.showClientInfoFlag) {
    //   this.showClientInfoFlag = false;
    // } else {
    //   const clientId = this.task.data.Client; 

    //   this.dataService.getClientInfo(clientId).subscribe(
    //     (clientInfo) => {
    //       console.log('Информация о клиенте:', clientInfo);
    //       this.clientInfo = clientInfo;
    //       this.dataService.setSelectedTask(this.task);
    //       this.showClientInfoFlag = true;
    //     },
    //     (error) => {
    //       console.error('Ошибка при получении информации о клиенте:', error);
    //     }
    //   );
    // }
    
    // NEW
    // if (this.showClientInfoFlag && !this.clientInfo) {
    //   const accKey = this.dataService.getPerformerAccessKey();
    //   this.dataService.validatePerformer(accKey).subscribe(
    //     (response) => {
    //       this.clientInfo = response;
    //     },
    //     (error) => {
    //       console.error('Ошибка при получении данных:', error);
    //     }
    //   );
    // }
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
