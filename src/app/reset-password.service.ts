import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
/* References Backend Controller classes and mappings
* Needs work connecting to the Backend */

export class ResetPasswordService {

  constructor(private http: HttpClient) { }
  //Method from the Login Service class....
  checkLoginStatus() {
    return this.http.get(`http://localhost:8081/loginstatus`,{
      //'http://ec2-54-84-57-117.compute-1.amazonaws.com:8081/loginstatus', {
      observe: 'response',
      withCredentials: true,
    });
  }
  //References the logic from Update User method in the Login Service class
  changeUserPassword(

    password: string,
    email: string,

  ) {
    return this.http.put(`http://localhost:8081/user`,
      // `http://ec2-54-84-57-117.compute-1.amazonaws.com:8081/user`,
      {

        password: password,
        email: email,

      },
      {
        withCredentials: true,
        observe: 'response',
      }
    );
  }

}
