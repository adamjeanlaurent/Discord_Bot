const error = require('../errors/errors');

exports.execute = (message, args) => {
    // No User Has Been Mentioned To Punch
    if(!message.mentions.users.size) {
        return message.channel.send(error.invalidNumOfArgs(1, 'Person_To_Punch'));
    }
    const puncher = message.author.username;
    const punchee = message.mentions.users.first(); 
    return message.channel.send(`${puncher} Punched ${punchee}\n https://media.giphy.com/media/l1J3G5lf06vi58EIE/giphy.gif`);
};