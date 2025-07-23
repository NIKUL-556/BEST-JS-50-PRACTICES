// find the sum of all element in an array

let arr = [20,30,40,10,8]

let newArr = arr.reduce((pre,next)=>{
    return pre + next
})

console.log(newArr);


let total = 0
for (let i = 0; i < arr.length; i++) {
 total += arr[i]
}

console.log(total);
