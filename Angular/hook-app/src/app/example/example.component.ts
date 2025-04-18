import { Component ,DoCheck,ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements DoCheck {
  lifecycleTicks:number=0;
  oldTheData:string | undefined;
  data:string[]=['initial'];
  constructor(private changeDetector:ChangeDetectorRef){
    //this.changeDetector.detach();
    setTimeout(()=>{
      this.oldTheData='final';
      this.data.push('intermediate');
    },5000);
    setTimeout(() => {
      this.data.push('final');
    }, 10000);
   
  }
  ngDoCheck(): void {
    console.log(++this.lifecycleTicks);
    if(this.data[this.data.length-1]!==this.oldTheData){
      this.changeDetector.detectChanges();
    }
    
  }
  

}
