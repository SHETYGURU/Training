import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'error-app';
  result:string='';

  handleDivision(){
    try{
      let a=10,b=0;
      if(b===0)throw new Error("Division by zero");
      this.result=`Result:${a/b}`;
    }catch(error:any){
      this.result=`Error:${error.message}`;
    }
  }
}
