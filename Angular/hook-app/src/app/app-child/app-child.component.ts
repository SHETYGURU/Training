import { Component,Input,OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css']
})
export class AppChildComponent implements OnInit {
  @Input() data:string | undefined;
  lifecycleTicks:number=0;
  ngOnInit(){
    this.lifecycleTicks++;
  }

}
