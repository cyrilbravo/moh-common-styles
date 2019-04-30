import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { Base } from '../../../models/src/base';

@Component({
  selector: 'common-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends Base implements OnInit {

  @Input() model: boolean = true ;
  @Input() required: boolean = true;
  @Input() disabled: boolean = false;
  @Input() label: string = 'Default Checkbox';
  @Input() checked: boolean =  false ;
  @Output() dataChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('checkbox') checkbox: ElementRef;

  constructor() { super(); }

  ngOnInit() {
  }

  setCheckboxVal(event: boolean) {
    console.log(event);
    this.model = event;
    this.dataChange.emit(this.model);
  }

  focus() {
    this.checkbox.nativeElement.focus();
  }

}
