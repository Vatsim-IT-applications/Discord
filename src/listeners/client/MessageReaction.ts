import { guest } from '../../../config'
import { Listener } from 'discord-akairo'
import { GuildMember, RoleManager } from 'discord.js'

export default class MessageReaction extends Listener{
    public constructor(){
        super("messageReactionAdd", {
            emitter: "client",
            event: "messageReactionAdd",
            category: "client"
        })
    }
    public exec(member: GuildMember, role: RoleManager): void{
        var newrole = role.guild.roles.cache.get(guest);
        const client = member.guild.member(member.user);
        if(member.client.user.bot) return;

        
        
    }
}