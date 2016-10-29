import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

    constructor(
        private _router: Router,
    ) { }

    login() {
        localStorage.setItem('loggedIn', JSON.stringify(true));
        return true;
    }

    logout() {
        localStorage.setItem('loggedIn', JSON.stringify(false));
        this._router.navigate(['login']);
    }
}