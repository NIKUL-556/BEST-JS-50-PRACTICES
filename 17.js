// find the largest elemment in an array using the reduce() method

let arr = [1,2,3,4,5,6,7,8,49,65,99,180]

let newArr = arr.reduce((max,currunt)=>{
 return currunt > max ? currunt :max
})

console.log(newArr);

