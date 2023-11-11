"use strict";
// function nums1to10() {
//     let result = "";
//     for (let i = 1; i <= 10; i++) {
//       result += i;
//       if (i < 10) {
//         result += "|";
//       }
//     }
//     console.log(result);
// }
// nums1to10();
function strLength(str) {
    let result = 0;
    for (let i = 1; i <= str.length; i++) {
        result++;
    }
    console.log(result);
}
strLength("chocolate");
