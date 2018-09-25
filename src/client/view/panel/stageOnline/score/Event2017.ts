import { ScoreRank } from './../scoreRank/ScoreRank';
import { FontName, ViewConst } from '../../../const';
import { cnWrap, loadImg } from '../../../utils/JsFunc';
import { imgToTex, loadRes, newBitmap } from '../../../utils/PixiEx';
import { TweenEx } from '../../../utils/TweenEx';
import { fitWidth } from '../bracket/BracketGroup';
import { Champion } from './Champion';
import { getFtLogoUrl2, getFtName } from './Com2017';
import { Group } from './Group';
import { LogoFx } from './LogoFx';
import { NoticeSprite } from './NoticeSprite';
import { Ranking } from './Ranking';
import { ScoreFx } from './ScoreFx';
import { TopInfo } from './TopInfo';
import { VictoryM2 } from './VictoryM2';
import { Victory2 } from "./Victory2";
import { Winner } from './Winner';
import { Top5 } from '../top5/Top5';
import { VsTitle } from './VsTitle';
import { RollText } from './RollText';
import { RankSection } from '../rank/RankSection';
import { TagFx } from './TagFx';
import { Pick8Layer } from '../pick8/Pick8';
import { PlayerInfoV2 } from '../scoreV2/PlayerInfoV2';
import { NoticeV2 } from '../scoreV2/NoticeV2';

export class Event2017 extends PIXI.Container {
    modal: PIXI.Graphics
    pName: PIXI.Text
    pWeight: PIXI.Text
    pHeight: PIXI.Text
    pIntro: PIXI.Text
    pRankScore: PIXI.Text
    ftName: PIXI.Text
    avatar: PIXI.Sprite
    ftLogo: PIXI.Sprite
    medal: PIXI.Sprite

    winLose: PIXI.Text
    winPanel: PIXI.Container


    _texMap: any = {}

    constructor(stage: PIXI.Container, isDark = false) {
        super()
        stage.addChild(this)
        this.winPanel = new PIXI.Container()
        this.addChild(this.winPanel)

        this.winPanel.visible = false
        this.modal = new PIXI.Graphics()
            .beginFill(0x000000, .7)
            .drawRect(0, 0, ViewConst.STAGE_WIDTH, ViewConst.STAGE_HEIGHT)
        this.winPanel.addChild(this.modal)
        let bgUrl = '/img/panel/score2017/winBg.png'
        if (isDark)
            bgUrl = '/img/panel/score2017/winBgDark.png'

        let bg = newBitmap({
            url: bgUrl,
        })
        this.winPanel.addChild(bg)

        let ts = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '22px', fill: '#fff',
            fontWeight: 'bold'
        }
        let t = new PIXI.Text("", ts)
        this.winPanel.addChild(t)
        t.x = 923
        t.y = 318
        t.style['fontSize'] = '40px'
        this.pName = t

        t = new PIXI.Text("", ts)
        this.winPanel.addChild(t)
        t.style['fontSize'] = '34px'
        t.x = 540
        t.y = 750
        this.pIntro = t

        t = new PIXI.Text("", ts)
        this.winPanel.addChild(t)
        t.style['fontSize'] = '32px'
        t.x = 1240
        t.y = 427
        this.pWeight = t

        t = new PIXI.Text("", ts)
        this.winPanel.addChild(t)
        t.style['fontSize'] = '30px'
        t.x = 897
        t.y = this.pWeight.y
        this.pHeight = t

        t = new PIXI.Text("", ts)
        this.winPanel.addChild(t)
        t.style['fontSize'] = '40px'
        t.x = 570
        t.y = 647
        this.ftName = t

        t = new PIXI.Text("", ts)
        this.winPanel.addChild(t)
        t.style['fontSize'] = '40px'
        t.x = 805
        t.y = 617
        this.winLose = t

        t = new PIXI.Text("", ts)
        this.winPanel.addChild(t)
        t.style['fontSize'] = '40px'
        t.x = 330
        t.y = this.winLose.y
        this.pRankScore = t

        this.avatar = new PIXI.Sprite()
        this.avatar.x = 511
        this.avatar.y = 314
        this.winPanel.addChild(this.avatar)

        // let amsk = new PIXI.Graphics()
        //     .beginFill(0xff0000)
        //     .drawRect(0, 0, 200, 200)
        // amsk.x = 500
        // amsk.y = 340
        // this.addChild(amsk)

        this.ftLogo = new PIXI.Sprite()
        this.ftLogo.x = 498
        this.ftLogo.y = 644
        this.winPanel.addChild(this.ftLogo)

        this.medal = new PIXI.Sprite()
        this.medal.x = 566
        this.medal.y = 544
        this.winPanel.addChild(this.medal)
    }

    showWin(player) {
        // let name = player.name
        let level = Number(player.level)
        // var medal = Math.ceil(level / 5)
        let medal = level
        // if (medal > 5)
        //     medal = 5
        // medal = 2
        if (medal > 0) {
            let medalUrl = '/img/panel/score2017/medal' + medal + '.png'
            if (!this._texMap[medalUrl])
                loadImg(medalUrl, (img) => {
                    this.medal.texture = this._texMap[medalUrl] = imgToTex(img)
                })
            else
                this.medal.texture = this._texMap[medalUrl]
            this.medal.visible = true
        }
        else
            this.medal.visible = false
        // let intro = player.intro
        // let weight = player.weight
        // let height = player.height
        let avatar = player.avatar
        let ftName = getFtName(player.groupId)

        this.pName.text = player.name
        this.pIntro.text = cnWrap('参赛宣言：' + player.intro, 49, 98)
        this.pWeight.text = player.weight + " KG"
        this.pHeight.text = player.height + " CM"
        this.ftName.text = ftName

        fitWidth(this.ftName, 155, 50)
        this.winLose.text = player.winAmount + ' 胜 / ' + player.loseAmount + ' 负'
        this.winLose.x = 935 - this.winLose.width * .5
        this.pRankScore.text = player.roundScore
        this.pRankScore.x = 1265 - this.pRankScore.width * 0.5
        if (!this._texMap[avatar])
            loadRes(avatar, (img) => {
                this.avatar.texture = this._texMap[avatar] = imgToTex(img)
                this.avatar.texture['w'] = img.width
                this.avatar.texture['h'] = img.height
            }, true)
        else
            this.avatar.texture = this._texMap[avatar]
        console.log('tex width', this.avatar.texture['w'])
        // this.avatar.scale.x = this.avatar.scale.y = 213
        this.avatar.height = this.avatar.width = 213

        let ftUrl = getFtLogoUrl2(player.groupId)
        if (!this._texMap[ftUrl])
            loadImg(ftUrl, (img) => {
                this.ftLogo.texture = this._texMap[ftUrl] = imgToTex(img)
                this.ftLogo.visible = true
            }, (e) => {
                console.log('fterror', e)
                this.ftLogo.visible = false
            })
        else {
            this.ftLogo.texture = this._texMap[ftUrl]
            this.ftLogo.visible = true
        }
        this.ftLogo.width = this.ftLogo.height = 56
        this.winPanel.visible = true

        TweenEx.delayedCall(6000, () => {
            this.winPanel.visible = false
        })
    }

    noticeSprite: NoticeSprite
    noticeV2: NoticeV2
    showNotice(data) {
        // if (!this.noticeSprite) {
        //     this.noticeSprite = new NoticeSprite()
        //     this.addChild(this.noticeSprite)
        // }
        // this.noticeSprite.setText(content, title, isLeft, isBold)
        // this.noticeSprite.show()
        if (!this.noticeV2)
            this.noticeV2 = new NoticeV2(this)
        // content, title, isLeft, isBold
        this.noticeV2.show(data)
    }

    champion: Champion
    showChampion(title, player) {
        if (!this.champion) {
            this.champion = new Champion()
            this.addChild(this.champion)
        }

        console.log('champion', player);
        this.champion.setChampion(title, player.name, player.info, player.ftId)
    }

    logoFx: LogoFx
    showLogoFx() {
        this.logoFx = new LogoFx()
        this.addChild(this.logoFx)
    }

    // victory2: Victory2
    // showWin2(player) {
    //     this.victory2 = new Victory2()
    //     this.addChild(this.victory2)
    // }

    // fxX: number
    // fxY: number
    fxPoint: PIXI.Graphics
    scoreFx: ScoreFx
    setFxPoint(mx, my) {
        // this.fxX = mx
        // this.fxY = my
        if (!this.fxPoint) {
            this.fxPoint = new PIXI.Graphics()
            this.fxPoint.beginFill(0xff0000)
                .drawRect(0, 0, 5, 5)
            this.addChild(this.fxPoint)
        }

        this.fxPoint.x = mx
        this.fxPoint.y = my
        this.fxPoint.visible = true
        TweenEx.delayedCall(500, () => {
            this.fxPoint.visible = false
        })
    }

    showScoreFx() {
        if (!this.scoreFx) {
            this.scoreFx = new ScoreFx()
            this.addChild(this.scoreFx)
            this.scoreFx.scale.x =
                this.scoreFx.scale.y = .5
        }
        this.scoreFx.x = this.fxPoint.x - 500 * this.scoreFx.scale.x
        this.scoreFx.y = this.fxPoint.y - 500 * this.scoreFx.scale.x
        this.scoreFx.playOne()
    }

    bdBg: PIXI.Sprite
    showBd(v) {
        if (!this.bdBg) {
            this.bdBg = newBitmap({ url: '/img/panel/bd/bd1.png' })
            this.bdBg.y = ViewConst.STAGE_HEIGHT - 190
            this.addChild(this.bdBg)
        }
        this.bdBg.visible = v
    }

    groupPanel: Group
    showGroup(data) {
        if (!this.groupPanel) {
            this.groupPanel = new Group(this)
        }
        this.groupPanel.show(data.group, data.playerArr)
        // TweenEx.delayedCall(12000, () => {
        //     this.hideGroup()
        // })
    }

    hideGroup() {
        this.groupPanel.hide()
    }


    topInfo: TopInfo
    showTopInfo(progressText?: string, roundText?: string) {
        if (!this.topInfo)
            this.topInfo = new TopInfo(this)
        this.topInfo.setInfo(progressText, roundText)
    }

    hideTopInfo() {
        this.topInfo.hide()
    }

    ranking: RankSection
    showRanking(data) {
        if (!this.ranking) {
            this.ranking = new RankSection()
            this.ranking.create(this, data)
        }
        data.visible ?
            this.ranking.show(data)
            : this.ranking.hide()
    }

    winner: Winner
    showVictory(data) {
        if (!this.winner) {
            this.winner = new Winner()
            this.winner.create(this)
        }
        let d: any = {}
        for (let k in data) {
            d['k'] = data['k']
        }
        d.rec = { win: data.winAmount, lose: data.loseAmount }
        d.winner = data
        this.winner.show(d)

    }
    hideVictory() {
        if (this.winner) {
            this.winner.hide()
        }
    }
    top5: PlayerInfoV2
    showTop5(data) {
        if (!this.top5) {
            this.top5 = new PlayerInfoV2()
            this.top5.create(this, data)
        }
        else {
            data.visible ?
                this.top5.show(data)
                : this.top5.hide()
        }
    }


    tagFx: TagFx
    showTagFx(data) {
        if (!this.tagFx)
            this.tagFx = new TagFx(this, data)
        else {
            data.visible ?
                this.tagFx.show(data)
                : this.tagFx.hide(data)
        }
    }

    scoreRank: ScoreRank
    showScoreRank(data) {
        if (!this.scoreRank) {
            this.scoreRank = new ScoreRank()
            this.scoreRank.create(this, true)
        }
        this.scoreRank.show(data)
    }

    showScoreFx2(data) {
        // if (this.scoreRank) {
        //     this.scoreRank.showScoreFx(data)
        // }
    }

    rollText: RollText
    showRollText(data) {
        if (!this.rollText) {
            this.rollText = new RollText()
            this.rollText.create(this)
        }
        data.visible ?
            this.rollText.show(data)
            : this.rollText.hide()
    }

    showPick8(data) {
        Pick8Layer.get(this).show(data)
    }
    // noticeV2:NoticeV2
    // showNotice()
    // {

    // }
}