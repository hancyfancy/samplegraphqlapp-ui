import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'students', component: StudentComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }