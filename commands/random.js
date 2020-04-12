const randomizer = require('../helpers/randomizer');
const error = require('../errors/errors');

exports.execute = (message, args) => {
    // if not upperbound is specified
    if(!args.length) {
        return message.channel.send(error.invalidNumOfArgs(1, 'UpperBound'));
    }
    
    let upperBound = parseInt(args.shift());
    // if argument is not a number
    if(isNaN(upperBound)) {
        return message.channel.send(error.invalidArg('UpperBound', 'Integer'));
    }
    return message.channel.send(randomizer.randomNumberBetweenBounds(1, upperBound));
}