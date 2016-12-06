import { newBitmap } from '../../utils/PixiEx';
class TeamPlayerInfo{
    x:number
    y:number
    avatar:string//小頭像
    portrait:string//大頭像
    name:string
    constructor(options){
        this.x = options.x
        this.y = options.y
    }
}
export class TeamScene extends PIXI.Container {
    avatarCursor: PIXI.Sprite
    playerIdMap = {
        "1": new TeamPlayerInfo({x:100,y:50}),
        "2": new TeamPlayerInfo({x:100+40*1,y:50}),
        "3": new TeamPlayerInfo({x:100+40*2,y:50}),
        "4": new TeamPlayerInfo({x:100+40*3,y:50}),
    }
    constructor(stage:PIXI.Container) {
        super()
        stage.addChild(this)
        this.addChild(newBitmap({url: '/img/panel/stage1v1/ft/ftRankBg2.jpg'}));

        // let b = newBitmap({ url: '' })
        // this.addChild(b)

        let c = newBitmap({ url: '/img/panel/score/foul.png' })
        c.x = 0
        c.y = 0
        this.addChild(c)
        this.avatarCursor = c

        for(let playerIdx in this.playerIdMap){
            let teamPlayerInfo:TeamPlayerInfo = this.playerIdMap[playerIdx]

        }
    }

    selectPlayer(playerId) {
        let playerInfo:TeamPlayerInfo = this.playerIdMap[playerId]
        this.avatarCursor.x = playerInfo.x
        this.avatarCursor.y = playerInfo.y
    }
}