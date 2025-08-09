const compareTime = (departureTime, arrivalTime) => {
    let dep = new Date(departureTime);
    let arr = new Date(arrivalTime);
    return arr.getTime() > dep.getTime();
}


module.exports = {
    compareTime 
}