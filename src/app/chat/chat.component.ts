import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: { text: string }[] = [];
  newMessage: string = '';

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.messages.push({
      text: 'Начался чат с Олегом'
    });
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ text: this.newMessage});
      this.route.queryParams.subscribe((params: Params) => {
        const role = params['role'];
        const taskId = localStorage.getItem('taskId')!;
        console.log('Роль:', role);
        console.log('ID задачи:', taskId);
        console.log('Отправка сообщения:', this.newMessage);
        this.dataService.sendMessage(role, this.newMessage, taskId).subscribe(
          (response: any) => {
            console.log('Сообщение успешно отправлено:', response);
          },
          (error: any) => {
            console.error('Ошибка при отправке сообщения:', error);
          }
        );
      });
    }
  }


  fetchMessages() {
    console.log('Получение сообщений...');
  }
}
