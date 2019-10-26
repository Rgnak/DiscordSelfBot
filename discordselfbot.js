//module
const Discord = require('discord.js');
//create discord client
const client = new Discord.Client();

client.on('ready', ()=>{
	console.log('I am ready !');
});


//start commande 
client.on('message', message =>{

//ping commande//
	if (message.content === prefix + '/ping'){
		if(message.author.id === client.user.id){	
			message.channel.send('pong');
		}
	}
});

client.login('TOKEN');
