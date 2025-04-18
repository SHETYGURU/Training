import { Injectable } from '@angular/core';
import{HttpErrorResponse,HttpClient} from'@angular/common/http';
import { catchError,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {}
    fetchdata(){
      return this.http.get('https://invalidurl.com/data').pipe(catchError(this.handleError));
    }
    
    private handleError(error:HttpErrorResponse){
      return throwError(()=>new Error('Something went wrong!'));
    }
  } 
