import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-select-performer',
  templateUrl: './select-performer.component.html',
  styleUrls: ['./select-performer.component.css']
})
export class SelectPerformerComponent implements OnInit {
  tasks: Task[] = [];
  newTask: Task = {} as Task; // Предполагаем, что у вас есть объект newTask

  constructor(private taskService: DataService) {}

  ngOnInit() {
    // Ваш код инициализации компонента
  }

  onSubmitClick() {
    // if (!this.newTask || !this.newTask.attributes || !this.newTask.attributes.description) {
    //   console.error('Некорректные данные объекта Task');
    //   return;
    // }
  
    // this.taskService.createTask(this.newTask).subscribe(
    //   (response) => {
    //     if (Array.isArray(response)) {
    //       this.tasks = response;
    //       console.log('Записано');
    //     } else {
    //       console.error("Неверный формат ответа. Ожидался массив.");
    //     }
    //   },
    //   (error) => {
    //     console.error("Ошибка при получении категорий:", error);
    //   }
    // );
  }
  
}
