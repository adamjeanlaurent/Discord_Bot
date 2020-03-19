// https://rapidapi.com/Sv443/api/jokeapi
const unirest = require("unirest");
const {Rapid_Api_Key} = require('../config.json');

exports.execute = (message, args) => {

    let req = unirest("GET", "https://jokeapi.p.rapidapi.com/category/Any");

    req.query({
        "format": "json"
    });

    req.headers({
        "x-rapidapi-host": "jokeapi.p.rapidapi.com",
        "x-rapidapi-key": Rapid_Api_Key
    });

    req.end(function (res) {
        if(res.error || res.body.setup === undefined) {
            return message.channel.send('Error Finding Joke');
        }
        let jokeSetup = res.body.setup;
        let jokeDelivery = res.body.delivery;
        let fullJoke = '';
        fullJoke += `${jokeSetup}\n\n${jokeDelivery}`;
        return message.channel.send(fullJoke);
    });
}