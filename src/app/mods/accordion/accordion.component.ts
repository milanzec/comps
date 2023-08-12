import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  @Input() list: any = []

  listItemIndex = 0

  onClick(index:number){
    if (index === this.listItemIndex) {
      this.listItemIndex = -1
    } else {
      this.listItemIndex = index
  }
    }
}
