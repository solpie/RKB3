import { newModal, newBitmap } from "../../../utils/PixiEx";
import { FontName } from "../../../const";
import { getGroupData, getHupuWS } from "../../../utils/HupuAPI";
import { firstBy } from "../../../utils/thenBy";
import { imgLoader } from "../../../utils/ImgLoader";
declare let io;
export class Row1 extends PIXI.Container {
    playerName: PIXI.Text
    winLose: PIXI.Text
    score: PIXI.Text
    avt: PIXI.Sprite
    constructor() {
        super()
        this.addChild(newBitmap({ url: '/img/panel/group/groupBg2item.png' }))

        this.avt = new PIXI.Sprite()
        this.avt.x = 610
        this.avt.y = 325
        this.addChild(this.avt)

        let rs = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '60px', fill: "#f2f2f2",
        }
        let l = new PIXI.Text('', rs)
        l.x = 783
        l.y = 340
        this.playerName = l
        this.addChild(l)

        l = new PIXI.Text('', rs)
        l.x = 1145
        l.y = this.playerName.y
        this.winLose = l
        this.addChild(l)

        l = new PIXI.Text('', rs)
        l.x = 1145
        l.y = this.playerName.y
        this.score = l
        this.addChild(l)
    }
    setData(data) {
        this.playerName.text = data.name

        this.winLose.text = data.win + '/' + data.lose
        this.winLose.x = 1195 - this.winLose.width * .5

        this.score.text = data.score + ''
        this.score.x = 1410 - this.score.width * .5

        imgLoader.loadTex(data.avatar, tex => {
            let avt = this.avt
            avt.texture = tex
            let s = (70 / 0.8) / tex.width
            // avt.x = avt.mask.x// - avt.texture.width * .5 * s
            // avt.y = avt.mask.y// - avt.texture.height * .5 * s
            avt.scale.x = avt.scale.y = s
        })
    }
}
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
export class Tab1 extends PIXI.Container {
    label: PIXI.Text
    idx: number
    constructor() {
        super()
        let bg = newBitmap({ url: '/img/panel/group/groupBg2tab.png' })
        bg.x = -12
        bg.y = -13
        this.addChild(bg)
        let rs = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '28px', fill: "#cdd3d6",
        }
        this.label = new PIXI.Text('', rs)
        this.label.x = 23
        this.label.y = 9
        this.addChild(this.label)
    }
    setIdx(idx) {
        this.idx = idx
        let c0 = [0xf0, 0xfa, 0xff]
        let c1 = [0xcb, 0xd1, 0xd4]
        let colorR = c0[0] - Math.floor((c0[0] - c1[0]) * idx / 8)
        let colorG = c0[1] - Math.floor((c0[1] - c1[1]) * idx / 8)
        let colorB = c0[2] - Math.floor((c0[2] - c1[2]) * idx / 8)
        this.label.style.fill = rgbToHex(colorR, colorG, colorB)
        console.log('r', colorG, 'g', colorG, 'b', colorB, this.label.style.fill);
    }
    setText(t) {
        this.label.text = t
    }
}
let gArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

export class GroupSp2 extends PIXI.Container {
    gameId: number
    groupArr: any = []
    rowArr: Array<Row1> = []
    tabArr: Array<Row1> = []
    groupTitle: PIXI.Text

    tabFocus: PIXI.Sprite
    // updateTime = 3000
    // updateCount = 3000
    constructor(parent, gameId) {
        super()
        this.gameId = gameId
        parent.addChild(this)
        this.addChild(newModal(0.7, null, null, 0x232b3b))
        this.addChild(newBitmap({ url: '/img/panel/group/groupBg2.png' }))


        let rs = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '40px', fill: "#e2e2e2",
        }
        let l = new PIXI.Text('小组赛第一轮', rs)
        l.x = 365
        l.y = 210
        this.groupTitle = l
        this.addChild(l)

        for (let i = 0; i < 3; i++) {
            let r = new Row1()
            r.y = 150 * i
            this.addChild(r)
            this.rowArr.push(r)
        }
        for (let i = 0; i < 8; i++) {
            let t = new Tab1()
            t.setText('GROUP  ' + gArr[i])
            t.setIdx(i)
            t.x = 350
            t.y = 290 + 60 * i
            this.addChild(t)
            this.groupArr.push(t)
        }


        this.tabFocus = newBitmap({ url: '/img/panel/group/groupBg2tabFocus.png' })
        this.tabFocus.x = -12
        this.tabFocus.y = -13
        this.addChild(this.tabFocus)

        this.updateData()
        // setInterval(_ => {
        //     this.updateCount -= 1000
        //     if (this.updateCount < 0) {
        //         this.updateCount = this.updateTime
        //         this.updateData()
        //     }
        // }, 1000)
        this.initMouse()
        this.initWS()
    }

    initWS() {
        getHupuWS((hupuWsUrl) => {
            let remoteIO = io.connect(hupuWsUrl);

            remoteIO.on('connect', () => {
                console.log('hupuAuto socket connected', hupuWsUrl, this.gameId);
                remoteIO.emit('passerbyking', {
                    game_id: this.gameId,
                    page: 'score'
                })
            });


            remoteIO.on('wall', (data: any) => {
                let event = data.et;
                if (event == 'commitGame') {
                    this.updateData()
                }
            })

        })
    }

    initMouse() {
        window.onmouseup = (e) => {
            let mx = e.clientX
            let my = e.clientY
            for (let g of this.groupArr) {
                let t = g
                if (mx > t.x && mx < t.x + t.width && my > t.y && my < t.y + t.height) {
                    console.log('click', t.label.text, t.idx);
                    // this.updateCount = this.updateTime
                    this.showGroup(t.idx)
                }
            }
        }
    }
    showGroup(idx) {
        let groupTab = this.groupArr[idx]
        this.tabFocus.x = groupTab.x - 12
        this.tabFocus.y = groupTab.y - 13
        let data = this.dataArr[idx]
        let round = 0;
        if (data.playerArr) {
            let playerArr = data.playerArr
            let orderArr = []
            for (let p of playerArr) {
                let pd = p.player
                if (pd.stats) {
                    let pData = {
                        name: pd.name,
                        avatar: pd.avatar,
                        win: pd.stats.match_win,
                        lose: pd.stats.match_lose,
                        state: Number(pd.status),// 1:晋级 2:淘汰 3:弃权
                        rank: pd.powerRank,
                        score: pd.stats.net_score
                    }
                    round += pData.win
                    orderArr.push(pData)
                }
                else {
                    console.log('error', pd);
                }
            }
            console.log(orderArr)
            orderArr = orderArr.sort(firstBy(function (v1, v2) { return v2.win - v1.win; })
                .thenBy(function (v1, v2) { return v2.score - v1.score; })
                .thenBy(function (v1, v2) { return v1.state - v2.state; })
            )

            for (let i = 0; i < this.rowArr.length; i++) {
                let row = this.rowArr[i];
                row.setData(orderArr[i])
            }
            return round
        }
    }
    setRoundIdx(round, idx) {
        let groupName = gArr[idx]
        this.groupTitle.text = '小组赛第' + round + '轮 ' + groupName + '组'
    }
    calcRound(data) {
        let round = 0
        if (data.playerArr) {
            let playerArr = data.playerArr
            for (let p of playerArr) {
                let pd = p.player
                if (pd.stats) {
                    round += pd.stats.match_win
                }
            }
        }
        return round
    }
    dataArr: any
    updateData() {
        let gameId;
        let curRound = 0;
        let curGroupIdx = 0
        let groupGameCountMap = {}
        this.dataArr = []
        getGroupData(this.gameId, res => {
            console.log(res.data)
            for (let groupName in res.data) {
                let idx = groupName.charCodeAt(0) - 65//A 65
                this.dataArr.push({ group: groupName, playerArr: res.data[groupName] })
                let winCount = this.calcRound({ playerArr: res.data[groupName] })
                groupGameCountMap[groupName] = winCount
            }
            curRound = Math.min(groupGameCountMap['H'] + 1, 3)

            let curGroupCount = groupGameCountMap['A'];
            if (curGroupCount == 0) {
                curGroupIdx = 0
            }
            else {
                for (let i = 1; i < gArr.length; i++) {
                    let gn = gArr[i]
                    if (gn != 'A') {
                        let round = groupGameCountMap[gn]
                        if (groupGameCountMap[gn] < curGroupCount) {
                            curGroupIdx = i
                            break;
                        }
                    }
                }
            }

            console.log('data arr', this.dataArr);
            // console.log('group game map', groupGameCountMap, 'round', curRound, 'group', curGroupIdx);
            this.showGroup(curGroupIdx)
            this.setRoundIdx(curRound, curGroupIdx)
        })
    }
}