# What is this?

This npm library can be used to make the calculation easy. It has differents kind of calculations, like "sum of n numbers" and etc.

# Installation 

`npm i parameswar --save`

Then...

```
const { calculations } = require('parameswar');
const { sum } = calculations;

const sumObj = new sum();

// sum(1)(2)(3)(4)..( n)()
const result = sumObj.getSum(1)(2)(5)();
console.log('result ', result);

```

