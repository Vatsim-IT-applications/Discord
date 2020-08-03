import { prefix, owners, token } from "./config"
import{ AkairoClient, CommandHandler, ListenerHandler } from "discord-akairo";
import { join } from "path";
import { Message } from "discord.js";

declare module "discord-akairo"{
  interface AkairoClient{
    commandHandler: CommandHandler;
    listenerHandler: ListenerHandler;
  }
}

interface BotOptions{
  owners?: string[];
  token?: string;
}

export default class BotClient extends AkairoClient{
  public config: BotOptions;
  public listenerHandler: ListenerHandler = new ListenerHandler(this, {
    directory: join(__dirname, "..", "listeners")
  });
  public commandHandler: CommandHandler = new CommandHandler(this, {
    directory: join(__dirname, "..", "commands"),
    prefix,
    allowMention: true,
    defaultCooldown: 6e4,
    ignorePermissions: owners
  });
  public constructor(config: BotOptions){
    super({
      ownerID: config.owners
    })
    this.config
  }
  private init(): void {
    this.commandHandler.useListenerHandler(this.listenerHandler);
    this.listenerHandler.setEmitters({
      commandHandler: this.commandHandler,
      listenerHandler: this.listenerHandler,
      process
    })
    this.commandHandler.loadAll();
    this.listenerHandler.loadAll();
  }
  public async start(): Promise<string>{
    await this.init();
    return this.login(this.config.token);
  }
};