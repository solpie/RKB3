import { FontName } from "../../../const";
import { getGroupData, getHupuWS } from "../../../utils/HupuAPI";
import { imgLoader } from "../../../utils/ImgLoader";
import { BitmapText, newBitmap, loadRes, imgToTex } from '../../../utils/PixiEx';
import { Text2, TextFac } from '../../../utils/TextFac';
import { firstBy } from "../../../utils/thenBy";
import { fitWidth } from '../bracket/BracketGroup';
import { AvtV2 } from './AvtV2';
declare let io;
export class Row1 extends PIXI.Container {
    playerName: Text2
    winLose: Text2
    score: Text2
    // avt: PIXI.Sprite
    avtV2: AvtV2
    constructor(avtCtn) {
        super()
        this.avtV2 = new AvtV2(this)
        let rs = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '34px', fill: "#444",
            fontWeight: 'bold'
        }
        let l = TextFac.new_(rs, this)
            .setPos(105, 12)
        this.playerName = l
        rs.fontSize = "44px"
        l = TextFac.new_(rs, this)
            .setY(this.playerName.y)
        this.winLose = l

        l = TextFac.new_(rs, this)
            .setY(this.playerName.y)
        this.score = l
    }
    setData(data) {
        if (data.name == "我也不知道要弄什么名字") {
            data.name="朱先生"
         }
        this.playerName.text = data.name
        fitWidth(this.playerName, 300, 50)

        this.winLose.setText(data.win + '/' + data.lose)
            .setAlignCenter(380)

        this.score.setText(data.score + "")
            .setAlignCenter(490)

        this.avtV2.load(data.avatar)
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

export class GroupV2 extends PIXI.Container {
    gameId: number
    groupArr: any = []
    rowArr: Array<Row1> = []
    tabArr: Array<Row1> = []
    groupTitle: PIXI.Text
    groupName: BitmapText
    // tabFocus: PIXI.Sprite

    // location: Text2
    // updateTime = 3000
    // updateCount = 3000
    p: any
    constructor(parent, gameId) {
        super()
        this.gameId = gameId
        parent.addChild(this)
        this.p = parent
        let avtCtn = new PIXI.Container()
        this.addChild(avtCtn)
        let bg = newBitmap({ url: '/img/panel/group/v2/groupBg.png' })
        this.addChild(bg)

        let rs = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '150px', fill: "#5c5b6f",
            fontWeight: 'bold'
        }

        let texUrl = '/img/panel/group/v2/ah.png'
        loadRes(texUrl, img => {
            let tex = imgToTex(img)
            let sheet = {
                text: 'A',
                animations: {
                    "A": 0, "B": 1, "C": 2, "D": 3, "E": 4,
                    "F": 5, "G": 6, "H": 7
                },
                texture: tex,
                frames: [
                    [0, 0, 111, 88],
                    [0, 89, 111, 88],
                    [112, 0, 111, 88],
                    [112, 89, 111, 88],
                    [0, 178, 111, 88],
                    [112, 178, 111, 88],
                    [224, 0, 111, 88],
                    [224, 89, 111, 88]]
            }
            let groupName = new BitmapText(sheet)
            this.groupName = groupName
            groupName.x = 1309
            groupName.y = 235
            this.groupTitle.visible = false
            this.addChild(groupName)
        })


        let l = new PIXI.Text('A', rs)
        l.x = 1300
        l.y = 190
        this.groupTitle = l
        this.addChild(l)

        for (let i = 0; i < 3; i++) {
            let r = new Row1(this)
            r.y = 116 * i + 488 - 14
            r.x = 1320
            this.addChild(r)
            this.rowArr.push(r)
        }


        for (let i = 0; i < 8; i++) {
            let t = new Tab1()
            t.setText(gArr[i] + " 组")
            t.setIdx(i)
            t.x = 360
            t.y = 280 + 57 * i
            // this.addChild(t)
            this.groupArr.push(t)
        }


        // this.tabFocus = newBitmap({ url: '/img/panel/group/groupBg2tabFocus.png' })
        // this.tabFocus.x = -12
        // this.tabFocus.y = -13
        // this.addChild(this.tabFocus)

        this.updateData()
        this.initWS()
    }
    showLeft(v) {
        v ? this.x = -1200 : this.x = 0;
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
                if (event == 'commitGame' || event == 'startGame') {
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
    hide() {
        if (this.parent)
            this.parent.removeChild(this)
    }
    _fillData(idx) {
        let groupTab = this.groupArr[idx]
        // this.tabFocus.x = groupTab.x - 12
        // this.tabFocus.y = groupTab.y - 13
        let data = this.dataArr[idx]
        this
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
    showGroup(idx, liveConf?) {
        this.p.addChild(this)
        if (idx < 0)
            return -1
        this._fillData(idx)
        this.setRoundIdx(idx)
        if (liveConf) {
            // this.location.setText(liveConf.round_title)
        }
    }
    setRoundIdx(idx) {
        let groupName = gArr[idx]
        this.groupTitle.text = String.fromCharCode(65 + idx)
        if (this.groupName)
            this.groupName.text = this.groupTitle.text
        // this.groupTitle.x = 960 - this.groupTitle.width * .5
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
            // this.showGroup(curGroupIdx)
            this._fillData(curGroupIdx)
        })
    }
}