import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { MaterialModule } from '../shared/material.module';
import { TableComponent } from './table/table.component';
import { ViewComponent } from './view/view.component';
import { FormComponent } from './form/form.component';
import { EditFormComponent } from './edit-form/edit-form.component';


@NgModule({
  declarations: [
    StudentsComponent,
    TableComponent,
    ViewComponent,
    FormComponent,
    EditFormComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MaterialModule
  ]
})
export class StudentsModule { }
