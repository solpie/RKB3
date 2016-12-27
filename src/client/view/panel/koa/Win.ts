import { _avatar } from '../../utils/HupuAPI';
import { ascendingProp, cnWrap, mapToArr } from '../../utils/JsFunc';
import { SpriteGroup } from '../../utils/SpriteGroup';
import { newBitmap } from '../../utils/PixiEx';
import { TweenEx } from '../../utils/TweenEx';
import { FontName, ViewConst } from '../../const';
export class WinTeam extends PIXI.Container {
    modal: PIXI.Graphics
    bg: PIXI.Sprite
    avatar: PIXI.Sprite
    ax
    ay
    msk: PIXI.Sprite
    ctn: PIXI.Container
    ftLogo: PIXI.Sprite//82 x 82
    fx
    fy

    groupCtn: PIXI.Container
    introText: PIXI.Text

    ftName: PIXI.Text
    teamName: PIXI.Text
    winGroupMask: SpriteGroup
    winIcon: SpriteGroup
    constructor(parent: PIXI.Container) {
        super()
        parent.addChild(this)
        this.modal = new PIXI.Graphics
        this.modal.drawRect(0, 0, ViewConst.STAGE_WIDTH, ViewConst.STAGE_HEIGHT)
        this.modal.alpha = 0
        // this.modal.visible = false
        this.addChild(this.modal)

        this.ctn = new PIXI.Container()
        this.addChild(this.ctn)

        this.ax = 453
        this.ay = 428
        let bg = new PIXI.Graphics().beginFill(0x222222)
            .drawRect(0, 0, 326, 326)
        this.ctn.addChildAt(bg, 0)
        this.msk = newBitmap({ url: '/img/panel/koa/hp/winMask.png' })
        // this.msk.alpha = 0
        this.ctn.addChild(this.msk)
        bg.x = this.ax
        bg.y = this.ay
        bg.mask = this.msk

        this.fx = 731
        this.fy = 200
        this.bg = newBitmap({ url: '/img/panel/koa/hp/winBg.png' })
        this.ctn.alpha = 0
        // this.bg.visible = false
        this.ctn.addChild(this.bg)

        // this.avatar = newBitmap({ url: '/img/player/avatar/st.png' })
        this.setAvatar(_avatar('st.png'))
        // this.setFtLogo('/img/ft/1.jpg')
        let ftStyle = {
            fontFamily: FontName.MicrosoftYahei,
            fontWeight: 'bold',
            fontSize: '60px', fill: "#fff"
        }
        this.ftName = new PIXI.Text('', ftStyle)
        this.ftName.x = 830
        this.ftName.y = 203
        this.ctn.addChild(this.ftName)

        ftStyle.fontSize = '40px'
        ftStyle.fontWeight = ''
        this.teamName = new PIXI.Text('', ftStyle)
        this.teamName.x = 200
        this.teamName.y = 303
        this.ctn.addChild(this.teamName)

        this.groupCtn = new PIXI.Container
        this.groupCtn.x = 820
        this.groupCtn.y = 563
        this.ctn.addChild(this.groupCtn)
        let winGroupBg = new SpriteGroup({ invert: 208, img: '/img/panel/koa/hp/winGroup.png', count: 3 })
        this.winGroupMask = new SpriteGroup({ invert: 208, img: '/img/panel/koa/hp/winGroupMask.png', count: 3 })
        this.groupCtn.addChild(this.winGroupMask)
        this.groupCtn.addChild(winGroupBg)

        this.winIcon = new SpriteGroup({ invert: 208, img: '/img/panel/koa/hp/win.png', count: 3 })
        this.winIcon.x = 820
        this.winIcon.y = 535
        this.ctn.addChild(this.winIcon)

        let introStyle = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '20px', fill: "#fff",
            lineHeight: 33
        }
        this.introText = new PIXI.Text('', introStyle)
        this.introText.x = 812
        this.introText.y = 445
        this.ctn.addChild(this.introText)
        // this.test()
    }

    test() {
        this.setIntro('今日，一段三星Galaxy Note 7爆炸的视频在YouTube上疯传（相关搜索结果达到了约6,550条），据传视频中被炸伤的是美国好声音导师、著名嘻哈歌手Cee-Lo Green。视频画面中，当时一位长相似Cee-Lo Green的黑人男子在演播室后台接电话时，手机突然爆炸冒出火花，随后男子倒地（疑似重伤，甚至传出了被炸死的消息）。不少网友猜测，爆炸的手机')
        this.setIntro('一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十')
        this.setFtName('FTG')
        this.setTeamName('爆炸的手机')
        this.show()
    }

    setFtName(n) {
        this.ftName.text = n
        this.ftName.x = Math.max((ViewConst.STAGE_WIDTH - this.ftName.width) * .5, 830)
    }

    setTeamName(n) {
        this.teamName.text = n
        this.teamName.x = (ViewConst.STAGE_WIDTH - this.teamName.width) * .5
    }

    setIntro(text) {
        this.introText.text = cnWrap(text, 58, 115)
    }

    setAvatar(url: string) {
        if (this.avatar) {
            if (this.avatar.parent)
                this.avatar.parent.removeChild(this.avatar)
            this.avatar = null
        }
        this.avatar = newBitmap({
            url: url, x: this.ax, y: this.ay, callback: (img) => {
                this.avatar.scale.x = this.avatar.scale.y = 324 / img.height
                this.avatar.x -= (this.avatar.width - 326) * .5
            }
        })
        this.avatar.mask = this.msk
        this.ctn.addChildAt(this.avatar, 1)
    }


    _makeGroup(urlArr) {

        // for (var i = 0; i < urlArr.length; i++) {
        //     var url = urlArr[i];
        //     this.groupCtn.addChild(newBitmap({x:iurl:'/img/panel/koa/hp/winGroup.png'}))
        // }

    }

    setFtLogo(url) {
        if (this.ftLogo) {
            if (this.ftLogo.parent)
                this.ftLogo.parent.removeChild(this.ftLogo)
            this.ftLogo = null
        }
        this.ftLogo = newBitmap({
            url: url, x: this.fx, y: this.fy, callback: (img) => {
                this.ftLogo.scale.x = this.ftLogo.scale.y = 82 / 120
                this.ctn.addChildAt(this.ftLogo, 0)
            }
        })
    }
    setTeam(team) {
        console.log('set Team', team);
        let sa = team.scoreArr
        this.setTeamName(sa[0]+' - '+sa[1])
        this.setFtName(team.name)
        var mvp = team.mvp
        // this.winTeam.setAvatar()
        this.setFtLogo('/img/ft/' + team.logo)
        this.setIntro(team.intro)
        this.show()
        while (this.groupCtn.children.length > 2) {
            this.groupCtn.removeChildAt(0)
        }
        if (team.winPlayerDocArr.length > 3)
            team.winPlayerDocArr.length = 3
        let mvpMap = {}
        var winPlayer

        for (var i = 0; i < team.winPlayerDocArr.length; i++) {
            var ctn = new PIXI.Graphics().beginFill(0x222222)
                .drawRect(0, 0, 82 * 2, 82)
            this.groupCtn.addChildAt(ctn, 0)
            ctn.x = 2 + i * 208
            var playerDocArr = team.winPlayerDocArr[i];
            if (team.is1pWin) {
                winPlayer = playerDocArr[0]
            }
            else {
                winPlayer = playerDocArr[1]
            }
            if (!mvpMap[winPlayer.id]) {
                mvpMap[winPlayer.id] = { win: 0, player: winPlayer }
            }
            mvpMap[winPlayer.id].win++

            var p1 = newBitmap({ url: _avatar(playerDocArr[0].avatar) })
            // p1.x = 2 + i * 208
            // p1.y = 20
            p1.scale.x = p1.scale.y = 82 / 120
            // p1.mask = this.winGroupMask.spArr[i]
            // this.groupCtn.addChildAt(p1, 0)
            var p2 = newBitmap({ url: _avatar(playerDocArr[1].avatar) })
            p2.x = 83 / p1.scale.x * 2
            p2.scale.x = -1
            // p2.scale.x = p2.scale.y = 70 / 400
            p1.addChild(p2)
            ctn.mask = this.winGroupMask.spArr[i]
            ctn.addChild(p1)
        }
        if (team.is1pWin) {
            this.winIcon.x = 820 + 8
        }
        else {
            this.winIcon.x = 820 + 90
        }

        let mvpArr = mapToArr(mvpMap)
        var mvp
        if (mvpArr.length == 3 || mvpArr.length == 1)
            mvp = winPlayer
        else if (mvpArr.length == 2) {
            mvpArr[0].win > mvpArr[1].win ? mvp = mvpArr[0].player
                : mvp = mvpArr[1].player
        }
        console.log('mvp', mvp);
        this.setAvatar(mvp.portrait)
        // this.setAvatar(_avatar(mvp.avatar))
    }
    show() {
        console.log('show win');
        new TweenEx(this.modal)
            .to({ alpha: 0.7 }, 100)
            .call(() => {
                TweenEx.to(this.ctn, 100, { alpha: 1 })
            })
            .delay(10000)
            .call(() => {
                this.hide()
            })
            .start()
    }

    hide() {
        new TweenEx(this.ctn)
            .to({ alpha: 0 }, 100)
            .call(() => {
                TweenEx.to(this.modal, 100, { alpha: 0 })
            })
            .start()
    }
}