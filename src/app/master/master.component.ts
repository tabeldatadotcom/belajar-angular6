import {Component, OnInit} from '@angular/core';
import {MasterService} from './master.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html'
  // providers: [MasterService]
})
export class MasterComponent implements OnInit {


  constructor(private _service: MasterService) {

  }


  ngOnInit() {
    this._service.getAnggota().subscribe(data => {
      console.log(data);
    });

  }
}
