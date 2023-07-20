import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }


  getAllRecords():Observable<any>
  {
    console.log("restapi get called");
    return this.http.get(`https://dummy.restapiexample.com/api/v1/employees`);
  }
}
