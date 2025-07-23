//create a program that checks if a given year is a leap year

let isLeapyear = (year) => {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        console.log(`${year} is leapyear`);
    } else {
        console.log(`${year} not a leapyear`);
    }
}

isLeapyear(2000)
