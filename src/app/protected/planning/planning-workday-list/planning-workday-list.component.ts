import { Component, OnInit } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'al-planning-workday-list',
  templateUrl: './planning-workday-list.component.html',
  styles: [
  ]
})
export class PlanningWorkdayListComponent implements OnInit {

  workdays$: Observable<{ dueDate: string, doneTasks: number, remainingTasks: number }[]>;
  workdays: { dueDate: string, doneTasks: number, remainingTasks: number }[];

  ngOnInit(): void {
    this.workdays = [
      { dueDate: 'Lundi', doneTasks: 1, remainingTasks: 3 },
      { dueDate: 'Mardi', doneTasks: 0, remainingTasks: 1 },
      { dueDate: 'Mercredi', doneTasks: 0, remainingTasks: 1 }
    ];

    this.workdays$ = of(this.workdays).pipe(delay(1000));
  }

  onWorkdayRemoved(dueDate: string) {
    this.workdays = this.workdays.filter((workday) => !dueDate.includes(workday.dueDate));
    this.workdays$ = of(this.workdays).pipe(delay(1000));
  }

}
