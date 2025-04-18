import { Component,Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-app-parent',
  templateUrl: './app-parent.component.html',
  styleUrls: ['./app-parent.component.css']
})
export class AppParentComponent {

  arbitraryData:string='initial';
  constructor(){
  
      setTimeout(()=>{
        this.arbitraryData='final';
      },5000);
      
  
  }

}
