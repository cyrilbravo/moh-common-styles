import {
  Component, Input, Output, EventEmitter, ViewChild, OnChanges, SimpleChanges,
  ChangeDetectorRef
} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Person, Gender} from '../../../models/src/person.model';
import {UUID} from 'angular2-uuid';
import {Base} from '../../../models/src/base';

@Component({
  selector: 'common-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent extends Base {

  @ViewChild('formRef') form: NgForm;

  // Expose type to template
  Gender: typeof Gender = Gender;

  @Input('person') person: Person;
  @Input() showError: boolean;
  @Input() label: string = 'Gender 111';

  @Output() onChange = new EventEmitter<any>();

  /**
   * Generate uuid for use in element's ID
   * 
   */
  uuid = UUID.UUID();

  constructor() {
    super();
  }

  genderChange(evt: Gender){
    this.onChange.emit(evt);
    //this.emitIsFormValid(true);
  }

  isValid(): boolean {
    return this.person && this.person.gender != null;
  }

}
