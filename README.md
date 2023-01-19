# **Type-check**

## A small set of functions to check your values for a specific type


1. Installation

```bash
npm install @pnmasharov/type-check
```


2. Usage

```javascript
import {
  checkIsString,
  checkIsNumber,
  checkIsNumberPositive,
  checkIsNumberNegative,
  checkIsZero,
  checkIsFinite,
  checkIsArray,
  checkIsObject,
  checkIsNull,
  checkIsUndefined,
  checkIsFunction,
} from "@pnmasharov/type-check"

// or
// const { checkIsNumber } = require("@pnmasharov/type-check")

let amount = 13,2
if (checkIsNumber(amount)) {
  // here you can work with your number
}
```


3. Testing

  - install jest globally:
  ```bash
  npm install --global jest
  ```

  - run tests: 
  ```bash
  npm run test
  ```