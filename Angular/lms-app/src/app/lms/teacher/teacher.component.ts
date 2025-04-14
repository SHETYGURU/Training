import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {

  teachers=[
    {name:'Gururaj',experience:10},
    {name:'Sony',experience:8}
];

teacherForm:FormGroup;
constructor(private fb:FormBuilder,private router:Router){
  this.teacherForm=this.fb.group({
    name:['',Validators.required],
    experience:[null,[Validators.required,Validators.min(1)]]
  });
}

onSubmit():void{

  if(this.teacherForm.valid){
    this.teachers.push({name:this.teacherForm.value.name,experience:this.teacherForm.value.experience});
    this.teacherForm.value.age();
    this.teacherForm.reset();
  
}
}
}
