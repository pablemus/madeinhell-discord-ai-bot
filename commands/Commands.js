import { REST, Routes } from 'discord.js';
export default async function registrarComandos({token, client_id, server_id}) {
    
const commands = [
    {
        name: 'ask',
        description: 'Pregunta lo que sea!',
        options: [
            {
                name: 'pregunta',
                description: 'Pregunta y el bot respondera!',
                type: 3,
                required: true,
            }
        ]
    },
];

const rest = new REST({ version: '10' }).setToken(token)

try{
    console.log('Refrescando los slash commands');
    await rest.put(Routes.applicationCommands(client_id, server_id), {body: commands});
    console.log('Comandos refrescados');
} catch(err){
    console.error(err);
}
}