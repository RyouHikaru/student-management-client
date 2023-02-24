import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { StudentsComponent } from './students.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { 
    path: '', 
    component: StudentsComponent 
  },
  {
    path: 'new',
    component: FormComponent,
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: ViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
