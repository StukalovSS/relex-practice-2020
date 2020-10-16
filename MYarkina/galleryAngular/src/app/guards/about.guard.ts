import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface ComponentCanDeactivate{
  canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class AboutGuard implements CanActivate, CanDeactivate<ComponentCanDeactivate> {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return confirm('Вы уверены, что хотите открыть во весь экран?');
  }
  
  canDeactivate(component: ComponentCanDeactivate) : Observable<boolean> | boolean{    
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
