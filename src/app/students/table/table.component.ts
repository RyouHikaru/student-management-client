import { Component, Input, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Student } from '../student';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() students: any;

  displayedColumns: string[] = ['no', 'name', 'grade', 'view'];
  
  @ViewChild(MatTable) table: MatTable<Student> | undefined;
}
