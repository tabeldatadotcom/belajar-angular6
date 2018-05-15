import {Component, OnInit} from '@angular/core';
import {MasterService} from './master.service';
import {Master} from './master.model';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html'
  // providers: [MasterService]
})
export class MasterComponent implements OnInit {

  list: Master[];


  constructor(private _service: MasterService) {
    this.list = [];
  }


  ngOnInit() {
    this._service.getListAnggota().subscribe((data: Master[]) => {
      this.list = data;
    });

  }
}
