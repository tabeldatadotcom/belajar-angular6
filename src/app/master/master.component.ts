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

  loadData() {
    this._service.getListAnggota().subscribe((data: Master[]) => {
      this.list = data;
    });
  }


  ngOnInit() {
    this.loadData();

  }

  saveData() {
    const anggota = {nama: 'Yusuf', tanggalLahir: new Date(), alamat: 'bandung', kode: null};
    this._service.saveAnggota(anggota).subscribe(
      data => {
        console.log(data);
        this.loadData();
      }, error => {
        console.log('Error coba lagi di lain waktu!');
      });
  }
}
