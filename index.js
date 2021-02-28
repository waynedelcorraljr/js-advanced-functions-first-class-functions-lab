const returnFirstTwoDrivers = function (arrayOfDrivers) {
    return arrayOfDrivers.slice(0, 2)
}

const returnLastTwoDrivers = function (arrayOfDrivers) {
    return arrayOfDrivers.slice(arrayOfDrivers.length - 2, arrayOfDrivers.length)
}

const selectingDrivers = function() { 
    return [returnFirstTwoDrivers, returnLastTwoDrivers];
}();

function createFareMultiplier(multiplier = 4) {
    return function(fare){
        return fare * multiplier
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers, func) {
    if(func == returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    } else {
        return returnLastTwoDrivers(drivers);
    }
}