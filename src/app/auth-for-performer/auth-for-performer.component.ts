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

  constructor(private authService: DataService, private router: Router) { }

  ngOnInit() {
  }

  submitForm() {
    const formData = { name: this.name, contacts: this.link };

    this.authService.registerPerformer(formData).subscribe(
      (response: any) => {
        console.log('Ответ сервера:', response);
        const accessKey = response.accessKey;
        this.authService.setPerformerData(formData);
        this.router.navigate(['/profile']);
      },
      (error: any) => {
        console.error('Ошибка при регистрации клиента:', error);
      }
    );
  }
}