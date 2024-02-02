import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Pusher from 'pusher-js';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  username = 'username';
  message = '';
  messages: any[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    Pusher.logToConsole = true;

    const pusher = new Pusher('8a8b6e35a82976df12b4', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', (data: any) => {
      this.messages.push(data);
    });
  }
  
  submit(): void {
    this.http.post('http://localhost:8000/api/messages', {
      username: this.username,
      message: this.message
    }).subscribe(() => this.message = '');
  }

  updateMessage(event: Event): void {
    this.message = (event.target as HTMLInputElement).value;
  }
}