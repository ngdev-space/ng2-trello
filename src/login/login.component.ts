import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/service/login.service';

@Component({
    selector: 'dl-login',
    styleUrls: ['login.component.css'],
    templateUrl: 'login.component.html'
})
export class LoginComponent {

    constructor(
        private _router: Router,
        private _loginService: LoginService
    ) {

        console.log('login');
     }

    login(username: any, password: any) {
        if (!username.value || !password.value) {
            return;
        }
		if (this._loginService.login()) {
			this._router.navigate(['']);
        }
    }
}
