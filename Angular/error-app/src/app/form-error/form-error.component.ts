import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.css']
})
export class FormErrorComponent {
  errormsg: string = '';
onSubmit(form:NgForm){
  if(form.valid){
    console.log('form submitted' ,form.value);
    
  }
  else{
    console.log('form invalid');
    
  }
}
constructor(private dataService:DataService){

}
getData(){
  this.dataService.fetchdata().subscribe({
    error: err => this.errormsg = err.message
  })
}

}
