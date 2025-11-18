/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Example:

Array A: ["diamond", "stick", "apple"]

Array B: ["stick", "emerald", "bread"]

Result: ["diamond", "apple", "emerald", "bread"]

User Stories:

The function `diffArray`  returns an array.
The function takestwo arguments, both of which are arrays.
The function makes use of the `filter` method.
The function returns the symmetric difference of the two arrays.
The function returns an empty array if there is no symmetric difference.

*/

const diffArray = (aArray, bArray) => {
    const symDiffA = aArray.filter((num) => !bArray.includes(num))
    const symDiffB = bArray.filter((num) => !aArray.includes(num))
    let symDiff = []
    for(let item of symDiffA) symDiff.push(item);
    for(let item of symDiffB) symDiff.push(item);
    return symDiff;
}

let arrayA = ["diamond", "stick", "apple"];
let arrayB = ["stick", "emerald", "bread"];
let arrayC = ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"]
let arrayD = ["diorite", "andesite", "grass", "dirt", "dead shrub"]
console.log(diffArray(arrayC, arrayD));