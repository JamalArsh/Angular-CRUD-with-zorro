import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  NgModel,
  Validators,
} from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.sass'],
})
export class AddNewComponent implements OnInit {
  employeeForm: any;
  @ViewChild('emailErrorTip') emailErrorTip!: TemplateRef<{
    $implicit: FormControl | NgModel;
  }>;

  @ViewChild('experienceErrorTip') experienceErrorTip!: TemplateRef<{
    $implicit: FormControl | NgModel;
  }>;

  educationLevel = [
    'Metric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];

  constructor(
    private formBuilder: FormBuilder,
    private emplyeeService: EmployeeService,
    private notification: NzNotificationService,
    private modelRef: NzModalRef
  ) {}

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [
        null,
        Validators.compose([Validators.email, Validators.required]),
      ],
      dateOfBirth: [null, Validators.required],
      gender: [null, Validators.required],
      education: [null, Validators.required],
      company: [null, Validators.required],
      experience: [
        null,
        Validators.compose([
          Validators.required,
          Validators.min(0),
          Validators.max(50),
        ]),
      ],
      package: [
        null,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      let dob = `${this.employeeForm.value['dateOfBirth'].getFullYear()}.${
        this.employeeForm.value['dateOfBirth'].getMonth() + 1
      }.${this.employeeForm.value['dateOfBirth'].getDate()}`;

      console.log(dob);

      let transferObj = {
        firstName: this.employeeForm.value['firstName'],
        lastName: this.employeeForm.value['lastName'],
        email: this.employeeForm.value['email'],
        dob: dob,
        gender: this.employeeForm.value['gender'],
        education: this.employeeForm.value['education'],
        company: this.employeeForm.value['company'],
        experience: this.employeeForm.value['experience'],
        package: this.employeeForm.value['package'],
      };

      this.emplyeeService.addNewEmployee(transferObj).subscribe({
        next: () => {
          this.notification.create(
            'success',
            'Success',
            'Employee details successfully added to the database'
          );

          this.employeeForm.reset();
          this.modelRef.close();
        },
        error: () => {
          this.notification.create('error', 'Error', 'Error while saving');
        },
      });

      console.log(transferObj);
    } else {
      Object.values(this.employeeForm.controls).forEach((control: any) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
