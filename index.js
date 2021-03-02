const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()

const js_exec = require('./features/js_exec')


routes = {
    "js": "js_exec"
}


client.on('ready', () => {
    console.log(`Entrando como ${client.user.tag}!`);
});

client.on('message', msg => {
    var message = msg.content;
    if (message.startsWith('-mb ')) {
        message = message.replace('-mb ', '')
        args = message.split(' ');

        let res = eval(`${routes[args[0]]}(${args.slice(1, args.lenght).join()})`)

        msg.channel.send(res);
    }
});

client.login(process.env.BOT_TOKEN);
