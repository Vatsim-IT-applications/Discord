"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const discord_akairo_1 = require("discord-akairo");
const path_1 = require("path");
class botClient extends discord_akairo_1.AkairoClient {
    constructor(config) {
        super({
            ownerID: config.owners
        });
        this.listenerHandler = new discord_akairo_1.ListenerHandler(this, {
            directory: path_1.join(__dirname, "..", "listeners")
        });
        this.commandHandler = new discord_akairo_1.CommandHandler(this, {
            directory: path_1.join(__dirname, "..", "commands"),
            prefix: config_1.prefix,
            allowMention: true,
            defaultCooldown: 6e4,
            ignorePermissions: config_1.owners
        });
        this.config;
    }
    init() {
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            listenerHandler: this.listenerHandler,
            process
        });
        this.commandHandler.loadAll();
        this.listenerHandler.loadAll();
    }
    async start() {
        await this.init();
        return this.login(this.config.token);
    }
}
exports.default = botClient;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUF5QztBQUN6QyxtREFBOEU7QUFDOUUsK0JBQTRCO0FBZTVCLE1BQXFCLFNBQVUsU0FBUSw2QkFBWTtJQVlqRCxZQUFtQixNQUFrQjtRQUNuQyxLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsTUFBTSxDQUFDLE1BQU07U0FDdkIsQ0FBQyxDQUFBO1FBYkcsb0JBQWUsR0FBb0IsSUFBSSxnQ0FBZSxDQUFDLElBQUksRUFBRTtZQUNsRSxTQUFTLEVBQUUsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDO1NBQzlDLENBQUMsQ0FBQztRQUNJLG1CQUFjLEdBQW1CLElBQUksK0JBQWMsQ0FBQyxJQUFJLEVBQUU7WUFDL0QsU0FBUyxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQztZQUM1QyxNQUFNLEVBQU4sZUFBTTtZQUNOLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGlCQUFpQixFQUFFLGVBQU07U0FDMUIsQ0FBQyxDQUFDO1FBS0QsSUFBSSxDQUFDLE1BQU0sQ0FBQTtJQUNiLENBQUM7SUFDTyxJQUFJO1FBQ1YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7WUFDL0IsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxPQUFPO1NBQ1IsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFDTSxLQUFLLENBQUMsS0FBSztRQUNoQixNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0Y7QUFoQ0QsNEJBZ0NDO0FBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByZWZpeCwgb3duZXJzIH0gZnJvbSBcIi4vY29uZmlnXCJcbmltcG9ydHsgQWthaXJvQ2xpZW50LCBDb21tYW5kSGFuZGxlciwgTGlzdGVuZXJIYW5kbGVyIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xuXG5kZWNsYXJlIG1vZHVsZSBcImRpc2NvcmQtYWthaXJvXCJ7XG4gIGludGVyZmFjZSBBa2Fpcm9DbGllbnR7XG4gICAgY29tbWFuZEhhbmRsZXI6IENvbW1hbmRIYW5kbGVyO1xuICAgIGxpc3RlbmVySGFuZGxlcjogTGlzdGVuZXJIYW5kbGVyO1xuICB9XG59XG5cbmludGVyZmFjZSBCb3RPcHRpb25ze1xuICB0b2tlbj86IHN0cmluZztcbiAgb3duZXJzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJvdENsaWVudCBleHRlbmRzIEFrYWlyb0NsaWVudHtcbiAgcHVibGljIGNvbmZpZzogQm90T3B0aW9ucztcbiAgcHVibGljIGxpc3RlbmVySGFuZGxlcjogTGlzdGVuZXJIYW5kbGVyID0gbmV3IExpc3RlbmVySGFuZGxlcih0aGlzLCB7XG4gICAgZGlyZWN0b3J5OiBqb2luKF9fZGlybmFtZSwgXCIuLlwiLCBcImxpc3RlbmVyc1wiKVxuICB9KTtcbiAgcHVibGljIGNvbW1hbmRIYW5kbGVyOiBDb21tYW5kSGFuZGxlciA9IG5ldyBDb21tYW5kSGFuZGxlcih0aGlzLCB7XG4gICAgZGlyZWN0b3J5OiBqb2luKF9fZGlybmFtZSwgXCIuLlwiLCBcImNvbW1hbmRzXCIpLFxuICAgIHByZWZpeCxcbiAgICBhbGxvd01lbnRpb246IHRydWUsXG4gICAgZGVmYXVsdENvb2xkb3duOiA2ZTQsXG4gICAgaWdub3JlUGVybWlzc2lvbnM6IG93bmVyc1xuICB9KTtcbiAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZzogQm90T3B0aW9ucyl7XG4gICAgc3VwZXIoe1xuICAgICAgb3duZXJJRDogY29uZmlnLm93bmVyc1xuICAgIH0pXG4gICAgdGhpcy5jb25maWdcbiAgfVxuICBwcml2YXRlIGluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb21tYW5kSGFuZGxlci51c2VMaXN0ZW5lckhhbmRsZXIodGhpcy5saXN0ZW5lckhhbmRsZXIpO1xuICAgIHRoaXMubGlzdGVuZXJIYW5kbGVyLnNldEVtaXR0ZXJzKHtcbiAgICAgIGNvbW1hbmRIYW5kbGVyOiB0aGlzLmNvbW1hbmRIYW5kbGVyLFxuICAgICAgbGlzdGVuZXJIYW5kbGVyOiB0aGlzLmxpc3RlbmVySGFuZGxlcixcbiAgICAgIHByb2Nlc3NcbiAgICB9KVxuICAgIHRoaXMuY29tbWFuZEhhbmRsZXIubG9hZEFsbCgpO1xuICAgIHRoaXMubGlzdGVuZXJIYW5kbGVyLmxvYWRBbGwoKTtcbiAgfVxuICBwdWJsaWMgYXN5bmMgc3RhcnQoKTogUHJvbWlzZTxzdHJpbmc+e1xuICAgIGF3YWl0IHRoaXMuaW5pdCgpO1xuICAgIHJldHVybiB0aGlzLmxvZ2luKHRoaXMuY29uZmlnLnRva2VuKTtcbiAgfVxufTsiXX0=