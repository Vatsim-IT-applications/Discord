"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class Ready extends discord_akairo_1.Listener {
    constructor() {
        super("ready", {
            emitter: "client",
            event: "ready",
            category: "client"
        });
    }
    exec() {
        console.log(`${this.client.user.tag} is now online and ready to use`);
    }
}
exports.default = Ready;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGlzdGVuZXJzL2NsaWVudC9SZWFkeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUEwQztBQUUxQyxNQUFxQixLQUFNLFNBQVEseUJBQVE7SUFDdkM7UUFDSSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ1gsT0FBTyxFQUFFLFFBQVE7WUFDakIsS0FBSyxFQUFFLE9BQU87WUFDZCxRQUFRLEVBQUUsUUFBUTtTQUNyQixDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0sSUFBSTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLGlDQUFpQyxDQUFDLENBQUE7SUFDekUsQ0FBQztDQUNKO0FBWkQsd0JBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0ZW5lciB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhZHkgZXh0ZW5kcyBMaXN0ZW5lcnsgIFxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoXCJyZWFkeVwiLCB7XHJcbiAgICAgICAgICAgIGVtaXR0ZXI6IFwiY2xpZW50XCIsXHJcbiAgICAgICAgICAgIGV2ZW50OiBcInJlYWR5XCIsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcImNsaWVudFwiXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXhlYygpOiB2b2lke1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY2xpZW50LnVzZXIudGFnfSBpcyBub3cgb25saW5lIGFuZCByZWFkeSB0byB1c2VgKVxyXG4gICAgfVxyXG59Il19