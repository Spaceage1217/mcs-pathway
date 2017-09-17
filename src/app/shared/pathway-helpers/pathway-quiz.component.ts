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
      this.question=this.questions[0];
      this.quizForm = new FormGroup({
        'choice': new FormControl(null),
      });
      console.log(this.question);
    }


    nextQuestion(){
     if(this.index<this.questions.length){
        this.index = this.index + 1;
        this.question=this.questions[this.index];
      }
      console.log(this.index);
      this.saveLocaly(this.index);
    }
    previousQuestion(){
      if(this.index>0){
        this.index = this.index-1;
        this.question=this.questions[this.index];
      }
    }

    onSubmit(){
        this.saveLocaly(this.index+1);
        let that = this;
        let number_of_questions = this.questions.length;
         this.questions.forEach(function(question,index)
           {
             if(question.choices[that.choices[index]-1].correct)
                  that.points+=1;
         });
         this.score = (this.points/number_of_questions)*100;
         this.points_needed = Math.floor(number_of_questions * .8);
         console.log("you scored"+ this.score);
         console.log('you got '+ this.points+ ' you needed' + this.points_needed);
         if( this.points >= this.points_needed)
         {

            this.completed.emit(true);
         }

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
}
