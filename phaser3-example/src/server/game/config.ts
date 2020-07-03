import 'phaser'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.HEADLESS,
  parent: 'phaser-game',
  width: 1000,
  height: 1000,
  backgroundColor: '#ffffff',
  banner: false,
  // @ts-ignore
  audio: false
}
export default config

export const arcadePhysics = {
  default: 'arcade',
  arcade: {
  }
}

