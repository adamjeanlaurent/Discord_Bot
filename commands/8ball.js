const randomizer = require('../helpers/randomizer');


exports.execute = (message, args) => {
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
        'You Already Know The Answer To That.',
        'That A Yikes From Me Chief.',
        'It EEZ what IT EEZ.',
        'Big OOF.',
        'My Reply Is No.',
        'Why Would You Even Ask Me That.',
        'Try Again Later.',
        'Signs Point To Yes.',
        'Not Looking Likely.',
        'Wow...' 
    ];
    
    return message.channel.send(randomizer.randomItemFromArray(OUTCOMES));
}