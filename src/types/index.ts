export enum Command {
  Add = "add",
  Auto = "auto",
  Remove = "remove",
}

export type ColorData = {
  R: number
  G: number
  B: number
  color: number
  colorHex: `#${string}`
  isBright: boolean
}
