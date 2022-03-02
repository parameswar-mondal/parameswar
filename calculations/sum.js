'use strict';

/* extends calculations.sum */
class sum {
    constructor(obj = {}) {
        this.obj = obj;
    }

    getSum = (a) => (b) => (b) ? getSum(a+b) : a;

}

module.exports = sum;