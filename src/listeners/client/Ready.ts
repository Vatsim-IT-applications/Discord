import { Listener } from "discord-akairo";
import API from '../../API/api'

export default class Ready extends Listener{  
    public constructor(){
        super("ready", {
            emitter: "client",
            event: "ready",
            category: "client"
        })
    }

    public exec(): void{
        console.log(`${this.client.user.username} is now online and ready to use`)
        new API(this.client).start();
        
    }
}