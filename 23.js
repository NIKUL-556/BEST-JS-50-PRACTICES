//Create a counter function using closers that increaments and returns that count on each call

function CreateCounter() {
    let count = 0;
    return function(){
        return ++count
    }
}

let counter = CreateCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());



