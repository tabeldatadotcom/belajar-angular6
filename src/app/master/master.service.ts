import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Master} from './master.model';

@Injectable()
export class MasterService {

  constructor(private _http: HttpClient) {
  }

  getAnggota(idAnggota: number) {
    return this._http.get(`/api/anggota/${idAnggota}`);
  }

  getListAnggota() {
    return this._http.get('/api/anggota/');
  }

  saveAnggota(anggota: Master) {
    return this._http.post('/api/anggota/', anggota);
  }

  updateAnggota(anggota: Master) {
    return this._http.put('/api/anggota/', anggota);
  }

  deleteAnggota(idAnggota: number) {
    return this._http.delete(`/api/anggota/${idAnggota}`);
  }

}
