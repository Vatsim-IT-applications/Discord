import { Listener } from "discord-akairo";
import discord , { GuildMember ,  RoleManager } from "discord.js";
import { newUser } from '../../../config'

export default class memberJoin extends Listener{  
    public constructor(){
        super("guildMemberAdd", {
            emitter: "client",
            event: "guildMemberAdd",
            category: "client"
        })
    }

    public async exec(member: GuildMember, role: RoleManager): Promise<void>{
        /*
        * Create a new webhook
        * The Webbooks ID and token can be found in the URL, when you request that URL, or in the response body.
        * https://discordapp.com/api/webhooks/741420365498286102/9j1vHveJO0NZ2Lr5DiaChsYoRETk2byDazC6Uqj6OnRWcmQW4J8w3AkYVp1JYfrJRDZr
        * https://discordapp.com/api/webhooks/12345678910/T0kEn0fw3Bh00K
        *                                     ^^^^^^^^^^  ^^^^^^^^^^^^ 
        *                                     Webhook ID  Webhook Token
        */
        const hook = new discord.WebhookClient('741420365498286102', '9j1vHveJO0NZ2Lr5DiaChsYoRETk2byDazC6Uqj6OnRWcmQW4J8w3AkYVp1JYfrJRDZr');
        const embed = new discord.MessageEmbed()
        .setTitle('New Member')
        .setAuthor(member.user.username, member.user.avatarURL())
        .setDescription(`New member has joined the server`)
        .addField(`Username` ,`${member.user.username}` , true)
        .addField('Joined at',`${member.joinedAt}`, true);
        var newrole = role.guild.roles.cache.get(newUser)
        const client = member.guild.member(member.user);
        client.roles.add( await newrole,'new user joined the server');
        hook.send(embed);
    }
}