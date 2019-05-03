import {Component, Input, EventEmitter, Output, ViewChild, OnInit} from '@angular/core';
import {NgForm, FormControl} from '@angular/forms';
import {Base} from '../../../models/src/base';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';


/** Interface for countries 
export interface CountryList {
  countryCode: string;
  description: string;
}*/

export interface ProvinceList {
  country: string;
  provinceCode: string;
  description: string;
}


@Component({
  selector: 'common-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.scss']
})
export class ProvinceComponent extends Base implements OnInit {

  @Input() showError: boolean = false;
  @Input() colSize: string = 'col-md-5';
  @Input() province: string;
  @Input() provinceList: ProvinceList[];
  /**
   * Include states from USA in the list.
   */
  @Input() hideStates: boolean;
  @Input() isRequired: boolean = false;
  @Input() disabled: boolean = false;
  @Input() provinceLabel: string = 'Province';
  @Output() onChange = new EventEmitter<any>();
  @Input() defaultProvince: string = 'British Columbia';
  /**
   * Include countries on the list.  Essentially combines MspCountryComponent
   * with MspProvinceComponent, for the cases where both data is required on one
   * input.
   */
  @Input() showCountries: boolean = false;

  @Input() provinceAndCountryData: Array<{code: string, name: string}> ;


  @ViewChild('formRef') form: NgForm;
  @ViewChild('provinceInput') inputField: FormControl;
  public onTouch: any;

  handleKeyboard(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    if (!input.value){
      this.province = '';
    }
  }
  /**
   * Use to remove BC from the list
   * 
   *    */
  @Input() exceptBC: boolean = false;


  private provinceData: Array<{code: string, name: string}> = [
    {
      code: 'AB',
      name: 'Alberta'
    },
    {
      code: 'BC',
      name: 'British Columbia'
    },
    {
      code: 'MB',
      name: 'Manitoba'
    },
    {
      code: 'NB',
      name: 'New Brunswick'
    },
    {
      code: 'NL',
      name: 'Newfoundland and Labrador'
    },
    {
      code: 'NS',
      name: 'Nova Scotia'
    },
    {
      code: 'NU',
      name: 'Nunavut'
    },
    {
      code: 'NT',
      name: 'Northwest Territories'
    },
    {
      code: 'ON',
      name: 'Ontario'
    },
    {
      code: 'PE',
      name: 'Prince Edward Island'
    },
    {
      code: 'QC',
      name: 'Quebec'
    },
    {
      code: 'SK',
      name: 'Saskatchewan'
    },
    {
      code: 'YT',
      name: 'Yukon'
    }
  ];


  private stateData: Array<{code: string, name: string}>= [
    {code: 'AL', name: 'Alabama'},
    {code: 'AK', name: 'Alaska'},
    {code: 'AZ', name: 'Arizona'},
    {code: 'AR', name: 'Arkansas'},
    {code: 'CA', name: 'California'},
    {code: 'CO', name: 'Colorado'},
    {code: 'CT', name: 'Connecticut'},
    {code: 'DE', name: 'Delaware'},
    {code: 'DC', name: 'District of Columbia'},
    {code: 'FL', name: 'Florida'},
    {code: 'GA', name: 'Georgia'},
    {code: 'HI', name: 'Hawaii'},
    {code: 'ID', name: 'Idaho'},
    {code: 'IL', name: 'Illinois'},
    {code: 'IN', name: 'Indiana'},
    {code: 'IA', name: 'Iowa'},
    {code: 'KS', name: 'Kansas'},
    {code: 'KY', name: 'Kentucky'},
    {code: 'LA', name: 'Louisiana'},
    {code: 'ME', name: 'Maine'},
    {code: 'MD', name: 'Maryland'},
    {code: 'MA', name: 'Massachusetts'},
    {code: 'MI', name: 'Michigan'},
    {code: 'MN', name: 'Minnesota'},
    {code: 'MS', name: 'Mississippi'},
    {code: 'MO', name: 'Missouri'},
    {code: 'MT', name: 'Montana'},
    {code: 'NE', name: 'Nebraska'},
    {code: 'NV', name: 'Nevada'},
    {code: 'NH', name: 'New Hampshire'},
    {code: 'NJ', name: 'New Jersey'},
    {code: 'NM', name: 'New Mexico'},
    {code: 'NY', name: 'New York'},
    {code: 'NC', name: 'North Carolina'},
    {code: 'ND', name: 'North Dakota'},
    {code: 'OH', name: 'Ohio'},
    {code: 'OK', name: 'Oklahoma'},
    {code: 'OR', name: 'Oregon'},
    {code: 'PA', name: 'Pennsylvania'},
    {code: 'RI', name: 'Rhode Island'},
    {code: 'SC', name: 'South Carolina'},
    {code: 'SD', name: 'South Dakota'},
    {code: 'TN', name: 'Tennessee'},
    {code: 'TX', name: 'Texas'},
    {code: 'UT', name: 'Utah'},
    {code: 'VT', name: 'Vermont'},
    {code: 'VA', name: 'Virginia'},
    {code: 'WA', name: 'Washington'},
    {code: 'WV', name: 'West Virginia'},
    {code: 'WI', name: 'Wisconsin'},
    {code: 'WY', name: 'Wyoming'}
  ];
  
  private countryData = Array<{code: string, name: string}>({ code: "CA", name: "Canada"});

  private get provinceStateData() {
    return Array().concat(this.provinceData, this.stateData);
  }

  constructor() {
    super();
  }

  ngOnInit() {
    let data = this.provinceData;
    if (this.hideStates === false) {
      data = Array().concat(data, this.stateData);
    }
    if (this.showCountries){
      data = Array().concat(data, this.countryData);
    }

    this.provinceAndCountryData = data ;
  }

    // to handle user typing a non-dropdown value.. used in mailing address where province cant be a drop down item for non-canada countires
    typeaheadNoResults(event: boolean): void {
        if (event) {
          this.onChange.emit(this.province.trim());
        }
    }

    updateModel(event: TypeaheadMatch): void {
        if (event && event.item) {
            const eventVal: string = event.item['name'].trim();
            this.province = eventVal;
            this.onChange.emit(eventVal);
        }
    }

    isValid(): boolean {

        if (this.province && this.province.trim().length > 0 ) {
          return true;
        }
        return false;
    }
    
    setProvince(value: string) {
      this.province = value;
      this.onChange.emit(value);
      //this.onModelChange(this.address);
      this.onTouch();
    }

}
