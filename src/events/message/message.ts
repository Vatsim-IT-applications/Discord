import BaseEvent from '../../utils/structures/BaseEvent';
import { Message } from 'discord.js';
import DiscordClient from '../../client/client';

export default class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }

  async run(client: DiscordClient, message: Message) {
    if(message.author.bot) {
        if(message.embeds.length === 1 && message.embeds[0].description.startsWith('React')) {
            message.react( message.guild.emojis.cache.get('739249600560627780'))
            .then(msgReaction => console.log('Reacted.'))
            .catch(err => console.log(err));
        }
        if(message.embeds.length === 1 && message.embeds[0].title === 'Ticket Support') {
            message.react( message.guild.emojis.cache.get('739249600560627780'))
            .then(reaction => console.log("Reacted with " + reaction.emoji.name))
            .catch(err => console.log(err));
        }
       }
    if (message.content.startsWith(client.prefix)) {
      const [cmdName, ...cmdArgs] = message.content
        .slice(client.prefix.length)
        .trim()
        .split(/\s+/);
      const command = client.commands.get(cmdName);
      if (command) {
        command.run(client, message, cmdArgs);
      }
    }
  }
}