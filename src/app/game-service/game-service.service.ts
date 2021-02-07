import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
// Interface
import { ICard } from '../game-card/Card';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  
  // Private mmebers .............................

   // Note: to hit a real URL, change the URL variable to contain a read URL address.
   // In order to work with a local file, it is required to add the location for the 
   // file inside the 'angular.json' configuration, inisde the following location 
   //    Project -> <myProject> -> Architect -> build -> Options -> assets
   // For example
   // "assets": [
   //  "src/favicon.ico",
   //   "src/assets",
   //  "src/api"   <-- this is teh path to find the files
   // ]
  private gameUrl = 'api/cardImages/CardImages.json';

  // Constructor ...................................
  constructor(private http: HttpClient) { }
  
   // methods ......................................

   // to retreive the collection of elements
   getCards(): Observable<ICard[]> {
    return this.http.get<ICard[]>(this.gameUrl)
      .pipe(
        // tap(data => console.log('All data: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

   // handle errors
   private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
