import { Component } from '@angular/core';

@Component({
  selector: 'app-colections-home',
  templateUrl: './colections-home.component.html',
  styleUrls: ['./colections-home.component.css']
})
export class ColectionsHomeComponent {

  data = [
    { name: 'Lazar', age: 7, job: 'geograph', employed: true },
    { name: 'Todor', age: 5, job: 'bankar', employed: true },
    { name: 'Milan', age: 39, job: 'programmer', employed: false }
  ]

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Has a job?' }

  ]

}
