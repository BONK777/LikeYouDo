import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logIn-client',
  templateUrl: './logIn-client.component.html',
  styleUrls: ['./logIn-client.component.css']
})
export class LogInClientComponent implements OnInit {
  public login: string = '';
  public password: string = '';
  public errorMessage: string = '';
  public name: string = '';

  constructor(private authService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  loginClient() {
    const formData = {name: this.name, login: this.login, password: this.password };

    this.authService.loginClient(formData).subscribe(
        (response: any) => {
            console.log('Ответ сервера:', response);
            const accessKey = response;
            this.authService.setClientAccessKey(accessKey); 
            this.authService.setClientData(formData);
            this.router.navigate(['/profile-client']);
        },
        (error: any) => {
            console.error('Ошибка при авторизации:', error);
            this.errorMessage = 'Неправильный логин или пароль';
        }
    );
}

  
}