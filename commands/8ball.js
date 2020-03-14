const Random = require('../helpers/random');

function play() {
     // later these will come from a database
     const OUTCOMES = [
         'Yes.',
         'Maybe.',
         'Sometimes',
         'Perhaps',
         'No.',
         'Never.',
         'Without A Doubt.',
         'It Is Certain.',
         'It Really Be Like That Sometimes.',
         'The World May Never Know.',
         'You Already Know The Answer To That.'
     ];
     
     return Random.randomItemFromArray(OUTCOMES);
}

exports.play = play;