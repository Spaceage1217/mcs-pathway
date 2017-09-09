import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Pathway} from '../models';
import { ApiService } from './api.service';


@Injectable()
export class PathwaysService {
  constructor (
    private apiService: ApiService
  ) {}


    get(): Observable<Pathway[]> {
      return this.apiService.get('/paths/')
        .map(data => data);
    }

    getPathway(id:number):Observable<Pathway>{
      return this.apiService.get('/paths/'+id)
      .map(data =>data);
    }

    destroy(pathID): Observable<Pathway>{
      return this.apiService.delete('/paths/'+pathID)

    }

}
