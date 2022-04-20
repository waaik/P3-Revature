import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
//Connects to Backend Controller classes holding the functionality of the given mapping
export class LoginService {
  constructor(private http: HttpClient) {}
  //Checks if User is logged in
  checkLoginStatus() {
    return this.http.get(`http://localhost:8081/loginstatus`,{
      //'http://ec2-54-84-57-117.compute-1.amazonaws.com:8081/loginstatus', {
      observe: 'response',
      withCredentials: true,
    });
  }
  //Brings you to login page to sign-in as User or Admin
  login(username: string, password: string){
    return this.http.post(`http://localhost:8081/login`,{
      //'http://ec2-54-84-57-117.compute-1.amazonaws.com:8081/login', {
      "username": username,
      "password": password
    }, {
      withCredentials: true,
      observe: 'response'
    })
  }
  //Logs you out of each session that is logged in
  logout() {
    return this.http.post(`http://localhost:8081/logout`,
      //'http://ec2-54-84-57-117.compute-1.amazonaws.com:8081/logout',
      {},
      {
        observe: 'response',
        withCredentials: true,
        responseType: 'text',
      }
    );
  }
  //Returns the updated User information into the database, overwriting the current user information
  updateUser(
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    birthday: string,
    address: string,
    role: string
  ) {
    return this.http.put(`http://localhost:8081/user`,
     // `http://ec2-54-84-57-117.compute-1.amazonaws.com:8081/user`,
      {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email,
        birthday: birthday,
        address: address,
        role: role,
      },
      {
        withCredentials: true,
        observe: 'response',
      }
    );
  }
}
