import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  // to hsow/hide password
  hide = true;
  submitted: boolean;
  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  getErrorMessage() {
    return 'Invalid Mail!';
  }

  login() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this._authService.login(this.loginForm.value).subscribe(
        () => {
          // navigate to users after successfull login
          this._router.navigate(['users']);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
