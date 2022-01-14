import { GuildMember } from "discord.js"

import { ColorRolePrefix } from "../constants"

export const removeColorRoles = async (member: GuildMember) => {
  const roles = await member.guild.roles.fetch()

  for (const role of roles.values()) {
    if (!role.name.startsWith(ColorRolePrefix)) continue

    const hasRole = role.members.has(member.id)

    if (!role.members.size || (role.members.size === 1 && hasRole)) {
      await role.delete()
    } else if (hasRole) {
      await member.roles.remove(role)
    }
  }
}
