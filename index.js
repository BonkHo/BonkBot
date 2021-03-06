const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const token = process.env['token'];
const GUILD_ID = process.env['GUILD_ID'];
const CLIENT_ID = process.env['CLIENT_ID'];

const commands = [{
  name: 'ping',
  description: 'Replies with Pong!'
}, {
  name: 'study',
  description: 'Pings everyone to study.'
}]; 

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();