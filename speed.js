const speedLimit = 70
const point = 5


function speedDetector(speed) {
    let points = Math.floor((speed - speedLimit) / point)
    if (speed <= 70) {
        console.log("OK");
    } else {
        console.log("Points:" + points);
    }
    if (points>12){
        console.log("License suspended");
    }
}

speedDetector(150)
