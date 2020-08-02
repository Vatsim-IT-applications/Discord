import BaseEvent from '../../utils/structures/BaseEvent';
import DiscordClient from '../../client/client';

const discord = require('discord.js');

export default class onMemberJoinEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }
  async run(client: DiscordClient, member: Member) {
    member.guild.chanels.get().send()
  }
}