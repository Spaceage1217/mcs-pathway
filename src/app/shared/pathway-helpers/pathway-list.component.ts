import { Component, OnInit } from '@angular/core';

import { Pathway,  } from '../models';
import { PathwaysService } from '../services';
@Component({
  selector: 'pathway-list',
  templateUrl: './pathway-list.component.html',
  styleUrls: ['./pathway-list.component.scss']
})
export class PathwayListComponent implements OnInit {
  pathways:Pathway[];
  loading: boolean = false;
  constructor(private pathwaysService:PathwaysService
    ) {}

  ngOnInit() {
    this.loading = true;
   this.pathwaysService.get().subscribe(
     (pathways:Pathway[]) =>{
       this.pathways = pathways;
       console.log(pathways);
       this.loading = false;
     }
   )
  }

}
