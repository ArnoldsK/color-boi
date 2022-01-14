import { ColorResolvable, Guild, Role } from "discord.js"

export const getOrCreateRole = async (
  guild: Guild,
  name: string,
  color?: ColorResolvable,
): Promise<Role> => {
  const roles = await guild.roles.fetch()

  const clientRole = roles.find(({ managed }) => managed)
  const role = roles.find((role) => role.name === name)

  if (color === "#000000") {
    color = "#000001"
  }

  return (
    role ||
    guild.roles.create({
      name,
      color,
      position: clientRole?.position,
    })
  )
}
