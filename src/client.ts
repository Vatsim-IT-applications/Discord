import { token, owners } from '../config';
import BotClient from './bot';

const client: BotClient = new BotClient({owners, token})
client.start()