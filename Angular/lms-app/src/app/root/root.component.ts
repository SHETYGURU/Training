import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {
constructor(private router:Router){}
  ngOnInit(){
    this.router.navigate(['/home']);
  }
}

