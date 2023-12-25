import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/custome.interceptor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    // this.categoryService.postAuthLocal().subscribe(
    //   (response) => {
    //     console.log('Успешный POST-запрос', response);
    //   },
    //   (error) => {
    //     console.error('Ошибка POST-запроса', error);
    //   }
    // );
  }

}
