import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-icon',
  templateUrl: './icon.component.html',
  styles: ['svg-icon {min-width: 1em}']
})
export class IconComponent {
  icon: string;

  @Input() svgColor: string;
  @Input() size: string;
  @Input() set svgIcon(icon:string){
       this.icon = `src/app/shared/Entypo+/Entypo+/${icon}.svg`;

    }



}
