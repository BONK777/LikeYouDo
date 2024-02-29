import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth-for-client',
  templateUrl: './auth-for-client.component.html',
  styleUrls: ['./auth-for-client.component.css']
})
export class AuthForClientComponent implements OnInit {
  public name: string = '';
  public link: string = '';

  constructor(private authService: DataService, private router: Router) { }

  ngOnInit() {
  }

  submitForm() {
    // console.log('name:', this.name);
    // console.log('link:', this.link);

    // if (!this.name || !this.link) {
    //   console.error('name или link не заданы');
    //   return;
    // }

    const formData = { name: this.name, contacts: this.link };

    this.authService.registerClient(formData).subscribe(
      (response: any) => {
        console.log('Ответ сервера:', response);
        const accessKey = response.accessKey;
        this.authService.setAccessKey(accessKey);
        this.router.navigate(['/home']);
      },
      (error: any) => {
        console.error('Ошибка при регистрации клиента:', error);
      }
    );
  }
}
