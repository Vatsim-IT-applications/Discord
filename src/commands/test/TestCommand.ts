import { Command } from 'discord-akairo'
import { Message } from 'discord.js'

export default class TestCommand extends Command{  
    public constructor(){
        super("Test",{
            aliases: ['test'],
            category: 'public',
            description:{
                content: 'Test Command to see if the bot can respond to the commands and see if the command is working coreactly',
                examples: [
                    'test'
                ]
            },
            ratelimit: 3
        })
    }

    public exec(message: Message): Promise<Message> {
        return message.reply('This Command has worked')
    }
}