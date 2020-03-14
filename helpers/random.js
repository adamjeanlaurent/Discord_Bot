function randomItemFromArray (arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function randomNumberBetweenBounds(lower, upper) {
    return Math.floor(Math.random() * upper) + lower;
}

exports.randomItemFromArray = randomItemFromArray;
exports.randomNumberBetweenBounds = randomNumberBetweenBounds;
