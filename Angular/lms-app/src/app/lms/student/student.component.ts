import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  students=[
    {name:'Gururaj',age:22},
    {name:'Sony',age:22}
];

studentForm:FormGroup;
constructor(private fb:FormBuilder,private router:Router){
  this.studentForm=this.fb.group({
    name:['',Validators.required],
    age:[null,[Validators.required,Validators.min(1)]]
  });
}

onSubmit():void{

  if(this.studentForm.valid){
    this.students.push({name:this.studentForm.value.name,age:this.studentForm.value.age});
    this.studentForm.value.age();
    this.studentForm.reset();
  
}
}
}
