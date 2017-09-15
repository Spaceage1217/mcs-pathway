import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { PathwayTasksComponent } from './pathway-tasks.component';
import { PathwayTasksResolver } from './pathway-resolver.service';
import { SharedModule } from '../shared';



const pathwayTasksRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'paths/:id',
    component: PathwayTasksComponent,

    resolve: {
      article: PathwayTasksResolver
    }
  }
]);


@NgModule({
  imports: [
    pathwayTasksRouting,
    SharedModule
  ],
  declarations: [
    PathwayTasksComponent,
  ],

  providers: [
    PathwayTasksResolver
  ]
})
export class PathwayTasksModule {}
