// question.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../model/task.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  task: Task = { description: '', subcategory: '', term: '' };

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    const savedSubcategory = this.dataService.getSelectedSubcategory();
    if (savedSubcategory) {
      this.task.subcategory = savedSubcategory.name;
    }
  }

  onSubmit() {
    this.dataService.setSelectedSubcategory(null);
    this.dataService.setSelectedTask(this.task);
    this.router.navigate(['/feedback']);

    console.log('Обновленная задача:', this.task);
  }
}
