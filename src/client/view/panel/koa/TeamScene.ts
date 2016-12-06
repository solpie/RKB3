import { newBitmap } from '../../utils/PixiEx';

export class TeamScene extends PIXI.Container {
    avatarCursor: PIXI.Sprite
    playerIdMap = {
        "1234": { avatar: { x: 0, y: 0, url: "", name: "", avatar: "" } }
    }
    constructor() {
        super()
        let b = newBitmap({ url: '' })
        this.addChild(b)

        let c = newBitmap({ url: '/img/panel/score/foul.png' })
        c.x = 0
        c.y = 0
        this.addChild(c)
        this.avatarCursor = c
    }

    selectPlayer(playerId) {

    }
}