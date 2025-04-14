import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
users:string[]=[];
constructor(private myService:MyServiceService){ }
  ngOnInit(){
    this.users=this.myService.getUsers();
 
}

}
