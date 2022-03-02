'use strict';

/* extends calculations.sum */
class sum {
    constructor(obj = {}) {
        this.obj = obj;
    }

    // getSum(1)(2)(3)(4)(5)();
    getSum = function (a) {
        let reference = this;
        return function (b) {
            if (b) {
                return reference.getSum(a + b);
            }
            return a;
        }
    }

}

module.exports = sum;