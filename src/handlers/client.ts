import { Client } from "discord.js"

import { CommandOptions } from "../constants"
import { Command } from "../types"

export const handleClient = async (client: Client) => {
  console.log(`> ${client.user?.username} ready`)

  for (const guild of client.guilds.cache.values()) {
    await client.application?.commands.create(
      {
        name: "color",
        description: "color boi will change your name color",
        type: "CHAT_INPUT",
        options: [
          {
            name: Command.Add,
            description: "this gives you color",
            type: "SUB_COMMAND",
            options: [
              {
                name: CommandOptions[Command.Add].Hex,
                description: "color hex that looks like #B492D4",
                type: "STRING",
                required: true,
              },
            ],
          },
          {
            name: Command.Auto,
            description: "this gives you color based on your avatar",
            type: "SUB_COMMAND",
          },
          {
            name: Command.Remove,
            description: "this removes your color",
            type: "SUB_COMMAND",
          },
        ],
      },
      guild.id,
    )
  }
}
