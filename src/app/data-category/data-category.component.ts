import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../services/custome.interceptor';

@Component({
  selector: 'app-data-category',
  templateUrl: './data-category.component.html',
  styleUrls: ['./data-category.component.css']
})
export class DataCategoryComponent implements OnInit {
  categories: any[] = [];

  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe(
      (response) => {
        if (Array.isArray(response)) {
          this.categories = response;
          console.log('GOOD');
          
        } else {
          console.error("Invalid response format. Expected an array.");
        }
      },
      (error) => {
        console.error("Error fetching categories:", error);
      }
    );
  }

  showSubcategories(categoryId: string) {
    this.categoryService.getSubcategories(categoryId).subscribe(
      (response) => {
        this.router.navigate([`/data-subcategory/${categoryId}`]);
          console.log('GOOD1');

      },
      (error) => {
        console.error("Error fetching subcategories:", error);
      }
    );
  }
}
