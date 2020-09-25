const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '안녕') {
    message.reply('반가워');
  }
});

client.login(token);
