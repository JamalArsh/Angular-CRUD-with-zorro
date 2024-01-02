import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  baseUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {}

  getAllEmployees() {
    return this.http.get(this.baseUrl);
  }

  addNewEmployee(data: any) {
    return this.http.post(this.baseUrl, data);
  }
}
