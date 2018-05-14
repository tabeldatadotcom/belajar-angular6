import {Component, OnInit} from '@angular/core';
import {Master} from '../master/master.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  value: Master;

  ngOnInit() {
    this.value = new Master(null, null);
  }

  kirimData(data) {
    console.log(this.value);
    this.value = new Master(null, null);
  }

}
