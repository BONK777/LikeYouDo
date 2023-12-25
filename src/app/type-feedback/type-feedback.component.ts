import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Task } from '../model/task.model';


@Component({
  selector: 'app-type-feedback',
  templateUrl: './type-feedback.component.html',
  styleUrls: ['./type-feedback.component.css']
})
export class TypeFeedbackComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
  }

  selectAnswerFormat(answerFormat: string): void {
    // Получаем текущий объект таска
    const currentTask: Task = this.dataService.getTask();

    // Добавляем выбранный формат ответа в объект таска
    currentTask.attributes.answerFormat = {
      id: 1, // Пример ID для формата ответа (может быть необходимо использовать реальные данные)
      format: answerFormat,
    };

    // Сохраняем обновленный объект таска в сервисе данных
    this.dataService.setTask(currentTask);
    console.log('ПРОВЕРКА answer-format', this.dataService.getTask());
    console.log('КОНЕЧНЫЙ ТАСК', this.dataService.getTask());

  }

  saveAndCheckTask(): void {
    // Вызываем метод сохранения в базу данных
    this.dataService.saveTaskToDatabase().subscribe(
      (response) => {
        console.log('Task saved successfully:', response);

        // Проверяем, что объект сохранился, например, выводим его в консоль
        const savedTask = this.dataService.getTask();
        console.log('Saved Task:', savedTask);
      },
      (error) => {
        console.error('Error saving task:', error);
        // Обработка ошибки при сохранении
      }
    );
  }

}
