// Code your solution in this file!
let scuberHeadquaters = 42;

function distanceFromHqInBlocks(someValue){
    if ( someValue < 42) {
        return - someValue + scuberHeadquaters;
    } else
    return  someValue - scuberHeadquaters;
}

l
function distanceFromHqInFeet(someValue) {
  let distances = distanceFromHqInBlocks(someValue);
    return distances * 264;
}

function distanceTravelledInFeet(start, destination) {
    if ( destination < start) {
        return (start - destination) * 264;
    } else
    return (destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
    let totalFeet = distanceTravelledInFeet(start, destination);
    let pricedFeet = (totalFeet - 400) * 0.02;
    if (totalFeet <= 400) {
        return 0
    } else if (totalFeet >= 400 && totalFeet <= 2000) {
        return pricedFeet;
    } else if (totalFeet > 2000 && totalFeet < 2500) {
        return 25
    } else if (totalFeet > 2500 ) {
        return "cannot travel that far"
    }
}