import { Command } from 'discord-akairo'
import { Message } from 'discord.js'

export default class GuildInformationCommand extends Command{  
    public constructor(){
        super("ServerInfo",{
            aliases: ['Server', 'ServerInfo'],
            category: 'public',
            description:{
                content: 'Show the guild information that you are corently part of and doing the command on',
                examples: [
                    'ServerInfo',
                    'Server'
                ]
            },
            ratelimit: 3
        })
    }

    public exec(message: Message): Promise<Message> {
       
        return message.reply('command workes')
    }
}