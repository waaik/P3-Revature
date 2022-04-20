import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../login.service";
import {User} from "../../../User";
import {ResetPasswordService} from "../reset-password.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
//Does not connect to the Backend yet!!!
export class ResetPasswordComponent implements OnInit {
  constructor(private router: Router, private resetPasswordService: ResetPasswordService) {
  }

  ngOnInit(): void {
    this.checkIfLoggedIn();
  }

  email!: string;
  password!: string;
  errorMessage!: string;

  // show / hide password
  hide = true;

  // perform service layer functionality here. Is using the changeUserPassword() from reset-password-service.ts
  onLoggedIn() {
    this.resetPasswordService.changeUserPassword(this.email, this.password).subscribe((res) => {
        if (res.status === 201 || res.status === 200) {
          let body = <User>res.body;
          console.log(res);
          if (body.role === 'Customer') {
            this.router.navigate(['/home']); // navigates to customer route page -> redirecting to this route for now until we have full functionalities of the routes
          }

          if (body.role === 'Admin') {
            this.router.navigate(['/home']); // navigates to admin route page
          }
        }
      },
      (err) => {
        this.errorMessage = err.error;
      });

  }


  checkIfLoggedIn() {
    this.resetPasswordService.checkLoginStatus().subscribe(
      (res) => {
        if (res.status === 200 || res.status === 201) {
          // depending on the status
          let body = <User>res.body;

          if (body.role === 'Customer') {
            this.router.navigate(['']);
          }

          if (body.role === 'Admin') {
            this.router.navigate(['/admin']);
          }
        }
      });
  }
}
