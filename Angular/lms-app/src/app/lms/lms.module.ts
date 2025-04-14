import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from '../root/root.component';
import { LlmsComponent } from './llms/llms.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherComponent } from './teacher/teacher.component';
import { CourseComponent } from './course/course.component';



@NgModule({
  declarations: [
    RootComponent,
    LlmsComponent,
    LoginComponent,
    DashboardComponent,
    StudentComponent,
    TeacherComponent,
    CourseComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ] ,providers: [],
    bootstrap: [RootComponent]
  })

export class LmsModule { }
