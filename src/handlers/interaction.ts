import { GuildMember, Interaction } from "discord.js"
import { addMemberColor } from "../commands/add"
import { autoMemberColor } from "../commands/auto"
import { removeMemberColor } from "../commands/remove"

import { CommandOptions } from "../constants"
import { Command } from "../types"

export const handleInteraction = async (interaction: Interaction) => {
  if (!interaction.isApplicationCommand()) return

  if (!(interaction.member instanceof GuildMember)) return

  const reply = (content: string) =>
    interaction.reply({
      content,
      ephemeral: true,
    })

  for (const item of interaction.options.data) {
    switch (item.name) {
      case Command.Add:
        for (const option of item.options ?? []) {
          switch (option.name) {
            case CommandOptions[Command.Add].Hex:
              reply(
                await addMemberColor(
                  interaction.member,
                  option.value as string,
                ),
              )
              break
          }
        }
        break

      case Command.Auto:
        reply(await autoMemberColor(interaction.member))
        break

      case Command.Remove:
        reply(await removeMemberColor(interaction.member))
        break
    }
  }
}
