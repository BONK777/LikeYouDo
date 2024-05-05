import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-type-feedback',
  templateUrl: './type-feedback.component.html',
  styleUrls: ['./type-feedback.component.css']
})
export class TypeFeedbackComponent {
  constructor(private dataService: DataService, private router: Router) {}

//   onSelectType(type: string) {
//     this.dataService.getSelectedTask().subscribe((currentTask) => {
//       if (currentTask) {
//         if (currentTask.answerFormat !== type) {
//           currentTask.answerFormat = type;
  
//           console.log('Обновленный Task (после выбора типа):', currentTask);
  
//           this.dataService.saveTaskToDatabase(currentTask).subscribe(
//             (savedTask) => {
//               console.log('Задача успешно сохранена:', savedTask);
//             },
//             (error) => {
//               console.error('Ошибка при сохранении задачи:', error);
//             }
//           );
//           this.router.navigate(['/profile']);
//         }
//       } else {
//         console.warn('Текущая задача не определена');
//       }
//     });
// }

}
