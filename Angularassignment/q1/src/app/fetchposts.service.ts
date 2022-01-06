import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from './post';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FetchpostsService {

  private _url: string = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) { }

  getPosts():Observable<IPost[]>{
    return this.http.get<IPost[]>(this._url)
    .pipe(catchError(this.errorHandler)); 
  }
  
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error")
  };
}
