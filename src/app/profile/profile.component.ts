import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  ngOnInit() {
  }
}
