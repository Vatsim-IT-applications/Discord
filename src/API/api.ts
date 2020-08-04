import { AkairoClient } from 'discord-akairo'
import  Express, { Application } from 'express'
import { createServer } from 'http'
import cors from 'cors'
import GuildRouter from './Routers/GuildRouter'

export default class API{
    protected client: AkairoClient;
    protected server: Application;
    public constructor(client: AkairoClient,){
        this.client = client;
    }
    public start(): void{
        this.server = Express()
        this.server.use(Express.json())
        this.server.use(cors({
            origin: true,
            accountDetiles: true
        }));
        new GuildRouter(this.server, this.client);
        createServer(this.server).listen(8888, ()=> console.log(`API is online on port 8888`))
    }
}