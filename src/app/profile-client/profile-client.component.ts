import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.component.html',
  styleUrls: ['./profile-client.component.css']
})
export class ProfileClientComponent implements OnInit {

  clientData: { name: string, login: string } | null = null;

  constructor(private authService: DataService) { }

  ngOnInit() {
    this.authService.clientData$.subscribe((data) => {
      this.clientData = data; 
    });
  }
}
