let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const car in statistics) {
    // if property starts with r OR value is odd
    if ((car.substring(0,1) == 'r') || (statistics[car] % 2)) {
        console.log(statistics[car]);
    }
}