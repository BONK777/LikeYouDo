import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  constructor(private dataService: DataService, private router: Router) { }

  onSelectTerm(term: string) {
    this.dataService.getSelectedTask().subscribe((currentTask) => {
      if (currentTask) {
        if (currentTask.term !== term) {
          currentTask.term = term;
          console.log('Обновленный Task (после выбора термина):', currentTask);
          this.dataService.saveTaskToDatabase(currentTask).subscribe(
            (savedTask) => {
              console.log('Задача успешно сохранена:', savedTask);
            },
            (error) => {
              console.error('Ошибка при сохранении задачи:', error);
            }
          );
          this.router.navigate(['/profile-client']);
        }
      } else {
        console.warn('Текущая задача не определена');
      }
    });
  }
}
