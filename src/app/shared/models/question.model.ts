export class Question{
      questionID: number;
      question:string;
      selected:number;
      choices:[{
        choiceID:number;
        answer:string;
        correct: boolean;
        selected:boolean;
      }]
   }
