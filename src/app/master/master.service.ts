import {Injectable} from '@angular/core';
import {Master} from './master.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MasterService {

  data: Master = new Master(null, null);

  constructor(private _http: HttpClient) {
  }

  getAnggota() {
    return this._http.get('/api/anggota/2');
  }

  setTag(value: string) {
    this.data.tag = value;
  }

  setId(value: number) {
    this.data.id = value;
  }

}
