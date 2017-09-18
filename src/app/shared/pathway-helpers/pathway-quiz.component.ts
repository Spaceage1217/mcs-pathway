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
  index: number = 0;
  points: number = 0;
  points_needed: number = 0;
  score: number = 0;
  number_of_questions: number = 0;
  progress: number = 0;
  pass: boolean = false;
  show_score_card: boolean = false;//set to true to see score card without having to answer qustions
  choices:number[] = [];
  question:Question;
  @Input() questions:Question[];
  @Output() save = new EventEmitter();
  @Output() showTasks = new EventEmitter();
  @Output() completed = new EventEmitter<boolean>();
  quizForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private pathwaysService: PathwaysService
  ) {}

    ngOnInit(){
       this.number_of_questions = this.questions.length;
       this.question=this.questions[0];
      for( var i =0; i< this.number_of_questions; i++)
      {
        this.choices[i]=0;
      }

      this.quizForm = new FormGroup({
        'choice': new FormControl(null),
      });
    }


    nextQuestion(){
     if(this.index<this.questions.length){
        this.index = this.index + 1;
        this.question=this.questions[this.index];
        this.saveLocaly(this.index);
        this.progress += 100/this.number_of_questions;
      }

    }
    previousQuestion(){
      if(this.index>0){
        this.index = this.index-1;
        this.question=this.questions[this.index];
        this.progress -= 100/this.number_of_questions;
      }
    }

    onSubmit(){
      //add alert to let user know if they leave question blank.
        this.progress += 100/this.number_of_questions;
        console.log(this.choices.length);
        this.saveLocaly(this.index+1);
        let that = this;

         this.questions.forEach(function(question,index)
           {
             let answer = that.choices[index]-1;
             if(answer != null){
               if(question.choices[answer].correct)
                    that.points+=1;
             }

         });
         this.score = (this.points/this.number_of_questions)*100;
         this.points_needed = Math.floor(this.number_of_questions * .8);
         if( this.points >= this.points_needed)
         {
            this.pass = true;
            this.completed.emit(true);
         }
         this.show_score_card= true;
    }
    saveLocaly(index: number){
      let choice;
      let previousIndex = index-1;
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
      console.log(this.choices);
    }

    loadTasks(){
      //when you go back show the tasks again
      this.showTasks.emit();
    }
    saveQuiz(){
      this.save.emit();
    }

    resetQuiz(){
      this.index = 0;
      this.points = 0;
      this.points_needed = 0;
      this.score = 0;
      this.pass = false;
      this.show_score_card = false;
      this.choices = [];
      this.question=this.questions[0];
      this.progress = 0;
      this.quizForm.reset();
    }
}
