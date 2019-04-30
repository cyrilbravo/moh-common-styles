import {ChangeDetectorRef,ViewChild, ElementRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlContainer, NgForm} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

import { MaskModel, NUMBER, SPACE } from '../../../models/src/mask.model';


@Component({
  selector: 'common-phn',
  templateUrl: './phn.component.html',
  styleUrls: ['./phn.component.scss']
})
export class PhnComponent extends MaskModel implements OnInit {

  @Input() phnList: string[] = [];
  @Input() bcPhn: boolean = false;
  @Input() showError: boolean = false;
  @Output() phnChange = new EventEmitter<string>();
  @Input() placeholder: string = '1111 111 111';
  @Input() required: boolean = false;
  @Input() label: string = 'Personal Health Number (PHN)';
  @Input() phnTextmask: Array<any>;
  @ViewChild('phnRef') phnRef: ElementRef;

  @Output() uniquePhnError: EventEmitter<boolean> = new EventEmitter<boolean>();

  public mask = [NUMBER, NUMBER, NUMBER, NUMBER, SPACE, NUMBER, NUMBER, NUMBER, SPACE, NUMBER, NUMBER, NUMBER];
  
  public uniquePhnErrMsg: string = 'Personal Health Number (PHN) was already used for another family member.';

  public uniquePhns: boolean = true;

  private _regex: RegExp = /^[0-9 ]*$/;

  /**
   * We use rxjs for performance benefits to reduce the calls to checking uniqueness of PHNs
   */
  private checkPhnUniqueness = new BehaviorSubject(null );

  constructor(private cdref: ChangeDetectorRef ) {
    super();
  }

  ngOnInit() {
    // Setup listener
    this.checkPhnUniqueness
        .pipe(
            distinctUntilChanged(),
            debounceTime(200),
        )
        .subscribe(list => {

          // List text is complete - no placeholder '_' present
          if ( list && list .filter( x => this._regex.test(x) ).length > 1 ) {

            this.uniquePhns = this.isUnique( list  );
            this.uniquePhnError.emit( (this.uniquePhns ? false : true) );

            // Since we use debounceTime(), updates can happen after Angular change
            // detection is done, so we have to manually invoke it.
            this.cdref.detectChanges();
          }
        });
  }

  ngOnChanges(changes) {
    //console.log( 'changes: ', changes );

    // text is complete - no placeholder '_' present
    if ( changes.value && this._regex.test( this.value ) ) {

      // check PHN uniqueness
      this.checkPhnUniqueness.next(this.phnList);

    }
  }

  isUnique( list: string[] ): boolean {
    const sortedList = list.sort().filter( x => x );
    const uniqueList = sortedList.filter( this.filterUnique );
    return ( uniqueList.length === sortedList.length );
  }

  private filterUnique(x, i, a): boolean {
    return x && a.indexOf( x ) === i;
  }

  ngOnDestroy(){
    this.checkPhnUniqueness.unsubscribe();
  }

}
