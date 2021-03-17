import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import  { KTuneService } from '../ktune.service';

@Component({
    selector: 'register',
    template: `<div>
    <div class="col-lg-12">
    <h3> Register </h3>
    <hr class="ktunesLine" />
     <form [formGroup]="registerForm">
     <div class="form-row">
     <div class="form-group col-md-3">
         <label>Email ID</label>
         <input type="text" class="form-control" placeholder="Email" formControlName="email">
     </div>
     </div>

     <div class="form-row">
         <div class="form-group col-md-3">
         <label>Password</label>
         <input type="password" class="form-control" placeholder="Password" formControlName="password">
         </div>
     </div>

     <div class="form-row">
         <div class="form-group col-md-3">
         <label>First Name</label>
         <input type="text" class="form-control" placeholder="First Name" formControlName="fname">
         </div>
     </div>

     <div class="form-row">
         <div class="form-group col-md-3">
         <label>Last Name</label>
         <input type="text" class="form-control" placeholder="lname" formControlName="lname">
         </div>
     </div>

     <div class="form-row">
         <div class="form-group col-md-3">
         <label>Location</label>
         <input type="text" class="form-control" placeholder="Location" formControlName="location">
         </div>
     </div>

     <div class="form-row">
         <div class="form-group col-md-3">
         <label>Mobile Number</label>
         <input type="text" class="form-control" placeholder="Mobile Number" formControlName="mobilenum">
         </div>
     </div>

     <button class="btn btn-ktunes" (click)="submitUser()" [disabled]="registerForm.invalid" > Submit </button>
 </form>

</div>

<div>`
})

export class RegisterComponent{
    constructor(private _fb: FormBuilder, private _service: KTuneService) {}
    RegistrationObj = {email: null,fname: null,lname: null,location: null,mobilenum: null,password: null};
    registerForm  = this._fb.group({
        email: ['', Validators.required], 
        password: ['', Validators.required],
        fname: ['', Validators.required],
        lname: ['', Validators.required],
        location: ['', Validators.required],
        mobilenum: ['', Validators.required]
    })

    submitUser() {
        console.log(this.registerForm.value);
        this._service.postUserRegistration(this.registerForm.value).subscribe(res => {
            alert(`${this.registerForm.get('fname').value} successfully registered`)
        })
    }
}