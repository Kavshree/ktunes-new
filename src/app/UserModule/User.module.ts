import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register.component';
import { LoginComponent} from './login.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HttpClientModule],
    declarations: [RegisterComponent, LoginComponent],
    exports: [RegisterComponent, LoginComponent],
    providers: []
})

export class UserModule{}