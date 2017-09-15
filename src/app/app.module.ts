import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {HomeModule} from './home/home.module';
import {PathwayTasksModule} from './pathway-tasks/pathway-tasks.module';

import { AngularSvgIconModule } from 'angular-svg-icon';// for svg icons

import {
  //components and services go here
  FooterComponent,
  HeaderComponent,
  ApiService,
  PathwaysService,
} from './shared'

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    //modules go here
     AngularSvgIconModule,
     BrowserModule,
     HomeModule,
     PathwayTasksModule,
     rootRouting,
     ],
  providers: [
    //services go here
    ApiService,
    PathwaysService,

     ],


  bootstrap:    [ AppComponent ]
})
export class AppModule { }
