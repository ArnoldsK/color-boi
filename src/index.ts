import { Client, Intents } from "discord.js"
import { config as dotenv } from "dotenv"

import { handleClient } from "./handlers/client"
import { handleInteraction } from "./handlers/interaction"

// Load env variables
dotenv()

const config = {
  token: process.env.TOKEN ?? "",
}

const client = new Client({
  intents: [Intents.FLAGS.GUILD_MEMBERS],
  allowedMentions: {
    parse: ["users"],
  },
})

client.login(config.token)

client.on("ready", handleClient)
client.on("interactionCreate", handleInteraction)
