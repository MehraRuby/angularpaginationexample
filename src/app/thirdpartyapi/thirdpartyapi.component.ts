import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-thirdpartyapi',
  templateUrl: './thirdpartyapi.component.html',
  styleUrls: ['./thirdpartyapi.component.css']
})

export class ThirdpartyapiComponent {

obj:Employee | any
data: any = []

constructor(private serv : MyserviceService){


}


p: number = 1;
count: number = 5;

getdata()
{

  this.serv.getAllRecords().subscribe(
    resp=> {
      this.obj = resp
     // console.log("subscribe get called");
     console.log(this.obj.data)
     this.data=this.obj.data
    }
      ,err=>{console.log(err)})

     
      console.log();

}

}



class Employee
{
  id?:number |any 
  employee_name?:string  |any
  employee_salary?:number |any
  employee_age?:number |any
  profile_image?:string |any  }
