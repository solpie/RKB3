import { cnWrap } from '../../utils/JsFunc';
import { SpriteGroup } from '../../utils/SpriteGroup';
import { newBitmap } from '../../utils/PixiEx';
import { TweenEx } from '../../utils/TweenEx';
import { FontName, ViewConst } from '../../const';
export class Win extends PIXI.Container {
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
        this.msk = newBitmap({ url: '/img/panel/koa/hp/winMask.png' })
        // this.msk.alpha = 0
        this.ctn.addChild(this.msk)

        this.fx = 731
        this.fy = 200
        this.bg = newBitmap({ url: '/img/panel/koa/hp/winBg.png' })
        this.ctn.alpha = 0
        // this.bg.visible = false
        this.ctn.addChild(this.bg)

        // this.avatar = newBitmap({ url: '/img/player/avatar/st.png' })
        this.setAvatar('/img/player/avatar/st.png')
        this.setFtLogo('/img/ft/1.jpg')
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
        this.groupCtn.addChild(winGroupBg)

        let introStyle = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '20px', fill: "#fff"
        }
        this.introText = new PIXI.Text('', introStyle)
        this.introText.x = 812
        this.introText.y = 445
        this.ctn.addChild(this.introText)
        this.test()

    }

    test() {
        this.setIntro('今日，一段三星Galaxy Note 7爆炸的视频在YouTube上疯传（相关搜索结果达到了约6,550条），据传视频中被炸伤的是美国好声音导师、著名嘻哈歌手Cee-Lo Green。视频画面中，当时一位长相似Cee-Lo Green的黑人男子在演播室后台接电话时，手机突然爆炸冒出火花，随后男子倒地（疑似重伤，甚至传出了被炸死的消息）。不少网友猜测，爆炸的手机')
        this.setFtName('FTG')
        this.setTeamName('爆炸的手机')
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
        this.introText.text = cnWrap(text, 58, 116)
    }

    setAvatar(url: string) {
        if (this.avatar) {
            this.avatar.parent.removeChild(this.avatar)
            this.avatar = null
        }
        this.avatar = newBitmap({
            url: url, x: this.ax, y: this.ay, callback: (img) => {
                this.avatar.scale.x = this.avatar.scale.y = 324 / img.width
            }
        })
        this.avatar.mask = this.msk
        this.ctn.addChildAt(this.avatar, 0)
    }


    _makeGroup(urlArr) {

        // for (var i = 0; i < urlArr.length; i++) {
        //     var url = urlArr[i];
        //     this.groupCtn.addChild(newBitmap({x:iurl:'/img/panel/koa/hp/winGroup.png'}))
        // }

    }

    setFtLogo(url) {
        if (this.ftLogo) {
            this.ftLogo.parent.removeChild(this.ftLogo)
            this.ftLogo = null
        }
        this.ftLogo = newBitmap({
            url: url, x: this.fx, y: this.fy, callback: (img) => {
                this.ftLogo.scale.x = this.ftLogo.scale.y = 82 / img.width
            }
        })
        this.ctn.addChildAt(this.ftLogo, 0)
    }

    show() {
        console.log('show win');
        new TweenEx(this.modal)
            .to({ alpha: 0.7 }, 100)
            .call(() => {
                TweenEx.to(this.ctn, 100, { alpha: 1 })
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