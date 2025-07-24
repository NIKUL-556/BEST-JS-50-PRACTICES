//Remove all accurrences of a specific element from an array

let arr = [10,10,20,30,40,50,60,70]
let target = 50

function removeElement(arr,target) {
    return arr.filter((e)=>{
        return e === target ? "" :arr
    })
}

console.log(removeElement(arr,target));


