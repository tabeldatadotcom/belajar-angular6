import {Component, Input} from '@angular/core';
import {Master} from '../master/master.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent {
  @Input('nilai')
  val: Master;

  @Input()
  index: string;

}
