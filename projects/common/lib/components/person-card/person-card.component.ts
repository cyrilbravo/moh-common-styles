import {Component, Input} from '@angular/core';
import {Person, Activities, StatusInCanada} from '../../../models/src/person.model';

@Component({
  selector: 'common-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent {

  @Input() person: Person;
  @Input() editRouterLink: string;
  @Input() customTitle: string;
  @Input() customLinkTitle: string;
  @Input() accountCard: boolean = false;

  public schoolAddress: string  = 'School address:';

  get movedFromLabel(): string {
    if (this.person.status == StatusInCanada.TemporaryResident ||
      this.person.currentActivity == Activities.MovingFromCountry) {
      return 'Moved from country:';
    }
    else {
      return 'Moved from province:';
    }
  }

}
