// order.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../model/task.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  taskData: Task | null = null; // Инициализация значением по умолчанию

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSelectedTask().subscribe((selectedTask) => {
      this.taskData = selectedTask;
    });
  }

  @Input() order: any = {
    title: 'Название ордера',
    createdAt: new Date(),
    performer: {
      name: 'Имя исполнителя',
      specialization: 'Специализация исполнителя',
      contacts: 'Контакты исполнителя'
    },
    status: 'pending'
  };

  completeOrder(): void {
    console.log('Order completed');
  }

  cancelOrder(): void {
    console.log('Order cancelled');
  }
}
