import { Guild } from "discord.js"

import { addGuildCommands } from "../helpers/interactions"

export const handleNewGuild = async (guild: Guild) => {
  await addGuildCommands(guild)

  const roles = await guild.roles.fetch()
  const clientRole = roles.find(({ managed }) => managed)
  const clientRoleName = clientRole?.name ?? "managed"

  guild.systemChannel?.send(
    [
      "hello, i am a bot that manages colors",
      "use slash command `/color` to explore what i can do",
      "",
      `<@${guild.ownerId}> move my \`${clientRoleName}\` role above other roles if you already have roles with colors and want to keep them`,
      "the other option is to clear other role colors",
      "this is because discord color hierarchly prioritizes which role is the highest",
    ].join("\n"),
  )
}
