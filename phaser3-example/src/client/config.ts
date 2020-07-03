import PreloadScene from './scenes/preloadScene'
import MainScene from './scenes/mainScene'

const DEFAULT_WIDTH = 1000
const DEFAULT_HEIGHT = 1000

// the size of the world
export const world = {
  x: 0,
  y: 0,
  width: 2560,
  height: 1200
}

const config = {
  type: Phaser.WEBGL,
  backgroundColor: '#ffffff',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.NONE,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  scene: [PreloadScene, MainScene],
  physics: {
    default: 'matter',
    matter: {
      gravity: {
        y: 0.8
      },
      debug: false,
      debugBodyColor: 0xff00ff
    }
  }
}
export default config
