import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.sass'],
})
export class AddNewComponent implements OnInit {
  employeeForm: any;

  educationLevel = [
    'Metric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];

  constructor(private formBuilder: FormBuilder) {}

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
          Validators.maxLength(50),
        ]),
      ],
      package: [
        null,
        Validators.compose([Validators.required, Validators.min(0)]),
      ],
    });
  }

  // isShow = true;
  onSubmit() {
    // this.isShow = !this.isShow;

    if (this.employeeForm.valid) {
      console.log('submit', this.employeeForm);
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
