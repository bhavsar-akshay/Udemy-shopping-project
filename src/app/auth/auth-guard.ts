import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})

export class AuthGuard implements CanActivate {

	constructor(private authService: AuthService, private router: Router) { }

	canActivate(
		route: ActivatedRouteSnapshot,
		router: RouterStateSnapshot
	  ): boolean | UrlTree | Promise<boolean | UrlTree>	| Observable<boolean | UrlTree> {
		return this.authService.user.pipe(
			take(1),
			map( user => { console.log(user)
				if(!!user){
					return true;
				}
			return this.router.createUrlTree(['/auth']);
		}))

	  }
}
