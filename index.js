const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('/commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const eightBall = require('./commands/8ball');
const info = require('./commands/info');
const error = require('./helpers/error');
const random = require('./helpers/random');
const attack = require('./commands/attack');

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
    
    if(command === '8ball') {
         return message.channel.send(eightBall.play());
     }

     else if(command === 'userinfo') {
         if(!message.mentions.users.size) {
            return message.channel.send(info.getUserInfo(message));
         }

         return message.channel.send(info.getMultipleUserInfo(message));
        
     }

     else if(command === 'serverinfo') {
        return message.channel.send(info.getServerInfo(message));
     }

     else if(command === 'random') {
         if(!args.length) {33
           return message.channel.send(error.invalidNumOfArgs(1, 'UpperBound'));
         }

        let upperBound = parseInt(args.shift());
        if(isNaN(upperBound)) {
           return message.channel.send(error.invalidArgument('UpperBound', 'Integer'));
        }
    
        return message.channel.send(random.randomNumberBetweenBounds(1, upperBound));
         
     }
     
     else if(command === 'punch') {
         if(!message.mentions.users.size) {
             return message.channel.send(error.invalidNumOfArgs(1, 'Person_To_Punch'));
         }
         
         return message.channel.send(attack.punch(message));
         
     }
});

client.login(token);