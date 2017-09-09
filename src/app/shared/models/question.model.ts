export class Question{
      questionID: number;
      question:string;
      correctAnswer:string;
      choices:[{
        a:string;
        b:string;
        c:string;
        d:string;
      }]
   }