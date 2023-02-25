import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent {
  student: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.dataService.getOneStudent(id).subscribe((data) => {
      this.student = data.student;
    });
  }

  deleteStudent() {
    this.dataService.deleteStudent({ id: this.student._id }).subscribe();
    this.router.navigate(['/']);
  }
}
