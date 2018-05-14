import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Master} from '../master/master.model';
import {MasterService} from '../master/master.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  constructor(private _service: MasterService) {
  }

  @Output()
  submited = new EventEmitter<Master>();

  value: Master;

  ngOnInit() {
    this.value = new Master(null, null);
  }

  kirimData(data) {
    console.log(this._service.data);
    this.submited.emit(this.value);
    this.value = new Master(null, null);
  }

}
