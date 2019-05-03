import {ChangeDetectorRef, ElementRef, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Base} from '../../../models/src/base';

@Component({
  selector: 'common-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent extends Base implements OnInit {


  @Input() radioLabels: Array<{label: string, value: string}> ; 
  
  /* radioLabels value should be passed in the below format 
  = [
    {
      "label": "Myself only",
      "value": "MyselfOnly"
    },
    {
      "label": "All members on my MSP account",
      "value": "AllMembers"
    },
    {
      "label": "One specific member on my MSP account",
      "value": "SpecificMember"
    }];*/
  
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() label: string = 'Status';
  @Input() value: string ; //= 'MyselfOnly';

  @Output() onStatusChange: EventEmitter<string> = new EventEmitter<string>();

constructor() { super(); }

setStatus(value: string) {
  this.onStatusChange.emit(value);
}

ngOnInit() {
}

}
