const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()

const js_exec = require('./features/js_exec')


client.on('ready', () => {
    console.log(`Entrando como ${client.user.tag}!`);
});

client.on('message', msg => {
    var message = msg.content;
    try {
        if (message.startsWith('-mb ')) {
            message = message.replace('-mb ', '')
            var args = message.split(' ');
            var res;

            if (args[0] == "js") {
                let res = js_exec(args.slice(1, args.lenght).join(' '))
            }

            msg.channel.send(res);
        }
    } catch(err) {
        console.error(err)
        msg.channel.send(`Ocorreu um erro`);
    }
});

client.login(process.env.BOT_TOKEN);
