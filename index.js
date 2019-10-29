// Import the discord.js module
const Discord = require('discord.js');

// Create a new Discord client
const client = new Discord.Client();

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content.toLowerCase() === 'ping') {
    message.channel.send('pong!');
  } 
});

// Log our bot in using the token
client.login('token');
