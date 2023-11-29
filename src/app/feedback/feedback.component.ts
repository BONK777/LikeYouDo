import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) {}

  selectTime(time: string): void {
    // Получаем текущий объект таска
    // console.log('Selected Time:', time);
    const currentTask: Task = this.dataService.getTask();

    // Обновляем выбранное время в объекте таска
    currentTask.attributes.term = {
      id: 1, // Пример ID для времени ответа (может быть необходимо использовать реальные данные)
      term: time,
    };

    // Сохраняем обновленный объект таска в сервисе данных
    this.dataService.setTask(currentTask);
    console.log('ПРОВЕРКА ТЕРМ-А', this.dataService.getTask());
  }

  ngOnInit() {
  }

}
function uuidv4(): string {
  throw new Error('Function not implemented.');
}

