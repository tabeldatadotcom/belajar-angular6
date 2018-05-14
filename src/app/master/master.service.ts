import {Injectable} from '@angular/core';
import {Master} from './master.model';

@Injectable()
export class MasterService {

  data: Master = new Master(null, null);

  constructor() {
  }

  setTag(value: string) {
    this.data.tag = value;
  }

  setId(value: number) {
    this.data.id = value;
  }

}
