import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/custome.interceptor';
import { DataService } from '../services/data.service';
import {Task} from '../model/task.model'


@Component({
  selector: 'app-data-subCategory',
  templateUrl: './data-subCategory.component.html',
  styleUrls: ['./data-subCategory.component.css']
})
export class DataSubCategoryComponent implements OnInit {

  subCategories: any[] = [];
  categoryId!: number;
  subCategoryId!: number;
  @Input() subCategory: any;


  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.categoryId = this.route.snapshot.params['categoryId'];
    this.subCategories = this.categoryService.getSubCategories(this.categoryId)
    console.log(this.subCategories);
  }

  selectSubcategory(subCategory: any): void {
    // Получаем текущий объект таска
    const currentTask: Task = this.dataService.getTask();

    // Проверяем, есть ли уже подкатегория в объекте таска
    if (!currentTask.attributes.subCategory) {
      currentTask.attributes.subCategory = {
        data: {
          id: subCategory.id,
          attributes: {
            name: subCategory.attributes.name,
          },
        },
      };
    } else {
      // Если уже есть, обновляем ее значения
      currentTask.attributes.subCategory.data.id = subCategory.id;
      currentTask.attributes.subCategory.data.attributes.name = subCategory.attributes.name;
    }

    // Сохраняем обновленный объект таска в сервисе данных
    this.dataService.setTask(currentTask);
    console.log('Current Task:', this.dataService.getTask());
  }

}
