import { Client } from "discord.js"
import { addGuildCommands } from "../helpers/interactions"

export const handleClient = async (client: Client) => {
  console.log(`> ${client.user?.username} ready`)

  for (const guild of client.guilds.cache.values()) {
    await addGuildCommands(guild)
  }
}
