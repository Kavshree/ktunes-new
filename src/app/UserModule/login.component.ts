import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { KTuneService } from '../ktune.service'

@Component({
    selector: 'login',
    template: `<div>
    <div class="container h-100">
  <div class="row h-100 justify-content-center align-items-center ">
    <form class="col-lg-4 col-xs-12 col-sm-12 col-md-12 card" [formGroup]="loginForm">
    <img id="profile-img" class="profile-img-card mt-10" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
      <div class="form-group">
        <label for="formGroupExampleInput">Email ID</label>
        <input type="text" class="form-control" placeholder="Email ID" formControlName="email">
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Password</label>
        <input type="text" class="form-control" placeholder="Password"  formControlName="password">
      </div>
      <div class="alert alert-danger" role="alert" *ngIf="errormsg">{{errormsg}}</div>
      <p class="text-muted">Not a member? <a [routerLink]="['/Register']">Register</a></p>
      <button class="btn btn-block btn-ktunes" type="submit" (click)="submit()">Sign in</button>
    </form>   
  </div>
</div>
`,
    styles: [`
    
    
    .profile-img-card {
        width: 96px;
        height: 96px;
        margin: 0 auto 10px;
        display: block;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
    }
    
    
    `]
})

export class LoginComponent{
    errormsg=null;
    constructor(private _service: KTuneService, private _fb: FormBuilder,private _router: Router){}
    loginForm = this._fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    })

    submit() {
        let emailEntered = this.loginForm.get('email').value;

        this._service.getUser(emailEntered).subscribe(res => {
            let returnedData = res;
            if(returnedData[0]?.password && returnedData[0]?.password != this.loginForm.get('password').value) {
                this.errormsg = "Password Incorrect";
            } else if(!returnedData[0]?.password) {
               this.errormsg="Account Not Registered";
            } else if(returnedData[0]?.password && returnedData[0]?.password == this.loginForm.get('password').value) {
                alert("login successful!")
            }
        })
    }
}