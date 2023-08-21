import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddNewComponent } from './add-new/add-new.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor(private modalService: NzModalService) {}

  listOfData = [
    {
      id: '1',
      firstName: 'Mohammed',
      lastName: 'Arshath',
      email: 'arshath@codelantic.com',
      dob: '1997.09.29',
      gender: 'Male',
      education: 'Engineering',
      company: 'CodeLantic',
      experiance: '6',
      package: '1',
    },
    {
      id: '2',
      firstName: 'Mohammed',
      lastName: 'Arshath',
      email: 'arshath@codelantic.com',
      dob: '1997.09.29',
      gender: 'Male',
      education: 'Engineering',
      company: 'CodeLantic',
      experiance: '6',
      package: '1',
    },
    {
      id: '3',
      firstName: 'Mohammed',
      lastName: 'Arshath',
      email: 'arshath@codelantic.com',
      dob: '1997.09.29',
      gender: 'Male',
      education: 'Engineering',
      company: 'CodeLantic',
      experiance: '6',
      package: '1',
    },
  ];

  addNewEmployee() {
    this.modalService.create({
      nzContent: AddNewComponent,
      nzWidth: '600px',
      nzFooter: null,
      nzCentered: true,
    });
  }
}
