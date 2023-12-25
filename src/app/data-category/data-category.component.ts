import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/custome.interceptor';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-data-category',
  templateUrl: './data-category.component.html',
  styleUrls: ['./data-category.component.css']
})
export class DataCategoryComponent implements OnInit {

  categories: any[] = [];
  

  constructor(private categoryService: CategoryService, private dataService: DataService) {}

  // async fetch() {
  //   const response = await fetch(' https://e160-95-64-216-26.ngrok-free.app/api/categories?populate=*', {
  //     method: 'GET',
  //     headers: {
  //       "ngrok-skip-browser-warning": "69420"
  //     }
  //   });
  //   const categories = await response.json();
  //   console.log(categories);
  //   return categories
  // }

  ngOnInit() {
    this.categoryService.getCategories().subscribe((response) => {
      console.log(response);
      this.categories = response.data;
    });

    // this.fetch()

  }

  

  

}
