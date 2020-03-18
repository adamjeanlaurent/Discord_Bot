const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.commands = new Discord.Collection();

// Goes into the commands folder, takes every file with the ending js, and adds them the the client commands
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    let commandName = file.substring(0, file.length - 3);
    client.commands.set(commandName , command);
}

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    // an array of arguments, uses regex incase user uses more than one space
    const args = message.content.slice(prefix.length).split(/ +/);
    // holds the command without the prefix in lower case
    const command = args.shift().toLowerCase();
    if(!client.commands.has(command)) {
        return;
    }
    
    try {
        client.commands.get(command).execute(message, args);
    }
    
    catch {
        message.reply('Error Occurred!');
    }

});

client.login(token);