import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Task } from '../model/task.model';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  constructor(private dataService: DataService, private router: Router) { }

  onSelectTerm(term: string) {
    this.dataService.getSelectedTask()
      .pipe(take(1))
      .subscribe(currentTask => {
        if (currentTask !== null && currentTask !== undefined) {
          currentTask.term = term;
          this.dataService.setSelectedTask(currentTask);
          this.router.navigate(['/type-feedback']);
        }
      });
  }
}
