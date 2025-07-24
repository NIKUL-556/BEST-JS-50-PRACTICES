// Create s function that displays the current date and time in a specific format

function GetDate() {
    let date = new Date()
    return date.toLocaleString()
}

console.log(GetDate());
