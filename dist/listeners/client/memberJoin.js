"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class memberJoin extends discord_akairo_1.Listener {
    constructor() {
        super("guildMemberAdd", {
            emitter: "client",
            event: "guildMemberAdd",
            category: "client"
        });
    }
    exec() {
        console.log(`${discord_js_1.GuildMember.name} has join the server and can now see what happerneds on the server!`);
    }
}
exports.default = memberJoin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVySm9pbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saXN0ZW5lcnMvY2xpZW50L21lbWJlckpvaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBMEM7QUFDMUMsMkNBQXlDO0FBRXpDLE1BQXFCLFVBQVcsU0FBUSx5QkFBUTtJQUM1QztRQUNJLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtZQUNwQixPQUFPLEVBQUUsUUFBUTtZQUNqQixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLFFBQVEsRUFBRSxRQUFRO1NBQ3JCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSxJQUFJO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLHdCQUFXLENBQUMsSUFBSSxxRUFBcUUsQ0FBQyxDQUFBO0lBQ3pHLENBQUM7Q0FDSjtBQVpELDZCQVlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXIgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgR3VpbGRNZW1iZXIgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbWVtYmVySm9pbiBleHRlbmRzIExpc3RlbmVyeyAgXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcihcImd1aWxkTWVtYmVyQWRkXCIsIHtcclxuICAgICAgICAgICAgZW1pdHRlcjogXCJjbGllbnRcIixcclxuICAgICAgICAgICAgZXZlbnQ6IFwiZ3VpbGRNZW1iZXJBZGRcIixcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiY2xpZW50XCJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleGVjKCk6IHZvaWR7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7R3VpbGRNZW1iZXIubmFtZX0gaGFzIGpvaW4gdGhlIHNlcnZlciBhbmQgY2FuIG5vdyBzZWUgd2hhdCBoYXBwZXJuZWRzIG9uIHRoZSBzZXJ2ZXIhYClcclxuICAgIH1cclxufSJdfQ==