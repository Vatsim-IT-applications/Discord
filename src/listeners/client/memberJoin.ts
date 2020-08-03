import { Listener } from "discord-akairo";
import { GuildMember } from "discord.js";

export default class memberJoin extends Listener{  
    public constructor(){
        super("guildMemberAdd", {
            emitter: "client",
            event: "guildMemberAdd",
            category: "client"
        })
    }

    public exec(): void{
        console.log(`${GuildMember.name} has join the server and can now see what happerneds on the server!`)
    }
}