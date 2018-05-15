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

  saveData() {
    this._service.saveAnggota(
      {nama: 'Yusuf', tanggalLahir: new Date(), alamat: 'bandung', kode: '1'}
    ).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
}
