/**
 * @example
 * 
 * This is an example of how to use the functions in this package.
 * 
 * ```ts 
 * import { 
 * mykadValidator, 
 * mykadAge, 
 * mykadAge, 
 * mykadDOB, 
 * mykadState, 
 * mykadGender } from '@razmans/mykad';
 * 
 * const myKadNumber = 'your-mykad-number-here';
 * const validate = mykadValidator(myKadNumber); // Example: true/false
 * const age=mykadAge(myKadNumber); // Example: '30'
 * const dob=mykadDOB(myKadNumber); // Example: '1994-02-03'
 * const state=mykadState(myKadNumber); // Example: 'WP Kuala Lumpur'
 * const gender=mykadGender(myKadNumber):// Example: 'F' or 'M'
```
 */

/**
 * MyKad Validator
 * @module mykadValidator
 * @param mykad MyKad number
 * @returns Boolean value
 */

/** Validate MyKad number */
export function mykadValidator(mykad: string): boolean {
  const regex = /^[0-9]{6}-[0-9]{2}-[0-9]{4}$/;
  return regex.test(mykad);
}

/**
 * MyKad Age Checker
 * @module mykadAge
 * @param mykad MyKad number
 * @returns Age of the person
 */

/** Determine a person's age based on MyKad number */
export function mykadAge(mykad: string): number {
  if (!mykadValidator(mykad)) {
    return 0;
  }
  const year = parseInt(mykad.substring(0, 2));
  const currentYear = new Date().getFullYear() % 100;

  if (year > currentYear) {
    return currentYear + 100 - year;
  } else {
    return currentYear - year;
  }
}

/**
 * MyKad Details Checker
 * @module mykadDOB
 * @param mykad MyKad number
 * @returns String date in the format of YYYY-MM-DD
 */

/** Determine a person's date of birth based on MyKad number */
export function mykadDOB(mykad: string): string {
  if (!mykadValidator(mykad)) {
    return 'MYKAD INVALID';
  }
  const year = parseInt(mykad.substring(0, 2));
  const month = parseInt(mykad.substring(2, 4))
    ? '0' + parseInt(mykad.substring(2, 4))
    : parseInt(mykad.substring(2, 4));
  const day = parseInt(mykad.substring(4, 6))
    ? '0' + parseInt(mykad.substring(4, 6))
    : parseInt(mykad.substring(4, 6));
  const currentYear = new Date().getFullYear() % 100;

  if (year > currentYear) {
    return `19${year}-${month}-${day}`;
  } else {
    return `20${year}-${month}-${day}`;
  }
}

/**
 * MyKad Gender Checker
 * @module mykadGender
 * @param mykad MyKad number
 * @returns Gender string 'F' or 'M'
 */

/** Determine a person's gender based on MyKad number */
export function mykadGender(mykad: string): string {
  if (!mykadValidator(mykad)) {
    return 'MYKAD INVALID';
  }
  return parseInt(mykad.split('-')[1]) % 2 === 0 ? 'M' : 'F';
}

/**
 * MyKad State Checker
 * @module mykadState
 * @param mykad MyKad number
 * @returns String of the state
 */
/** Determine a person's state based on MyKad number */
export function mykadState(mykad: string): string {
  if (!mykadValidator(mykad)) {
    return 'MYKAD INVALID';
  }
  const stateCode = parseInt(mykad.split('-')[1]);
  const state = {
    1: State.Johor,
    2: State.Kedah,
    3: State.Kelantan,
    4: State.Melaka,
    5: State.NegeriSembilan,
    6: State.Pahang,
    7: State.PulauPinang,
    8: State.Perak,
    9: State.Perlis,
    10: State.Selangor,
    11: State.Terengganu,
    12: State.Sabah,
    13: State.Sarawak,
    14: State.WPKualaLumpur,
    15: State.WPLabuan,
    16: State.WPPutrajaya,
    71: State.NotInMalaysia,
    72: State.NotInMalaysia
  };
  return state[stateCode] ? state[stateCode] : State.NotInMalaysia;
}

/**
 * @module State
 * @example
 * ```ts
 * import { State } from '@razmans/mykad';
 *
 * const state = State.Johor;   // Example: 'Johor'
 * ```
 * Enum for States in Malaysia
 * */
export enum State {
  Johor = 'Johor',
  Kedah = 'Kedah',
  Kelantan = 'Kelantan',
  Melaka = 'Melaka',
  NegeriSembilan = 'Negeri Sembilan',
  Pahang = 'Pahang',
  PulauPinang = 'Pulau Pinang',
  Perak = 'Perak',
  Perlis = 'Perlis',
  Selangor = 'Selangor',
  Terengganu = 'Terengganu',
  Sabah = 'Sabah',
  Sarawak = 'Sarawak',
  WPKualaLumpur = 'WP Kuala Lumpur',
  WPLabuan = 'WP Labuan',
  WPPutrajaya = 'WP Putrajaya',
  NotInMalaysia = 'Not in Malaysia'
}
