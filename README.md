# **Type-check**

## A small set of functions to check your values for a specific type

1. Installation

```bash
npm install @pnmasharov/type-check
```

2. Usage

```JavaScript
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
