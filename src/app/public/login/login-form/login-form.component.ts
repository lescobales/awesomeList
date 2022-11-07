import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'al-login-form',
  templateUrl: './login-form.component.html',
  styles: [
  ]
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      'email': ['',[
        Validators.required,
        Validators.email
      ]],
      'password': ['',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]]
    });
  }

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

  submit() {
    this.router.navigate(['app/dashboard']);
  }

}
