import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-data-subCategory',
  templateUrl: './data-subCategory.component.html',
  styleUrls: ['./data-subCategory.component.css']
})
export class DataSubCategoryComponent implements OnInit {
  subcategory: any;
  categoryID: any;
  task: Task = { description: '', subcategory: '', term: '' };

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    this.categoryID = this.route.snapshot.paramMap.get("id");
    this.loadSubcategory(this.categoryID);
  }

  loadSubcategory(categoryId: string) {
    this.dataService.getSubcategories(categoryId).subscribe(
      (response) => {
        this.subcategory = response;
        console.log('GOOD2');
      },
      (error) => {
        console.error("Error fetching subcategory:", error);
      }
    );
  }

selectSubcategory(subcategory: any) {
  this.task.subcategory = subcategory.name;
  this.dataService.setSelectedTask(this.task);
  this.dataService.setSelectedSubcategory(subcategory);
  this.dataService.setSelectedSubcategory(subcategory); 

  console.log('Выбрали:', subcategory);
  console.log('Записали в:', this.task);
  console.log('Обновленный:', this.task);
}
}
