import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-orders-client',
  templateUrl: './orders-client.component.html',
  styleUrls: ['./orders-client.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class OrdersClientComponent implements OnInit {
  clientData: any;
  accKey!: string;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.getClientInfo();
  }

  getClientInfo() {
    const accKey = this.dataService.getClientAccessKey();
    this.dataService.validateClient(accKey).subscribe(
      (response) => {
        this.clientData = response;
      },
      (error) => {
        console.error('Ошибка при получении данных:', error);
      }
    );
  }

  showCandidates(taskId: string) {    
    const task = this.clientData.tasks.find((task: { id: string; }) => task.id === taskId);
    if (task) {
      task.showCandidates = !task.showCandidates;
      if (task.showCandidates) {
        this.dataService.getCandidates(taskId).subscribe(
          (candidates) => {
            task.candidates = candidates;
            console.log(candidates);
            const performerIds = candidates.map((candidate: { performer: any; }) => candidate.performer);
            performerIds.forEach((performerId: string) => {
              this.dataService.getPerformerById(performerId).subscribe(
                (performerInfo) => {
                  task.performerInfo = task.performerInfo || {};
                  task.performerInfo[performerId] = performerInfo;
                  console.log(performerInfo);
                },
                (error) => {
                  console.error('Ошибка при получении данных об исполнителе:', error);
                }
              );
            });
          },
          (error) => {
            console.error('Ошибка при получении кандидатов:', error);
          }
        );
      }
    }
  }

  respondToPerformer(performerId: string, taskId: string) {
    this.dataService.choosePerformer(performerId, taskId).subscribe(
      (response) => {
        console.log('Исполнитель успешно выбран:', response);
        localStorage.setItem('taskId', taskId);
        this.router.navigate(['/chat'], { queryParams: { role: 'client'} });
      },
      (error) => {
        console.error('Ошибка при выборе исполнителя:', error);
      }
    );
  }
}
