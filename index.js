const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const eightBall = require('./commands/8ball');


// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    
    if(message.content.startsWith(prefix)) {
        message.channel.send(eightBall.play());
    }
    
});

client.login(token);