import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-for-performer',
  templateUrl: './auth-for-performer.component.html',
  styleUrls: ['./auth-for-performer.component.css']
})
export class AuthForPerformerComponent implements OnInit {

  public name: string = '';
  public link: string = '';
  public login: string = '';
  public password: string = '';
  public registrationResponse: any;  // Добавленное свойство для сохранения ответа сервера

  constructor(private authService: DataService, private router: Router) { }

  ngOnInit() {
  }

  submitForm() {
    const formData = { name: this.name, login: this.login, password: this.password };
  
    this.authService.registerPerformer(formData).subscribe(
      (response: any) => {
        console.log('Ответ сервера:', response);
        const receivedToken = response
        console.log('Полученный токен:', receivedToken);
        this.authService.setPerformerAccessKey(receivedToken);
        this.authService.setPerformerData(formData);
        this.router.navigate(['/profile']);
      },
      (error: any) => {
        console.error('Ошибка при регистрации клиента:', error);
      }
    );
  }
  
}
