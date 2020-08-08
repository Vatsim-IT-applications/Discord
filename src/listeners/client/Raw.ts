import { guest, guest_role_channel, newUser, userTickets, guest_role_message } from '../../../config'
import { Listener } from 'discord-akairo'
const discord = require('discord.js');
const client = new discord.Client();

export default class MessageReaction extends Listener{
    public constructor(){
        super("raw", {
            emitter: "client",
            event: "raw",
            category: "client"
        })
    }
    public async exec(payload): Promise<void>{
        if(payload.t === 'MESSAGE_REACTION_ADD') { // Check if the event name is MESSAGE_REACTION_ADD
            console.log(payload)
            if(payload.d.emoji.name === 'ticketreact') // If the emoji is ticketreact
            {
                if(payload.d.message_id === '625926893954400266') { // Here we check if the id of the message is the ID of the embed that we had the bot send using the ?sendmsg command.
                    let channel = client.channels.get(payload.d.channel_id) // Get the proper channel object.
                    if(channel.messages.has(payload.d.message_id)) { // Check if the channel has the message in the cache.
                        return;
                    }
                    else { // Fetch the message and then get the reaction & user objects and emit the messageReactionAdd event manually.
                        channel.fetchMessage(payload.d.message_id)
                        .then(msg => {
                            let reaction = msg.reactions.get('ticketreact:625925895013662721');
                            let user = client.users.get(payload.d.user_id);
                            client.emit('messageReactionAdd', reaction, user);
                        })
                        .catch(err => console.log(err));
                    }
                }
            }
            // Check if the emoji is checkreact, meaning we're deleting the channel.
            // This will only be significant if our bot crashes/restarts and there are additional ticket channels that have not been closed.
            else if(payload.d.emoji.name === 'checkreact') {
                let channel = client.channels.get(payload.d.channel_id);
                if(channel.messages.has(payload.d.message_id)) {
                    return;
                }
                else {
                    channel.fetchMessage(payload.d.message_id)
                    .then(msg => {
                        let reaction = msg.reactions.get('checkreact:625938016510410772');
                        let user = client.users.get(payload.d.user_id);
                        client.emit('messageReactionAdd', reaction, user);
                    })
                    // Additional code that I did not need, but leaving it here for future purposes.
                    /*
                    .then(msg => msg.embeds.length === 1 && msg.embeds[0].title === 'Ticket Support' ? Promise.resolve(msg.channel) : Promise.reject('Incorrect Msg')
                    ).then(ch => ch.delete('closing ticket'))
                    .then(guildChannel => console.log("Deleted " + guildChannel.name))
                    .catch(err => console.log(err)); */
    
                }
            }
            else if(payload.d.emoji.name === '☑️'){
                if(payload.d.message_id === guest_role_message) { // Here we check if the id of the message is the ID of the embed that we had the bot send using the ?sendmsg command.
                    let channel = client.channels.get(payload.d.channel_id) // Get the proper channel object.
                    if(channel.messages.has(payload.d.message_id)) { // Check if the channel has the message in the cache.
                        return;
                    }
                    else { // Fetch the message and then get the reaction & user objects and emit the messageReactionAdd event manually.
                        channel.fetchMessage(payload.d.message_id)
                        .then(msg => {
                            let reaction = msg.reactions.get('☑️:741476004014456853');
                            let user = client.users.get(payload.d.user_id);
                            client.emit('messageReactionAdd', user, reaction);
                        })
                        .catch(err => console.log(err));
                    }
                }
            }
        }
    }
}