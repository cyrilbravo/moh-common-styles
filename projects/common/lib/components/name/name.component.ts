import {Component, Input, Output, EventEmitter, ViewChild, ChangeDetectorRef} from '@angular/core';
import {Person} from '../../../models/src/person.model';
import {NgForm} from '@angular/forms';
import {Base} from '../../../models/src/base';
import {debounceTime} from "rxjs/operators";

export interface PasswordErrorMsg {
  required?: string;
  pattern?: string;
}

@Component({
  selector: 'common-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent extends Base {

  @Input() person: Person;
  @Input() showError: boolean;
  @Input() firstNamelabel: string = 'Firsta Name';
  @Input() middleNamelabel: string = 'Middle Name';
  @Input() lastNamelabel: string = 'Last Name';

  @Output() onChange = new EventEmitter<any>();
  @ViewChild('formRef') form: NgForm;
  Person: typeof Person = Person;

  public NameRegEx: string = '^[a-zA-Z][a-zA-Z\\-.\' ]*$';

  public errMsg: PasswordErrorMsg ;
  // default messages
  private requiredMsgSeg: string = 'is required';
  private pattern: string = 'Must begin with a letter followed by a letters, hyphen, period, apostrophe, or blank character';
  
  

  constructor() {
    super();
  }
  
  ngOnInit() {
    this.errMsg =    {
      required: this.requiredMsgSeg,
      pattern: this.pattern
    };
  }

  ngAfterViewInit(): void {
      // https://github.com/angular/angular/issues/24818
      this.form.valueChanges.pipe(debounceTime(0)).subscribe((values) => {
        this.onChange.emit(values);
      }
    );
  }

}
