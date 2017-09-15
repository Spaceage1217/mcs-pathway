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
      console.log(this.question);
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
    onSubmit(){
      console.log(this.quizForm.value);
      let choice = this.quizForm.value.choice;// creates pointer
      choice.selected = true;
      console.log('whats been selected?', this.questions[0]);
    }
    loadTasks(){
      //when you go back show the tasks again
      this.showTasks.emit();
    }
}
