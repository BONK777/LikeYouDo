// task.component.ts
import { Component, Input  } from '@angular/core';
import { DataService } from '../services/data.service';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-task',
  template: `
  <div class="task-card">
      <h2>{{ task?.data?.Description }}</h2>
      <p><strong>Subcategory:</strong> {{ task?.data?.Subcategory?.data?.attributes?.name }}</p>
      <p><strong>Answer Format:</strong> {{ task?.data?.AnswerFormat }}</p>
      <p><strong>Term:</strong> {{ task?.data?.Term }}</p>
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

    h2 {
      color: #3498db;
    }
  `],
})
export class TaskComponent {
  tasks: any[] = [];
  @Input() task: any;


  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.dataService.getTasks().subscribe(
      (tasks) => {
        console.log('Полученные задачи с сервера:', tasks);
        this.tasks = tasks.map(task => task.data);
      },
      (error) => {
        console.error('Ошибка при получении задач:', error);
      }
    );
  }
}
