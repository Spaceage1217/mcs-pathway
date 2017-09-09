import {Task} from './task.model'
export class Pathway{
  pathID:number;
  title: string;
  disc: string;
  image: string;//for now...
  started: boolean;
  completed: boolean;
  tasks:Array<Task> =[];
}
