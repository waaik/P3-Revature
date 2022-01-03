import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'User';
import { LoginService } from '../login.service';
import { SignupService } from '../signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService, private signupService: SignupService) { }

  username!: string;
  password!: string;
  firstName!: string;
  lastName!: string;
  age!: number;
  email!: string;
  birthday!: string;
  address!: string;
  role!: string;

  // show / hide password
  hide = true;

  // succssmessage
  successMessage!: string;

  // err message
  errorMessage!: string;

  ngOnInit(): void {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn() {
    this.loginService.checkLoginStatus().subscribe((res) => {
      if (res.status === 200 || res.status === 201){
        let body = <User> res.body;

        if(body.role === 'Customer'){
          this.router.navigate(['/login']); // navigates to customer route page
        }

        if(body.role === 'Admin'){
          this.router.navigate(['/admin']); // navigates to admin route page
        }
      }
    },
    (err) => {

    });
  }

  onSignupClick() {
    this.signupService.signup(this.username, this.password, this.firstName, this.lastName, this.age, this.email, this.birthday, this.address, this.role).subscribe((res) => {
      if (res.status === 201 || res.status === 200){
        if (res.body){
            this.successMessage = res.body;
            setTimeout(() => window.location.reload(), 5000); // reload page after 5 secs
        }
      }
    }, (err) => {
      this.errorMessage = err.error;
      this.errorMessage = "";
    } )
  }



}
