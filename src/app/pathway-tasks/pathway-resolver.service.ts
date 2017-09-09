import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Pathway, PathwaysService } from '../shared';

@Injectable()
export class PathwayTasksResolver implements Resolve<Pathway> {
  constructor(
    private pathwayssService: PathwaysService,
    private router: Router,

  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Pathway> {

    return this.pathwayssService.getPathway(route.params['id'])
           .catch((err) => this.router.navigateByUrl('/'));

  }
}
