import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/interfaces/department';
import { DepartmentsService } from 'src/app/services/departments.service';
import { FormControl } from '@angular/forms';
import { Employee } from 'src/app/interfaces/employee';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {
  departments: Department[] | undefined;
  department: Department | undefined;
  employeeNameFC = new FormControl('');
  employees: Employee[] = [];
  employeeId = 0;


  constructor(
    private route: ActivatedRoute,
    private departmentsService: DepartmentsService
  ) {}
  
  ngOnInit(): void {
    this.departments = this.departmentsService.departments;
    this.department = this.departments.find(department => department.id === this.route.snapshot.params['id']);
  }

}
