import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MaskModel, NUMBER, SPACE } from '../../../models/src/mask.model';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'common-sin',
  templateUrl: './sin.component.html',
  styleUrls: ['./sin.component.scss']
})
export class SinComponent extends MaskModel implements OnInit {

  @Input() sinList: string[] = [];
  @Input() label: string = 'Social Insurance Number (SIN)';

  @Output() uniqueSinError: EventEmitter<boolean> = new EventEmitter<boolean>();

  public mask = [NUMBER, NUMBER, NUMBER, SPACE, NUMBER, NUMBER, NUMBER, SPACE, NUMBER, NUMBER, NUMBER];
  public placeholder = '111 111 111';


  public uniqueSinErrMsg: string = 'Social Insurance Number (SIN) was already used for another family member.';

  public uniqueSins: boolean = true;

  private _regex: RegExp = /^[0-9 ]*$/;

  /**
   * We use rxjs for performance benefits to reduce the calls to checking uniqueness of PHNs
   */
  private checkSinUniqueness = new BehaviorSubject(null );

  constructor(private cdref: ChangeDetectorRef ) {
    super();
  }

  ngOnInit() {
    // Setup listener
    this.checkSinUniqueness
        .pipe(
            distinctUntilChanged(),
            debounceTime(200),
        )
        .subscribe(list => {

          // List text is complete - no placeholder '_' present
          if ( list && list .filter( x => this._regex.test(x) ).length > 1 ) {

            this.uniqueSins = this.isUnique( list  );
            this.uniqueSinError.emit( (this.uniqueSins ? false : true ) );

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

      // check SIN uniqueness
      this.checkSinUniqueness.next(this.sinList);

    }
  }

  ngOnDestroy(){
    this.checkSinUniqueness.unsubscribe();
  }

  isUnique( list: string[] ): boolean {
    const sortedList = list.sort().filter( x => x );
    const uniqueList = sortedList.filter( this.filterUnique );
    return ( uniqueList.length === sortedList.length );
  }

  private filterUnique(x, i, a): boolean {
    return x && a.indexOf( x ) === i;
  }
  

}
