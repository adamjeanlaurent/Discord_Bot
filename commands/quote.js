const unirest = require("unirest");
const {Rapid_Api_Key} = require('../config.json');

exports.execute = (message, args) => {
    let req = unirest("GET", "https://quotes15.p.rapidapi.com/quotes/random/");

    req.query({
        "language_code": "en"
    });

    req.headers({
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": Rapid_Api_Key
    });

    req.end(function (res) {
        if(res.error || Object.keys(res.body).length === 0) {
            return message.channel.send('Unable To Get Quote');
        }

        let content = res.body.content;
        let name = res.body.originator.name;
        let fullQuote = `${name}:\n\n"${content}"`;
        return message.channel.send(fullQuote);
    });         
}
