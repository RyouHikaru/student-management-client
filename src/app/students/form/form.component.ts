import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  fullname = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[A-Za-z\s]+$/),
  ]);
  grade = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[0-9]+$/),
    Validators.min(0),
    Validators.max(100),
  ]);

  constructor(private dataService: DataService, private router: Router) {}

  getNameErrorMsg() {
    if (this.fullname.hasError('required')) {
      return 'This is required';
    }

    return this.fullname.hasError('pattern')
      ? 'Names should only contain alphabets'
      : '';
  }

  getGradeErrorMsg() {
    if (this.grade.hasError('required')) {
      return 'This is required';
    }

    if (this.grade.hasError('min') || this.grade.hasError('max')) {
      return 'Grade should only be from 0 to 100';
    }

    return this.grade.hasError('pattern')
      ? 'Grade should only contain numerals'
      : '';
  }

  saveStudent() {
    if (this.getNameErrorMsg().length || this.getGradeErrorMsg().length) {
      return;
    }

    this.dataService
      .createStudent({
        fullname: this.fullname.value,
        grade: Number(this.grade.value),
      })
      .subscribe();

    this.router.navigate(['/']);
  }
}
