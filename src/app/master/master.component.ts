import {Component, OnInit} from '@angular/core';
import {Master} from './master.model';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html'
})
export class MasterComponent implements OnInit {

  data: Master[];
  title: string;

  constructor() {

  }

  ngOnInit() {
    this.title = 'Tags';
    this.data = [
      new Master(1, 'Java'),
      new Master(2, 'PHP'),
      new Master(3, 'Javascript'),
      new Master(4, 'Android'),
      new Master(5, 'IOS'),
      new Master(6, 'Phyton'),
      new Master(7, 'Swift'),
      new Master(8, '.NET'),
      new Master(9, 'Angular'),
      new Master(10, 'Vue')
    ];
  }

}
