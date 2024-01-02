import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AddNewComponent } from './add-new/add-new.component';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  constructor(
    private modalService: NzModalService,
    private employeeService: EmployeeService,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (val) => {
        this.listOfData = val;
      },
      error: (err) => {
        this.notification.create(
          'error',
          'Error',
          'Error while getting the data'
        );
      },
    });
  }

  listOfData: any = [];

  addNewEmployee() {
    this.modalService.create({
      nzContent: AddNewComponent,
      nzWidth: '600px',
      nzFooter: null,
      nzCentered: true,
    });
  }
}
