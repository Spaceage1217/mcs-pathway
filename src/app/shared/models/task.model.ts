import {Question} from './question.model';
export class Task{
    id:number;
    category: string;
    title: string;
    disc: string;
    link: string;
    diffculty: string;
    questionsCorrect: number;
    questionsNeeded: number;
    started: boolean;
    completed: boolean;
    questions?:Array<Question> =[];
  }
