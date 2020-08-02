var userTickets = new Map();
import { Message } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';
const Discord = require('discord.js');


export default class TicketsCommand extends BaseCommand {
  constructor() {
    super('tickets', 'tickets' , []);
  }
  async run(client: DiscordClient, message: Message, args: Array<string>) {
    /**
     * This was just used to send an initial embed message.
     * I copied the ID of the embed message sent and used that to check if reactions were
     * added to that. Check the 'raw' event.
     **/
	const name = message.guild.name;
        const embed = new Discord.MessageEmbed();
        embed.setAuthor(name);
        embed.setDescription('React to this message to open a support ticket');
        embed.setColor('#F39237')
        message.channel.send(embed);
  }
}