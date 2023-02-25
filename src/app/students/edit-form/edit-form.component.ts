import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent {
  student: any;
  id: string | null;
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

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = '';
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    
    this.dataService.getOneStudent(this.id).subscribe((data) => {
      this.student = data.student;
      this.fullname.setValue(this.student?.fullname);
      this.grade.setValue(this.student?.grade);
    });
    
  }

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

    this.dataService.updateStudent({
      id: this.id,
      fullname: this.fullname.value,
      grade: Number(this.grade.value),
    })
    .subscribe();

    this.router.navigate(['/']);
  }
}
