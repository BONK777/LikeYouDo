import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  description: string = '';

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
  }

  submitForm(): void {
    // Вызываем метод сервиса для сохранения данных
    this.dataService.setDescription(this.description);
    console.log('Final Task Object:', this.dataService.getTask());

    // Можно добавить другие действия или перенаправление, если необходимо
  }
}
