import { Component, Input } from '@angular/core';

import { Pathway,Task  } from '../models';
@Component({
  selector: 'pathway-task',
  templateUrl: './pathway-task.component.html',
  styleUrls: ['./pathway-task.component.scss']
})
export class PathwayTaskComponent {
  pathways:Pathway[];
  _task:Task;
  callToAction:string;
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


}
