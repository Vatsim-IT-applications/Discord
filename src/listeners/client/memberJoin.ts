import { Listener } from "discord-akairo";

export default class memberJoin extends Listener{  
    public constructor(){
        super("guildMemberAdd", {
            emitter: "client",
            event: "guildMemberAdd",
            category: "client"
        })
    }

    public exec(): void{
    }
}