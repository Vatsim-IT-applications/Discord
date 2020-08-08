import { discord_administrator } from "../config";

import discord from 'discord.js';
export const bot = discord;
export const client = new bot.Client();
export const channels = client.channels;