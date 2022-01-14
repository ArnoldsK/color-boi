import { GuildMember } from "discord.js"

import {
  getImageBestColorData,
  parseHexColor,
  roleName,
} from "../helpers/color"
import { removeColorRoles } from "../helpers/member"

import { getOrCreateRole } from "../helpers/role"

export const autoMemberColor = async (member: GuildMember): Promise<string> => {
  const avatarUrl = member.displayAvatarURL({
    format: "png",
    dynamic: false,
    size: 64,
  })

  const { colorHex } = await getImageBestColorData(avatarUrl)
  const color = parseHexColor(colorHex)

  if (!color) {
    return "seems like i can't do that, sorry"
  }

  await removeColorRoles(member)

  const role = await getOrCreateRole(member.guild, roleName(color), color)

  await member.roles.add(role).catch(() => false)

  return `new color, did i guess well?`
}
