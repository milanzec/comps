import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent {

  stats = [
    { value: 65, label: 'faves' },
    { value: 34655, label: 'views' },
    { value: 45, label: 'members' }
  ]

}
