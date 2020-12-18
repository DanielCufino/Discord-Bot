console.log('Bot Online');
//Client initialization 
const Discord = require('discord.js');
const client = new Discord.Client();
//Bot Token parameter
require('dotenv').config()
console.log(process.env);
client.login(process.env.BOT_TOKEN);

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('Bot Authenticated');
}
client.on('message', gotMessage);

const greetings = ['Hey!', 'Hi!', 'Hello!', "What's up!"]

function gotMessage(msg) {
    console.log(msg.content);
    if (msg.content === 'beep') {
        msg.channel.send('boop!');
    }
    if (msg.content === 'boop') {
        msg.channel.send('beep!');
    }
    if (msg.content === "hi" || msg.content === "Hi" | msg.content === "hello" ||
        msg.content === "Hello") {
        const idx = Math.floor((Math.random() * greetings.length));
        msg.channel.send(greetings[idx]);
    }
}