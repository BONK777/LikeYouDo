import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logIn-performer',
  templateUrl: './logIn-performer.component.html',
  styleUrls: ['./logIn-performer.component.css']
})
export class LogInPerformerComponent implements OnInit {
  public login: string = '';
  public name: string = '';
  public password: string = '';
  public errorMessage: string = '';

  constructor(private authService: DataService, private router: Router) { }


  ngOnInit() {
  } 

  loginPerformer() {
    const formData = {name: this.name, login: this.login, password: this.password };

    this.authService.loginPerformer(formData).subscribe(
      (response: any) => {
        console.log('Ответ сервера:', response);
        const accessKey = response;
        this.authService.setPerformerAccessKey(accessKey);
        this.authService.setPerformerData(formData);
        this.router.navigate(['/profile']);        
      },
      (error: any) => {
        console.error('Ошибка при авторизации:', error);
        this.errorMessage = 'Неправильный логин или пароль';
      }
    );
  }

}
