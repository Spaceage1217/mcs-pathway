import { Component, Input ,Output,EventEmitter} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { Pathway,Task,Question  } from '../models';
@Component({
  selector: 'pathway-task',
  templateUrl: './pathway-task.component.html',
  styleUrls: ['./pathway-task.component.scss']
})
export class PathwayTaskComponent {
  _task:Task;
  callToAction:string;
  sub:any;
  @Output() questions = new EventEmitter<Question[]>()
  @Input() isDisabled:boolean;
  @Input() set task(task:Task){
    this._task=task;
    if(task.category ==="Article"){
      this.callToAction ="Check out this article";
    }
    else if(task.category === "Video"){
      this.callToAction ="Check out this Video";
    }
    else{
      this.callToAction ="Submit";
    }
  }
  constructor(
   private route: ActivatedRoute,
   private router: Router
 ) {}

  showQuiz(){
    console.log(this._task.questions);
    if(
        this._task.category !== "Project"
        && this._task.questions.length !== 0
        && !this._task.started
      ){
        this._task.started = true;
      }
  }




  loadQuiz(){
      this.questions.emit(this._task.questions);

  }

}
