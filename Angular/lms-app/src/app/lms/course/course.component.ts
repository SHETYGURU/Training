import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
   courses=[
      {name:'Gururaj',copy:10},
      {name:'Sony',copy:8}
  ];
  
  copyForm:FormGroup;
  constructor(private fb:FormBuilder,private router:Router){
    this.copyForm=this.fb.group({
      name:['',Validators.required],
      copy:[null,[Validators.required,Validators.min(1)]]
    });
  }
  
  onSubmit():void{
  
    if(this.copyForm.valid){
      this.courses.push({name:this.copyForm.value.name,copy:this.copyForm.value.copy});
      this.copyForm.value.age();
      this.copyForm.reset();
    
  }
  }

}
