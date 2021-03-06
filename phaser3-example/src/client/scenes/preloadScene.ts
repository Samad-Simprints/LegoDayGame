import io from 'socket.io-client'
import { SKINS } from '../../constants'
import { createDudeAnimations, createMummyAnimation } from '../components/animations'

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.setBaseURL('static/client')
    this.load.image(SKINS.BOX.toString(), 'assets/box.png')
    this.load.image(SKINS.STAR.toString(), 'assets/star.png')
    this.load.image('bug', 'assets/bug.png')
    // this.load.image('starfield', 'assets/starfield.jpg')
    this.load.image('controls', 'assets/controls.png')
    this.load.spritesheet(SKINS.DUDE.toString(), 'assets/dude.png', {
      frameWidth: 32,
      frameHeight: 48
    })
    this.load.spritesheet('fullscreen', 'assets/fullscreen.png', {
      frameWidth: 64,
      frameHeight: 64
    })
    this.load.spritesheet(SKINS.MUMMY.toString(), 'assets/mummy37x45.png', { frameWidth: 37, frameHeight: 45 })
    this.load.tilemapTiledJSON('tilemap_csv', 'assets/tilemap_uncomp.json');
    this.load.image('black_png', 'assets/black.png');
  }

  create() {
    createDudeAnimations(this)
    createMummyAnimation(this)

    // this.map = this.add.tilemap('tilemap_csv');
    // this.tileset = this.map.addTilesetImage('black', 'black', 10, 10, 0, 0);
    // this.layer = this.map.createStaticLayer(0, this.tileset, 0, 0);
    // this.layer.setCollisionByExclusion([-1]);

    // connecting to socket.io
    const url = `${location.origin}/G` /* short for stats */

    let socket = io.connect(url, { transports: ['websocket'] }) as Socket

    // on reconnection, reset the transports option, as the Websocket
    // connection may have failed (caused by proxy, firewall, browser, ...)
    socket.on('reconnect_attempt', () => {
      socket.io.opts.transports = ['polling', 'websocket']
    })

    socket.on('connect', () => {
      console.log("You're connected to socket.io")
    })

    // we wait until we have a valid clientId, then start the MainScene
    socket.on('clientId', (clientId: number) => {
      socket.clientId = clientId
      console.log('Your client id', clientId)
      this.scene.start('MainScene', { scene: 'ArcadeScene', level: 0, socket: socket })
    })
  }
}
