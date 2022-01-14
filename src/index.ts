import { Client, Intents } from "discord.js"
import { config as dotenv } from "dotenv"

import { handleClient } from "./handlers/client"
import { handleInteraction } from "./handlers/interaction"
import { handleNewGuild } from "./handlers/newGuild"

// Load env variables
dotenv()

const config = {
  token: process.env.TOKEN ?? "",
}

const client = new Client({
  intents: [Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILDS],
  allowedMentions: {
    parse: ["users"],
  },
})

client.login(config.token)

client.on("ready", handleClient)
client.on("interactionCreate", handleInteraction)
client.on("guildCreate", handleNewGuild)
