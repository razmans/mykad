# MyKad Validator

This JavaScript tool helps validate a Malaysian MyKad number and provides useful information such as the holder's:

- Age
- Gender
- Date of Birth
- State of Birth (including a reference to all Malaysian states)

## Features

- **MyKad Validation:** Ensures the MyKad number is valid.
- **Age Calculation:** Determines the age of the MyKad holder based on their date of birth.
- **Gender Identification:** Retrieves the gender of the MyKad holder.
- **Date of Birth:** Extracts and displays the MyKad holder's birth date.
- **State of Birth:** Identifies the state of birth based on the MyKad number.

## Installation

1. Deno
` deno add jsr:@razmans/mykad `

2. npm
` npx jsr add @razmans/mykad `

3. yarn
` yarn dlx jsr add @razmans/mykad `

4. pnpm
` pnpm dlx jsr add @razmans/mykad `

5. bun
` bunx jsr add @razmans/mykad `

## Usage

To use the tool, import the necessary module and call the function with a valid MyKad number:

```javascript
import { 
    mykadValidator, 
    mykadAge, 
    mykadAge, 
    mykadDOB, 
    mykadState, 
    mykadGender } from '@razmans/mykad';

const myKadNumber = 'your-mykad-number-here';
const validate = mykadValidator(myKadNumber); // Example: true/false
const age=mykadAge(myKadNumber); // Example: 30
const dob=mykadDOB(myKadNumber); // Example: '1994-02-03'
const state=mykadState(myKadNumber); // Example: 'WP Kuala Lumpur'
const gender=mykadGender(myKadNumber):// Example: 'F' or 'M'

```



## States in Malaysia

The tool includes the full list of Malaysian states and regions for accurate identification of the state of birth. These include:

```javascript
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
  WPPutrajaya = 'WP Putrajaya'
}

```
## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue to suggest improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

---

Feel free to customize the repository link, license, and contributing sections based on your preferences.