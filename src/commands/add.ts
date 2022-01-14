import { GuildMember } from "discord.js"
import { parseHexColor, roleName } from "../helpers/color"
import { removeColorRoles } from "../helpers/member"

import { getOrCreateRole } from "../helpers/role"

export const addMemberColor = async (
  member: GuildMember,
  colorInput: string,
): Promise<string> => {
  const color = parseHexColor(colorInput)

  if (!color) {
    return "that is not a hex color, it should look like #B492D4"
  }

  await removeColorRoles(member)

  const role = await getOrCreateRole(member.guild, roleName(color), color)

  await member.roles.add(role).catch(() => false)

  return `new color, how does it look?`
}
