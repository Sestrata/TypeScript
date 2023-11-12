"use strict";
class CompareElements {
    constructor(elements) {
        this.elements = elements;
    }
    compare(comparator) {
        let count = 0;
        for (const element of this.elements) {
            if (element === comparator) {
                count++;
            }
        }
        return count;
    }
}
let c1 = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);
console.log(c1.compare('b'));
let c2 = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
console.log(c2.compare(1));
