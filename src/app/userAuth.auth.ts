import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { KTuneService } from './ktune.service'
import { Router } from '@angular/router'

@Injectable()

export class UserAuth implements CanActivate{
    constructor(private _service: KTuneService, private _Router: Router) {}

    canActivate() : boolean| Observable<boolean> {
        let isUserLoggedIn=false;
        return new Observable<boolean>((observer) => {
            this._service.getCurrentUser().subscribe(resp => {
                let currUserResp = resp[0];
                    if(currUserResp?.id) {
                        isUserLoggedIn=true;
                        observer.next(true);
                        observer.complete();
                    }
                    return isUserLoggedIn;
                })
        })
        
            
    }
}