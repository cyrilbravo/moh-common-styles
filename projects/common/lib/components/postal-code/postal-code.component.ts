import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MaskModel, LETTER, NUMBER, SPACE } from '../../../models/src/mask.model';


@Component({
  selector: 'common-postal-code',
  templateUrl: './postal-code.component.html',
  styleUrls: ['./postal-code.component.scss'],

  // Re-use the same ngForm that it's parent is using. The component will show
  // up in its parents `this.form`, and will auto-update `this.form.valid`
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm }]
})
export class PostalCodeComponent extends MaskModel {

  @Input() label: string = 'Postal Code';
  @Input() displayMask: boolean = true;
  @Input() postalCode: string ;
  @Output() onChange = new EventEmitter<string>();
  @Input() placeholder = 'V1V V1V';
  
  @Input() isBCPostalCode: boolean = false;
  public PostalCodeBCRegEx = '^[Vv]\\d[ABCEGHJ-NPRSTV-Zabceghj-nprstv-z][ ]?\\d[ABCEGHJ-NPRSTV-Zabceghj-nprstv-z]\\d$';
  
  public mask = [LETTER, NUMBER, LETTER, SPACE, NUMBER, LETTER, NUMBER];
  
  constructor() {
    super();
   }

  /*ngAfterViewInit(): void {
      if (this.postalCode && this.postalCode.length > 0) {
          this.onChange.emit(this.postalCode.trim());
      }
    
  }*/

  setPostalCode(value: string) {
    this.postalCode = value;
    this.onChange.emit(value);
    
  }

}
