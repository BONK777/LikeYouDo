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

  ngOnInit() {
    this.categoryService.getCategories().subscribe((response) => {
      console.log(response);
      this.categories = response.data;
    });
  }
}
