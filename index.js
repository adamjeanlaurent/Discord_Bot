const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const eightBall = require('./commands/8ball');
const info = require('./commands/info');

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    
    if(message.content.startsWith(`${prefix}8ball`)) {
        message.channel.send(eightBall.play());
     }

     else if(message.content.startsWith(`${prefix}userinfo`)) {
        message.channel.send(info.getUserInfo(message));
     }

     else if(message.content.startsWith(`${prefix}serverinfo`)) {
        message.channel.send(info.getServerInfo(message));
     }
});

client.login(token);