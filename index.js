const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

/*
    To-Do: 
    - Make the token a secret so you can put this on github
    
*/

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if(message.content === 'Hello Carl') {
        message.channel.send('Test');
    }
});

client.login(config.token);