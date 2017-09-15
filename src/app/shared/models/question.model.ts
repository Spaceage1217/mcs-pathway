export class Question{
      questionID: number;
      question:string;
      choices:[{
        choiceID:number;
        answer:string;
        correct: boolean;
        selected:boolean;
      }]
   }
