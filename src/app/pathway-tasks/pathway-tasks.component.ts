import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Pathway,
  Task,
  Question
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
  Current_task_ID:number;
  completed: boolean;
  hidden:boolean= false;
  pathway:Pathway;
  tasks:Task[];
  questions:Question[];


    ngOnInit(){
      this.route.data.subscribe(
          (pathway)=>{
            //for some reason i have to use ".article" not sure where this is coming from....
            //will create a new variable and store pathway.article in that..
            let _pathway = pathway.article;
            this.pathway = _pathway;
            this.tasks=_pathway.tasks;
            this.completed = _pathway.completed;
          }
      )
    }

    disableTask(i:number){
      if(!(this.tasks[i--].id===1) && this.tasks[i--].completed===false){
        return true;
      }
    }

    loadQuestions(questions:Question[]){
      this.hidden=true;
      this.questions = questions;
    }
    setTaskID(id){
        this.Current_task_ID = id;
    }
    loadTasks(){
      this.hidden = false;
    }
    completeTask(completed:boolean){
        this.tasks[this.Current_task_ID-1].completed = completed;
        let lastTask =this.tasks.length - 1;
        console.log('last task index' + lastTask);
        console.log(this.tasks[lastTask].completed )
        if(this.tasks[lastTask-1].completed === true){
          //if the last task is completed then set the pathway completed to true.
           this.completed = true;
        }
    }
}
