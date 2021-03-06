// Require dependencies
import { Client, Intents, ClientUser } from 'discord.js';
import { config } from 'dotenv';
const express = require('express');
const app = express();

const client = new Client({
    intents:
        [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));

config();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
    if (message.content === '!price') {
        message.reply('https://dexscreener.com/avalanche/0x95189f25b4609120f72783e883640216e92732da');
    }

});

client.on('ready', message => {
    client.user.setActivity('All praise Thor(This can be edited)', { type: 'STREAMING' });

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${PORT}`);
});


client.login(process.env.DISCORD_BOT_TOKEN);
