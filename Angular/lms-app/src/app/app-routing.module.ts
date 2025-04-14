import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LlmsComponent } from './lms/llms/llms.component';
import { StudentComponent } from './lms/student/student.component';
import { DashboardComponent } from './lms/dashboard/dashboard.component';
import { LoginComponent } from './lms/login/login.component';
import { TeacherComponent } from './lms/teacher/teacher.component';
import { CourseComponent } from './lms/course/course.component';

const routes: Routes = [
  {
    path:'home',component:LlmsComponent
    
  },
  {    path:'student',component:StudentComponent

  },
  {
    path:'dashboard',component:DashboardComponent

  },
  {
    path:'teacher',component:TeacherComponent

  },{
    path:'course',component:CourseComponent

  },
  {
    path:'login',component:LoginComponent

  },
  {path:"", redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
