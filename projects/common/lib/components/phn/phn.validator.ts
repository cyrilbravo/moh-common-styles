import {Directive, forwardRef, Input} from '@angular/core';
import {Validator, NG_VALIDATORS, FormControl} from '@angular/forms';

@Directive({
  selector: '[mod11Check][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => Mod11CheckValidator), multi: true
    }
  ],
  host: {'[attr.mod11Check]': 'mod11Check ? mod11Check : null'}
})

export class Mod11CheckValidator implements Validator {

  @Input('mod11Check') bcPhn: boolean;

  constructor(){

  }

  validate(control: FormControl): {[key: string]: boolean; }  {

    // Get value out of control
    const phn =  control.value != null ? control.value.replace(/\s/g, '') : '';

    // pre req checks
    if (phn == null ||
      phn.length < 1) return null;
    
    if (this.validatePHN(phn, this.bcPhn)) {
      // return null for no errors
      return null;
    }
    else {
      // return "true" if we have errors
      return {'mod11Check': true};
    }
  }

   /**
     *
     * @param phn Empty value (null, undefined, empty string) are treated as invalid.
     * @param isBCPhn
     */
    validatePHN (phn: string, isBCPhn: boolean = true, allowEmptyValue: boolean = false): boolean {
        // pre req checks
        if (phn === null || phn === undefined || phn.trim().length < 1){
          return allowEmptyValue;
        }
    
        // Init weights and other stuff
        const weights: number[] = [-1, 2, 4, 8, 5, 10, 9, 7, 3, -1];
        let sumOfRemainders = 0;
    
        // Clean up string
        phn = phn.trim();
    
        // Rip off leading zeros with a regex
        const regexp = new RegExp('^0+');
        phn = phn.replace(regexp, '');
    
        // Test for length
        if (phn.length != 10) {
          return false;
        }
        // Look for a number that starts with 9 if BC only
        if (isBCPhn &&
          phn[0] != '9') {
          return false;
        }
        // Number cannot have 9
        else if (!isBCPhn &&
          phn[0] == '9') {
            return false;
        }
    
        // Walk through each character
        for (let i = 0; i < phn.length; i++) {
    
          // pull out char
          const char = phn.charAt(i);
    
          // parse the number
          const num = Number(char);
          if (Number.isNaN(num)) return false;
    
          // Only use the multiplier if weight is greater than zero
          let result = 0;
          if (weights[i] > 0) {
            // multiply the value against the weight
            result = num * weights[i];
    
            // divide by 11 and save the remainder
            result = result % 11;
    
            // add it to our sum
            sumOfRemainders += result;
          }
        }
    
        // mod by 11
        const checkDigit = 11 - (sumOfRemainders % 11);
    
        // if the result is 10 or 11, it is an invalid PHN
        if (checkDigit === 10 || checkDigit === 11) return false;
    
        // Compare against 10th digit
        const finalDigit = Number(phn.substring(9, 10));
        if (checkDigit !== finalDigit) return false;
    
        // All done!
        return true;
      }

}
