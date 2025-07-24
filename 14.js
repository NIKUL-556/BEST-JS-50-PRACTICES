// create a function that generates a random number between a give range

let randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
console.log(randomNumber(10, 20));  // Output: 10 to 20 ke beech koi number
  
//min = 10 max = 20
//Math.floor(Math.random() * (20 - 10 + 1)) + 10 => Math.floor(Math.random() * 11) + 10
//Math.random() = 0.63
//0.63 * 11 = 6.93
//Math.floor(6.93) = 6
//6 + 10 = 16


