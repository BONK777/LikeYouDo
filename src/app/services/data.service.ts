// data.service.ts
import { Injectable } from '@angular/core';
import { Task } from '../model/task.model'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  [x: string]: any;
    private taskData: Task = {
        id: 0,
        attributes: {
          description: '',
          term: { id: 0, term: '' },
          answerFormat: { id: 0, format: '' },
          subCategory: { data: { id: 0, attributes: { name: '' } } },
        },
      };

      getTask(): Task {
        return this.taskData;
      }

      setTask(task: Task): void {
        this.taskData = task;
      }
      

      setDescription(description: string): void {
        this.taskData.attributes.description = description;
      }

      setSubCategory(subCategoryId: number, subCategoryName: string): void {
        this.taskData.attributes.subCategory.data.id = subCategoryId;
        this.taskData.attributes.subCategory.data.attributes.name = subCategoryName;
      }

      setAnswerFormat(formatId: number, formatValue: string): void {
        this.taskData.attributes.answerFormat.id = formatId;
        this.taskData.attributes.answerFormat.format = formatValue;
      }

      setTerm(termId: number, termValue: string): void {
        this.taskData.attributes.term.id = termId;
        this.taskData.attributes.term.term = termValue;
      }

}
