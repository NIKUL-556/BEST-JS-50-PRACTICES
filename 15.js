//write a Function that takes an array of numbers and returns a new array with only the even number

let arr = [1,2,3,4,5,6,7,8,9]

function FilterNUmber(arr) {
    return arr.filter(num => num %2 ===0)
}

console.log(FilterNUmber(arr));
