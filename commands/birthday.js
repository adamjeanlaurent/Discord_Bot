const error = require('../errors/errors');

exports.execute = (message, args) => {
    if(!message.mentions.users.size) {
        return message.channel.send(error.invalidNumOfArgs(1, 'Person_Whose_Birthday_It_Is'));
    }
    const birth_person = message.mentions.users.first();
    let birthdayMessage = `Happy Birthday ${birth_person}!`;
    birthdayMessage += '\nhttps://giphy.com/gifs/moodman-happy-birthday-weird-XGt4jw7EJoNt6kRjwG';
    return message.channel.send(birthdayMessage);
}