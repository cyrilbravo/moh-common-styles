import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreBreadcrumbComponent } from './components/core-breadcrumb/core-breadcrumb.component';
import { FormActionBarComponent } from './components/form-action-bar/form-action-bar.component';
import { PageFrameworkComponent } from './components/page-framework/page-framework.component';
import { PasswordComponent } from './components/password/password.component';
import { WizardProgressBarComponent } from './components/wizard-progress-bar/wizard-progress-bar.component';
import { NgForm, FormsModule } from '@angular/forms';
import { ProgressbarModule, ModalModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { DateComponent } from './components/date/date.component';
import { DayValidationDirective } from './components/date/day-validation.directive';
import { DateFieldFormatDirective } from './components/date/date-field-format.directive';
import { YearValidateDirective } from './components/date/year-validate.directive';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { FormSubmitBarComponent } from './components/form-submit-bar/form-submit-bar.component';
import { TextMaskModule } from 'angular2-text-mask';
import { PostalCodeComponent } from './components/postal-code/postal-code.component';
import { PageSectionComponent } from './components/page-section/page-section.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { PhnComponent } from './components/phn/phn.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { PhoneNumberComponent } from './components/phone-number/phone-number.component';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { SinComponent } from './components/sin/sin.component';
import { GenderComponent } from './components/gender/gender.component';
import { AmountComponent } from './components/amount/amount.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { NameComponent } from './components/name/name.component';
import { AddressComponent } from './components/address/address.component';
import { TypeaheadModule  } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AccordionCommonComponent } from './components/accordion/accordion.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProgressbarModule.forRoot(),
    RouterModule,
    NgxMyDatePickerModule.forRoot(),
    ModalModule.forRoot(),
    TextMaskModule,
    NgSelectModule,
    TypeaheadModule.forRoot(),
    AccordionModule.forRoot()
  ],
  declarations: [
    CoreBreadcrumbComponent,
    FormActionBarComponent,
    PageFrameworkComponent,
    PasswordComponent,
    WizardProgressBarComponent,
    DateComponent,
    DayValidationDirective,
    DateFieldFormatDirective,
    YearValidateDirective,
    DatepickerComponent,
    FileUploaderComponent,
    ThumbnailComponent,
    FormSubmitBarComponent,
    PostalCodeComponent,
    PageSectionComponent,
    DropdownComponent,
    CalculatorComponent,
    PhnComponent,
    CheckboxComponent,
    PhoneNumberComponent,
    PersonCardComponent,
    SinComponent,
    GenderComponent,
    AmountComponent,
    ButtonGroupComponent,
    AddressCardComponent,
    ToggleComponent,
    NameComponent,
    AddressComponent,
    AccordionCommonComponent,
    ButtonComponent
  ],
  exports: [
    CoreBreadcrumbComponent,
    FormActionBarComponent,
    PageFrameworkComponent,
    PasswordComponent,
    WizardProgressBarComponent,
    DateComponent,
    DayValidationDirective,
    DateFieldFormatDirective,
    YearValidateDirective,
    DatepickerComponent,
    FileUploaderComponent,
    ThumbnailComponent,
    FormSubmitBarComponent,
    PostalCodeComponent,
    PageSectionComponent,
    DropdownComponent,
    CheckboxComponent,
    PhoneNumberComponent,
    PersonCardComponent,
    SinComponent,
    GenderComponent,
    AmountComponent,
    ButtonGroupComponent,
    CalculatorComponent,
    PhnComponent,
    NameComponent,
    AddressComponent,
    AccordionCommonComponent,
    ButtonComponent
  ],
  providers: [
    NgForm
  ]
})
export class SharedCoreModule { }
