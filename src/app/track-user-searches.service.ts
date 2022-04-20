import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './Products';
import {SearchProducts} from "../../SearchProduct";

@Injectable({
  providedIn: 'root'
})
/*Service class for the TrackUserSearches Component class.
 References the Book Controller on the backend to get Book ID.
 */
export class TrackUserSearchesService {

  private baseURL = "http://localhost:8081/books/{id}"

  constructor(private http: HttpClient) { }
  //References the SearchProducts[] in the Search-Products Service class.
  getBookId(): Observable<SearchProducts[]>{
    return this.http.get<SearchProducts[]>(`${this.baseURL}`);
  }

}
