import { Component } from '@angular/core';
import { Employee } from './employee';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'empform';
  submitted = false;
  errorMsg="";
  states = [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"]

    start= "yyyy-mm-dd"
    empModel = new Employee('Full Name','email@test.com',9999999999,'','',this.start)
    constructor(private _enrollmentService: EnrollmentService){ }
    onSubmit(){
      //console.log(this.empModel)
      this.submitted = true;
      this._enrollmentService.enroll(this.empModel)
          .subscribe(
            data => console.log("success!",data),
            error => this.errorMsg = error
          )
    }
  }
