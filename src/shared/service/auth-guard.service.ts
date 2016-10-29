import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private _router: Router
    ) { }

    canActivate() {
        if (JSON.parse(localStorage.getItem('loggedIn'))) {
            return true;
        } else {
			this._router.navigate(['login']);
            return false;
        }
    }
}
