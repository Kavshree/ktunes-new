import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate } from '@angular/router';
import { FormGroup } from '@angular/forms';


export interface FormComponent {
    songForm: FormGroup;
  }

@Injectable()
export class AuthGuardConfirmation implements CanDeactivate<FormComponent> {
    
    canDeactivate(component: FormComponent) {
        console.log(component);
        if (component.songForm.dirty) {
        return window.confirm('You have unsaved changes. Are you sure you want to navigate away?');
        }
        return true;
    }
}