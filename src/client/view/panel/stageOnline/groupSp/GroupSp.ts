import { $post } from '../../../utils/WebJsFunc';
import { setInterval } from 'timers';
import { newBitmap, newModal } from '../../../utils/PixiEx';
import { FontName } from '../../../const';
import { getGroupData } from '../../../utils/HupuAPI';
import { firstBy } from '../../../utils/thenBy';
import { imgLoader } from '../../../utils/ImgLoader';

class Row1 extends PIXI.Container {
    rankText: PIXI.Text
    nameText: PIXI.Text
    winText: PIXI.Text
    loseText: PIXI.Text
    scoreText: PIXI.Text
    constructor() {
        super()

        let rs = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '25px', fill: "#8696b7",
        }
        this.rankText = new PIXI.Text('', rs)
        this.rankText.style.fill = '#ccc'
        this.rankText.x = 0
        this.rankText.y = 0
        this.addChild(this.rankText)

        this.nameText = new PIXI.Text('', rs)
        this.nameText.x = 120
        this.nameText.y = this.rankText.y
        this.addChild(this.nameText)

        this.winText = new PIXI.Text('', rs)
        this.winText.x = 160
        this.winText.y = this.rankText.y
        this.addChild(this.winText)

        this.loseText = new PIXI.Text('', rs)
        this.loseText.x = 160
        this.loseText.y = this.rankText.y
        this.addChild(this.loseText)

        this.scoreText = new PIXI.Text('', rs)
        this.scoreText.x = 160
        this.scoreText.y = this.rankText.y
        this.addChild(this.scoreText)
    }
    _setSize(s) {
        this.rankText.style.fontSize = s + 'px'
        this.nameText.style.fontSize = s + 'px'
        this.winText.style.fontSize = s + 'px'
        this.loseText.style.fontSize = s + 'px'
        this.scoreText.style.fontSize = s + 'px'

    }
    setData(data) {
        // console.log('row data',data);
        if (data.isBig) {
            this.rankText.text = data.rank + ''
            this.rankText.x = 40 - this.rankText.width
            // this.rankText.x = -10

            this.nameText.text = data.name
            this.nameText.x = 95 - (this.nameText.width * .5)

            this.winText.text = data.win + ''
            this.winText.x = 183 - (this.winText.width * .5)


            this.loseText.text = data.lose + ''
            this.loseText.x = 222 - (this.loseText.width * .5)

            this.scoreText.text = data.score + ''
            this.scoreText.x = 278 - (this.scoreText.width * .5)
            // this.scale.x = this.scale.y = 1.2
            this._setSize(30)
        }
        else {
            // this.scale.x = this.scale.y = 1
            this._setSize(25)

            this.rankText.text = data.rank + ''
            this.rankText.x = 40 - this.rankText.width

            this.nameText.text = data.name
            this.nameText.x = 105 - (this.nameText.width * .5)

            this.winText.text = data.win + ''
            this.winText.x = 183 - (this.winText.width * .5)


            this.loseText.text = data.lose + ''
            this.loseText.x = 222 - (this.loseText.width * .5)

            this.scoreText.text = data.score + ''
            this.scoreText.x = 278 - (this.scoreText.width * .5)
        }
    }
}
class G1 extends PIXI.Container {
    avt: PIXI.Sprite
    groupText: PIXI.Text
    playerRowArr: Array<Row1>
    constructor() {
        super()
        let bg = newBitmap({ url: '/img/panel/group/groupBg.png' })
        this.addChild(bg)
        this.avt = new PIXI.Sprite()
        bg.addChild(this.avt)
        // this.avt.alpha = 0.2
        this.avt.x = 10
        this.avt.y = 10

        let avtMask = new PIXI.Graphics()
        avtMask.beginFill(0xffff00).drawRect(0, 0, 70 / 0.8, 70 / 0.8)
        // avtMask.alpha = 0.3
        avtMask.x = 20
        avtMask.y = 22
        bg.addChild(avtMask)
        this.avt.mask = avtMask


        let fg = newBitmap({ url: '/img/panel/group/groupFg.png' })
        this.addChild(fg)
        bg.scale.x = bg.scale.y =
            fg.scale.x = fg.scale.y =
            0.8


        let rs = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '28px', fill: "#BABABA",
        }
        this.groupText = new PIXI.Text('GROUP A', rs)
        this.groupText.x = 140
        this.groupText.y = 14
        this.addChild(this.groupText)


        this.playerRowArr = []
        for (let i = 0; i < 3; i++) {
            let r = new Row1()
            r.y = 90 + i * 50
            r.x = 50
            r.setData({
                isBig: i == 0,
                rank:  i, name: "", win: 0, lose: 0, score: 0
            })
            this.addChild(r)
            this.playerRowArr.push(r)
        }
        this.playerRowArr[1].y += 7
        this.playerRowArr[2].y += 4
    }

    setData(data) {
        this.groupText.text = 'GROUP ' + data.group

        if (data.playerArr) {
            let playerArr = data.playerArr
            let orderArr = []
            for (let p of playerArr) {
                let pd = p.player
                let pData = {
                    name: pd.name,
                    avatar: pd.avatar,
                    win: pd.stats.match_win,
                    lose: pd.stats.match_lose,
                    rank: pd.powerRank,
                    score: pd.stats.net_score
                }
                orderArr.push(pData)
            }
            console.log(orderArr)
            orderArr = orderArr.sort(firstBy(function (v1, v2) { return v2.win - v1.win; })
                .thenBy(function (v1, v2) { return v2.score - v1.score; }))

            let loadAvt = (url) => {
                imgLoader.loadTex(url, tex => {
                    let avt = this.avt
                    avt.texture = tex
                    let s = (70 / 0.8) / tex.width
                    avt.x = avt.mask.x// - avt.texture.width * .5 * s
                    avt.y = avt.mask.y// - avt.texture.height * .5 * s
                    avt.scale.x = avt.scale.y = s
                })
            }
            for (let i = 0; i < this.playerRowArr.length; i++) {
                let pra = this.playerRowArr[i];
                orderArr[i].isBig = (i == 0)
                if (orderArr[i].isBig) {
                    loadAvt(orderArr[i].avatar)
                }
                pra.setData(orderArr[i])
            }
        }
    }
}
export class GroupSp extends PIXI.Container {
    gameId: number
    groupArr: any = []
    constructor(parent, gameId) {
        super()
        this.gameId = gameId
        parent.addChild(this)
        this.addChild(newModal(0.8))
        let gArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

        for (let i = 0; i < 8; i++) {
            let g1 = new G1()
            if (i < 4) {
                g1.x = 50 + i * 480
                g1.y = 100
            }
            else {
                g1.x = 50 + (i - 4) * 480
                g1.y = 500
            }
            g1.setData({ group: gArr[i] })
            this.groupArr.push(g1)
            this.addChild(g1)
        }
        console.log('show GroupSp');
        this.updateData()
        setInterval(_ => {
            this.updateData()
        }, 3000)
    }

    updateData() {
        let gameId;
        getGroupData(this.gameId, res => {
            // console.log(res.data)
            for (let groupName in res.data) {
                let idx = groupName.charCodeAt(0) - 65//A 65
                let g1 = this.groupArr[idx]
                // console.log(groupName, res.data[groupName])
                g1.setData({ group: groupName, playerArr: res.data[groupName] })
            }
        })
    }
}