const { Client, Intents, CommandInteractionOptionResolver } = require('discord.js');

const { MessageEmbed, WebhookClient } = require('discord.js');
const { webhookId, webhookToken } = require('./config.json');

const cron = require('node-cron');
const { ComponentAssertions } = require('@discordjs/builders');
// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
// When the client is ready, run this code (only once)


client.once('ready', () => {
	console.log('Ready!');
    
    try{
        const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/980828123794898975/f8wIOjaekU_Pn9LoHTxsYhHqAy71jyi1DskIMspj3wJ0XxShSAb8HiU0g5GTae8Amo_K' });
        
        cron.schedule('53 01 * * *', () => {
            console.log('TT');
            webhookClient.send('@everyone Alert เวลา 21.00 เจอกันที่ Kingdom จ้า', {
                username: 'NoWayHome-Alert',
                avatarURL: 'https://i.imgur.com/AfFp7pu.png'
            });
        }); 

        //FieldBoss
        cron.schedule('55 3 * * *', () => {
            console.log('TT');

            webhookClient.send('@everyone Alert Field Boss ! At 04.00', {
                content:'รีบหน่อยนะจ๊ะ ช้าหมด อดสร้อย',
                username: 'NoWayHome-Alert',
                avatarURL: 'https://i.imgur.com/AfFp7pu.png'
            });
        });

        cron.schedule('55 9 * * *', () => {
            console.log('TT');

            webhookClient.send('@everyone Alert Field Boss ! At 10.00', {
                content:'รีบหน่อยนะจ๊ะ ช้าหมด อดสร้อย',
                username: 'NoWayHome-Alert',
                avatarURL: 'https://i.imgur.com/AfFp7pu.png'
            });
        });

        cron.schedule('55 15 * * *', () => {
            console.log('TT');

            webhookClient.send('@everyone Alert Field Boss ! At 16.00', {
                content:'รีบหน่อยนะจ๊ะ ช้าหมด อดสร้อย',
                username: 'NoWayHome-Alert',
                avatarURL: 'https://i.imgur.com/AfFp7pu.png'
            });
        });
        
        cron.schedule('55 21 * * *', () => {
            console.log('TT');

            webhookClient.send('@everyone Alert Field Boss ! At 22.00', {
                content:'รีบหน่อยนะจ๊ะ ช้าหมด อดสร้อย',
                username: 'NoWayHome-Alert',
                avatarURL: 'https://i.imgur.com/AfFp7pu.png'
            });
        });
        

        //WorldBoss
        cron.schedule('25 9 * * *', () => {
            console.log('TT');

            webhookClient.send('@everyone Alert World Boss ! At 09.30', {

                username: 'NoWayHome-Alert',
                avatarURL: 'https://i.imgur.com/AfFp7pu.png'
            });
        });

        cron.schedule('25 15 * * *', () => {
            console.log('TT');

            webhookClient.send('@everyone Alert World Boss ! At 15.30', {

                username: 'NoWayHome-Alert',
                avatarURL: 'https://i.imgur.com/AfFp7pu.png'
            });
        });

        cron.schedule('25 21 * * *', () => {
            console.log('TT');

            webhookClient.send('@everyone Alert World Boss ! At 21.30', {

                username: 'NoWayHome-Alert',
                avatarURL: 'https://i.imgur.com/AfFp7pu.png'
            });
        });

    }catch(error){
        console.error('Error try',error);
    }

});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');S
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
});

client.login('OTgwODgxMzg5OTQ5OTcyNDgw.GQQ31Y.3OGdUGfRNZDZenFKvzNnlQ669WMcfcr-i0l3tQ');