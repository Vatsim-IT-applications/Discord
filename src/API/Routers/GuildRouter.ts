import { Router, Request, Response, Application } from 'express'
import { AkairoClient } from 'discord-akairo'
import { Guild } from 'discord.js'
import { key } from '../../../config'

export default class GuildRouter{
    protected app: Application;
    protected client: AkairoClient;
    protected router: Router;


    public constructor(app: Application, client: AkairoClient){
        this.app = app;
        this.client = client;
        this.router = Router();
        this.app.use(this.router);
        // https://localhost:888/v1/get/guild/5545454587854
        this.router.get("/v1/get/guild/:id", (req: Request, res: Response)=>{
            const guild: Guild = this.client.guilds.cache.get(req.params.id);
            if(!guild) return res.status(404).send({message: "This sever id on discord could not be found or the bot is not part of the sever that you are tying to get the request from"});
            return res.status(201).send({
                name: guild.name,
                owner: guild.owner.user.username,
                owner_id: guild.owner.user.id,
                members: guild.memberCount,
                Reagion: guild.region,
                Joined_at: `I joined this server at ${guild.joinedAt}`
            }).status(200);
        });
        /// https://localhost:8888/v1/post/guild-name/5545454587854
        this.router.post('/v1/post/guild-name/:id', (req: Request, res: Response)=>{
            if(req.headers.authorization !== key) return res.status(401).send({message: "You do not have access to this page and will not be able to compleat this task"})
            const guild: Guild = this.client.guilds.cache.get(req.params.id);
            if(!guild) return res.status(404).send({message: "This sever id on discord could not be found or the bot is not part of the sever that you are tying to get the request from"});
            if(req.body.name) return res.status(404).send({message: 'No Guild could be defined'})
            if(req.body.name.lengh > 32) return res.status(400).send({ message: 'Guild name over max allowed on discord'})
            if(!guild.me.permissions.has('MANAGE_GUILD')) return res.status(401).send({ message: 'You do not have the correact perms on the discord server'})

            guild.setName(req.body.name)

            return res.status(201).send({message: `${guild} Guild name has been changed to ${req.body.name}`},)
        })
    }
}