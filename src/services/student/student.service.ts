import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { BookAndCollegeDetails } from 'src/app/models/BookAndCollegeDetails';
import { BookAndCollegeQuery } from 'src/app/models/BookAndCollegeQuery';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {
    
  }

  /** POST **/
  bookAndCollegeDetails(query: BookAndCollegeQuery): Observable<BookAndCollegeDetails> {
    var httpOptions = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    };
    return this.http.post<BookAndCollegeDetails>(
      "https://localhost:7185/api/Student/BookAndCollegeDetails", 
      JSON.stringify(query, (_, v) => typeof v === 'bigint' ? v.toString() : v), 
      httpOptions
    ).pipe(
      tap((details: BookAndCollegeDetails) => this.log(`${JSON.stringify(details, (_, v) => typeof v === 'bigint' ? v.toString() : v)} received`)),
      catchError(this.handleError<BookAndCollegeDetails>('bookAndCollegeDetails'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      confirm("No changes made, please check input values");

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`StudentService: ${message}`);
  }
}
