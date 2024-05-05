import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../model/task.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  taskData: Task | null = null;
  performerData: { name: string, login: string } | null = null;
  clientData: { name: string, login: string } | null = null;


  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSelectedTask().subscribe((selectedTask) => {
      this.taskData = selectedTask;
    });
    this.dataService.performerData$.subscribe((data) => {
      this.performerData = data;
    });
    this.dataService.clientData$.subscribe((data) => {
      this.clientData = data;
    });
  }

  @Input() order: any = {
    title: 'Название ордера',
    createdAt: new Date(),
    performer: {
      name: 'Имя исполнителя',
      login: 'Логин исполнителя'
    },
    client: {
      name: 'Имя заказчика',
      login: 'Логин заказчика'
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
