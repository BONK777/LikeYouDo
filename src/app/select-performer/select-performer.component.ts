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
  newTask: Task = {} as Task; 

  constructor(private taskService: DataService) {}

  ngOnInit() {
  }

  onSubmitClick() {

  }
  
}
