import { guest, guest_role_channel, newUser, userTickets } from '../../../config'
import { Listener } from 'discord-akairo'
import discord ,{ User } from 'discord.js'

export default class MessageReaction extends Listener{
    public constructor(){
        super("messageReactionAdd", {
            emitter: "client",
            event: "messageReactionAdd",
            category: "client"
        })
    }
    public async exec(user, reaction): Promise<void>{
        if(reaction.emoji.name === 'ticketreact') { // If the emoji name is ticketreact, we will create the ticket channel.
            /**
             * Here we need to check the map to see if the user's id is in there, indicating they have a ticket.
             * We also need to check if there are any other guild channels with their name concatenated with 's-ticket'. We need to 
             * check this case because the bot may have crashed or restarted, and their ID won't be stored in the map.
             */
            if(userTickets.has(user.id) || reaction.message.guild.channels.some(channel => channel.name.toLowerCase() === user.username + 's-ticket')) {
                user.send("You already have a ticket!"); // Send user msg indicating they have a ticket.
            }
            else {
                let guild = reaction.message.guild;
                // Create channel based on permissions. Note, you need to modify the permissionsOverwrites array to fit your needs for permissions.
                guild.createChannel(`${user.username}s-ticket`, {
                    type: 'text',
                    permissionOverwrites: [
                        {
                            allow: 'VIEW_CHANNEL',
                            id: user.id
                        },
                        {
                            deny: 'VIEW_CHANNEL',
                            id: guild.id
                        },
                        {
                            allow: 'VIEW_CHANNEL',
                            id: '739203809338851347'
                        }
                    ]
                }).then(ch => {
                    userTickets.set(user.id, ch.id); // Once ticket is created, set the user's id as a key mapping to the channel id.
                    let embed = new discord.MessageEmbed();
                    embed.setTitle('Ticket Support');
                    embed.setDescription('Please briefly explain your problem here and a staff member will get back to you shortly.');
                    embed.setColor('#40BCD8');
                    ch.send(embed) // Send a message to user.
                }).catch(err => console.log(err));
            }
        }
        else if(reaction.emoji.name === 'checkreact') {
            // If emoji is checkreact, they are trying to close the ticket.
            if(userTickets.has(user.id)) {
                if(reaction.message.channel.id === userTickets.get(user.id)) {
                    let embed = new discord.MessageEmbed();
                    embed.setDescription("Ticket will be closed in 5 seconds.")
                    reaction.message.channel.send(embed);
                    setTimeout(() => {
                        reaction.message.channel.delete('closing ticket')
                        .then(channel => {
                            console.log("Deleted " + channel.name);
                        })
                        .catch(err => console.log(err));
                    }, 5000);
                }
            }
            // This case is really for handling tickets that were not closed by the bot due to the bot possibly crashing.
            // In order for this to actually work, the user needs to have a ticket opened already.
            else if(reaction.message.guild.channels.some(channel => channel.name.toLowerCase() === user.username + 's-ticket')) {
                let embed = new discord.MessageEmbed();
                embed.setDescription("Ticket will be closed in 5 seconds.");
                reaction.message.channel.send(embed);
                setTimeout(() => {
                    reaction.message.guild.channels.forEach(channel => {
                        if(channel.name.toLowerCase() === user.username + 's-ticket') {
                            channel.delete().then(ch => console.log('Deleted Channel ' + ch.id))
                        }
                    });
                }, 5000);
            }
        }
        else if(reaction.emoji.name === '☑️'){
            var newrole = user.guild.roles.cache.get(newUser)
            var member = user.guild.roles.cache.get(guest)
            const client = user.guild.member(user);
            client.roles.remove( await newrole,'added Guest role to user after reading the server roles');
            client.role.add( await member, 'Done adding role')
            user.send(`Your have been given the Guest Role in ${client.guild.name}`)
        }
    }
}