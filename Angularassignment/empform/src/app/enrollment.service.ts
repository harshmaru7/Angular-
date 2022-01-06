import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Employee } from './employee';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'http://localhost:3000/enroll';
  constructor(private _http: HttpClient) { }
   
  enroll(employee:Employee){
    return this._http.post<any>(this._url,employee)
    .pipe(catchError(this.errorHandler)); ;
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error")
  };
}
