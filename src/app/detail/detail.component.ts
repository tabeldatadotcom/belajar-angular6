import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Master} from '../master/master.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  @Output()
  submited = new EventEmitter<Master>();

  value: Master;

  ngOnInit() {
    this.value = new Master(null, null);
  }

  kirimData(data) {
    this.submited.emit(this.value);
    this.value = new Master(null, null);
  }

}
