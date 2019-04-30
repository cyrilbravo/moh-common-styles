import {Component, Input} from '@angular/core';
import {Address} from '../../../models/src/address.model';

@Component({
  selector: 'common-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss']
})
export class AddressCardComponent  {


  @Input() address: Address;
  @Input() label: string;

  constructor() {
  }


}
