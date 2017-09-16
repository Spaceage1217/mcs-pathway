import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {Question} from '../models';
import  {PathwaysService} from "../services";
@Component({
  selector: 'pathway-quiz',
  templateUrl: './pathway-quiz.component.html',
  styleUrls: ['./pathway-quiz.component.scss']
})
export class PathwayQuizComponent implements OnInit {
  completed: boolean;
  index: number = 0;
  score: number = 0;
  choices:number[] = [];

  question:Question;
  @Input() questions:Question[];
  @Output() save = new EventEmitter<boolean>()
  @Output() showTasks = new EventEmitter()
  quizForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private pathwaysService: PathwaysService
  ) {}

    ngOnInit(){
      this.question=this.questions[0];
      this.quizForm = new FormGroup({
        'choice': new FormControl(null),
      });
    }


    nextQuestion(){
     if(this.index<this.questions.length){
        this.index = this.index + 1;
        this.question=this.questions[this.index];
      }

    }
    previousQuestion(){
      if(this.index>0){
        this.index = this.index-1;
        this.question=this.questions[this.index];

      }
    }
    onSubmit(i:number){
      let choice;
      let previousIndex = i-1;
      choice = this.quizForm.value.choice;// creates pointer
      let question = this.questions[previousIndex];

      if(choice){
          this.choices[previousIndex]=choice.id;
          question.selected = choice.id;
      }
      else{
          question.selected = this.choices[previousIndex];
      }
      this.quizForm.reset();
    }
    loadTasks(){
      //when you go back show the tasks again
      this.showTasks.emit();
    }
}
