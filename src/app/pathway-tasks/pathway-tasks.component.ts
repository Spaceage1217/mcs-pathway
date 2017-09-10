import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Pathway,
  Task
} from '../shared';
@Component({
  selector: 'ptahway-tasks',
  templateUrl: './pathway-tasks.component.html',
  styleUrls: ['./pathway-tasks.component.scss']
})
export class PathwayTasksComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router:Router
  ) {}
  pathway:Pathway;
  tasks:Task[];
  completed: boolean;

    ngOnInit(){
      this.route.data.subscribe(
          (pathway)=>{
            //for some reason i have to use ".article" not sure where this is coming from....
            //will create a new variable and store pathway.article in that..
            let _pathway = pathway.article;
            this.pathway = _pathway;
            this.tasks=_pathway.tasks;
            this.completed = _pathway.completed;
            console.log(this.pathway);
            console.log(this.tasks);
          }
      )
    }

    disableTask(i:number){
      if(!(this.tasks[i--].id===1) && this.tasks[i--].completed===false){
        return true;
      }
    }
}
