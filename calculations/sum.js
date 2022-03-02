'use strict';

let sum = (a) => (b) => (b) ? sum(a+b) : a;

module.exports = {
    sum
};