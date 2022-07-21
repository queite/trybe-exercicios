"use strict";
function myFilter(array, callbackFilter) {
    let newArray = [];
    for (let i = 0; i < array.length; i += 1) {
        if (callbackFilter(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(myFilter([1, 2, 3], (item) => item < 3));
console.log(myFilter(["a", "b", "c"], (item) => item !== "a"));
