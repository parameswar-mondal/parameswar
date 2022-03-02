'use strict';

/* extends calculations.sum */
class sum {
    constructor(obj = {}) {
        this.getSum;
    }

    getSum = function (a) {
        return function (b) {
            if (b) {
                return getSum(a + b);
            }
            return a;
        }
    }

}

module.exports = sum;