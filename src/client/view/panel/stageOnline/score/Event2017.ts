import { FontName, ViewConst } from '../../../const';
import { cnWrap, loadImg } from '../../../utils/JsFunc';
import { imgToTex, loadRes, newBitmap } from '../../../utils/PixiEx';
import { TweenEx } from '../../../utils/TweenEx';
import { showPanel } from '../../base/BasePanel';
import { fitWidth } from '../bracket/BracketGroup';
import { RankSection } from '../rank/RankSection';
import { ScoreRank } from '../scoreRank/ScoreRank';
import { BottomNotice } from '../scoreV2/BottomNotice';
import { NoticeV2 } from '../scoreV2/NoticeV2';
import { PlayerInfoV2 } from '../scoreV2/PlayerInfoV2';
import { RankV2 } from '../scoreV2/RankV2';
import { ScrollTextV2 } from '../scoreV2/ScrollTextV2';
import { Champion } from './Champion';
import { LogoFx } from './LogoFx';
import { ScoreFx } from './ScoreFx';
import { TagFx } from './TagFx';
import { TopInfo } from './TopInfo';
import { Winner } from './Winner';
import { NoticeLeftBottom } from '../scoreV2/notice_left_bottom';

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

    noticeV2: NoticeV2
    showNotice(data) {
        if (!this.noticeV2)
            this.noticeV2 = new NoticeV2(this)
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
        showPanel(RankV2, data, this)
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
    }

    showRollText(data) {
        showPanel(ScrollTextV2, data, this)
    }

    showPick8(data) {
        // Pick8Layer.get(this).show(data)
    }


    showBottomNoticeAccount(data) {
        showPanel(BottomNotice, data, this)
    }
    showPlayerPopInfo(data)
    {
        showPanel(BottomNotice,data,this)
    }
   
}