// task.component.ts
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-task',
  template: `
    <div class="task-card">
      <h2>{{ taskData?.attributes?.description }}</h2>
      <p><strong>Subcategory:</strong> {{ taskData?.attributes?.subCategory?.data?.attributes?.name }}</p>
      <p><strong>Answer Format:</strong> {{ taskData?.attributes?.answerFormat?.format }}</p>
      <p><strong>Term:</strong> {{ taskData?.attributes?.term?.term }}</p>
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
  taskData: Task;

  constructor(private dataService: DataService) {
    this.taskData = this.dataService.getTask();
  }
}
