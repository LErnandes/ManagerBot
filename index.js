const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()


client.on('ready', () => {
    console.log(`Entrando como ${client.user.tag}!`);
});

client.on('message', msg => {
    var message = msg.content;
    if (message.startsWith('-mb ')) {
        message = message.replace('-mb ', '')

        msg.channel.send(message)
    }
});

client.login(process.env.BOT_TOKEN);
