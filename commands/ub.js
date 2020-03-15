const error = require('../errors/errors');
const unirest = require("unirest");
const {UB_Api_Key} = require('../config.json');

exports.execute = (message, args) => {
    if(args.length == 0) {
        return message.channel.send(error.invalidNumOfArgs(1, '{Term}'));
    }
    let term = '';

    while(args.length) {
        term += args.shift();
        term += ' ';
    }
    // using community made Urban Dictionary API
    // Docs: https://english.api.rakuten.net/community/api/urban-dictionary/endpoints
    let req = unirest("GET", "https://mashape-community-urban-dictionary.p.rapidapi.com/define");

    req.query({
        "term": term
    });

    req.headers({
        "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
        "x-rapidapi-key": UB_Api_Key
    });
    // call api
    req.end(function (res) {
        if (res.error || res.body.list.length == 0) {
            // if not words were found, send error message
            return message.channel.send("Couldn't Find That Word.");
        }
        // otherwise, grab the definiiton and example, and send them to the channel
        let topDefinition = res.body.list[0].definition;
        let topExample = res.body.list[0].example;
        let fullMessage = `${topDefinition}\n\n Example:\n${topExample}`
        return message.channel.send(fullMessage);
    }); 
};