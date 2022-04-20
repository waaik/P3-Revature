import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//Connects to Backend Controller classes holding the functionality of the given mapping
export class SignupService {

  constructor(private http: HttpClient) { }
  //Brings up the sign-up feature, with given fields
  signup(username: string, password: string, firstName: string, lastName: string, age: number, email: string, birthday: string, address: string, role: string){
    return this.http.post(`http://localhost:8081/signup`, {
      //`http://ec2-54-84-57-117.compute-1.amazonaws.com:8081/signup`, {
      "username": username,
      "password": password,
      "firstName": firstName,
      "lastName": lastName,
      "age": age,
      "email": email,
      "birthday": birthday,
      "address": address,
      "role": role
    }, {
      withCredentials: true,
      observe: 'response',
      responseType: 'text'
    })
  }
}
