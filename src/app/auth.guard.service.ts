import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService {

    constructor( public router: Router) { }

    canActivate(router: ActivatedRouteSnapshot): boolean {
        console.log(this.router.url);
        if (localStorage.getItem("role") == 'ADMIN' || (localStorage.getItem("role") == 'USER' && this.router.url=='/login')) {
            return true;
        }
        else {
        	this.router.navigate(['login']);
            return false;
        }
    }
}