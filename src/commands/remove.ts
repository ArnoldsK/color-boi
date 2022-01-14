import { GuildMember } from "discord.js"
import { removeColorRoles } from "../helpers/member"

export const removeMemberColor = async (
  member: GuildMember,
): Promise<string> => {
  await removeColorRoles(member)

  return `no more color`
}
