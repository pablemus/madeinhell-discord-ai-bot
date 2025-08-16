import { Client, Events, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import registrarComandos from './commands/Commands.js';
import sendToGPT from './gpt-api/AIConnection.js';
dotenv.config();
const token = process.env.DISCORD_BOT_TOKEN;
const client_id = process.env.CLIENT_ID;
const server_id = process.env.GUILD_ID;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

try{
    await registrarComandos({token: token, client_id: client_id, server_id: server_id})
} catch(err){
    console.error(err);
}

client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
    if(!interaction.isChatInputCommand()) return;
    if(interaction.commandName === 'ask'){
        await interaction.deferReply();
    try {
      const text = await sendToGPT(interaction.options.getString('pregunta'));
      await interaction.editReply(text);
    } catch (err) {
      await interaction.editReply("No lo sé, no me preguntes de nuevo :P");
    }
    }
})

client.login(token);