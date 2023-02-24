import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent {
  students: any;
  student: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getStudents().subscribe((data) => {
      this.students = data.students;
    });
  }
}
