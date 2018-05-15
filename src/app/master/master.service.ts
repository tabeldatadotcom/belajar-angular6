import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MasterService {

  constructor(private _http: HttpClient) {
  }

  getAnggota() {
    return this._http.get('/api/anggota/2');
  }

  getListAnggota() {
    return this._http.get('/api/anggota/');
  }

}
