import {Component, OnInit} from '@angular/core';
import {MasterService} from './master.service';
import {Master} from './master.model';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html'
  // providers: [MasterService]
})
export class MasterComponent implements OnInit {

  anggota: Master;


  constructor(private _service: MasterService) {
    this.anggota = new Master();
  }


  ngOnInit() {
    this._service.getAnggota()
      .subscribe((dataResponse: Master) => {
        this.anggota = dataResponse;
      });

  }
}
