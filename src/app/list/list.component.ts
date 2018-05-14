import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() {
    console.log('ini contruktor');

  }

  ngOnInit() {
    console.log('ini ng on init');
  }

}
