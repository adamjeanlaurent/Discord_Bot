// https://github.com/R3l3ntl3ss/Meme_Api
// Note: Api is a bit slow
const request = require('request'); // deprecated
const error = require('../errors/errors');

exports.execute = (message, args) => {
    if(!args.length) {
        return message.channel.send(error.invalidNumOfArgs(1, 'Subreddit'));
    }
    
    let subreddit = args.shift().toLowerCase();
    let url = `https://meme-api.herokuapp.com/gimme/${subreddit}`;

    request(url, (error, response, body) => {
        if(error) {
            return message.channel.send("Error Couldn't Find That Subreddit.");
        }
        try {
            let parsedBody = JSON.parse(body);
            if(parsedBody.title === undefined) {
                return message.channel.send("Error Couldn't Find That Subreddit.");
            }
            let meme = `${parsedBody.title}\n${parsedBody.url}`;
            return message.channel.send(meme);
        }
        catch {
            return message.channel.send('Error Occured');
        }
    }); 
}