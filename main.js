const { Client, GatewayIntentBits } = require("discord.js");

const TOKEN =
  "MTE1NjkzMzUzMDk4NzgwNjczMA.G4H77B.EMF7IL8WWG-0YX27ztCPHkAJxALwHJTS0x8hGk";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.login(TOKEN);

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
  if (message.content.toLowerCase() === "hi") {
    message.reply("卐卐卐卐卐卐卐卐!");
  }
});
