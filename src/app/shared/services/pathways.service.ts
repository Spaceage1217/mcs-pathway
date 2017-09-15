import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Pathway, Question} from '../models';
import { ApiService } from './api.service';


@Injectable()
export class PathwaysService {
    private currentPathwaySubject = new BehaviorSubject<Pathway>(new Pathway());
    public currentPathway = this.currentPathwaySubject.asObservable().distinctUntilChanged();

    private currentPathwayCompletedSubject = new ReplaySubject<boolean>(1);
    public currentPathwayCompleted = this.currentPathwaySubject.asObservable();

    /*private currentQuestionsSubject = new BehaviorSubject<Question[]>(new Question());
    public currentQuestions = this.currentPathwaySubject.asObservable().distinctUntilChanged();*/

  constructor (
    private apiService: ApiService
  ) {}


    get(): Observable<Pathway[]> {
      return this.apiService.get('/paths/')
        .map(data => data);
    }

    getPathway(id:number):Observable<Pathway>{
      return this.apiService.get('/paths/'+id)
      .map(data =>{
        console.log('coming from getPathway', data);
        this.currentPathwaySubject.next(data);
        return data;
      });
    }

    destroy(id:number): Observable<Pathway>{
      return this.apiService.delete('/paths/'+id)

    }

}
