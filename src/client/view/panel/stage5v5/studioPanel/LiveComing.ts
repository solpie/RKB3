import { newBitmap, setScale } from '../../../utils/PixiEx';
import { getTop5Data, getRoundList } from "../../../utils/HupuAPI";
import { imgLoader } from "../../../utils/ImgLoader";
import { Text2, TextFac } from '../../../utils/TextFac';
import { FontName } from "../../../const";
import { cnWrap } from "../../../utils/JsFunc";
import { TextTimer } from '../../../utils/TextTimer';

export class LiveComing extends PIXI.Container {
    cacheTime: any
    infoArr: any


    avt: PIXI.Sprite
    playerName: Text2
    playerHWA: Text2
    playerInfo: Text2

    address: Text2

    constructor() {
        super()
        this.addChild(newBitmap({ url: '/img/panel/studio/comingFg.png' }))

        let playerMask = newBitmap({ url: '/img/panel/studio/comingMask.png' })
        this.addChild(playerMask)

        this.avt = new PIXI.Sprite
        this.addChild(this.avt)
        let s = 635 / 550
        this.avt.x = -678 * s
        this.avt.y = -185 * s
        this.avt.mask = playerMask
        //todo gameid to get location
        //todo key press to check
        let ns = {
            fontFamily: FontName.NotoSansHans,
            fontSize: '38px', fill: "#303030",
            fontWeight: 'bold'
        }

        this.playerName = TextFac.new_(ns, this)
            .setPos(122, 700)
            .setText('')

        ns.fontSize = '32px'
        ns.fill = '#000'
        this.address = TextFac.new_(ns, this)
            .setPos(652, 882)

        ns.fontSize = '32px'
        ns.fontWeight = ''
        ns.fill = '#606060'
        this.playerHWA = TextFac.new_(ns, this)
            .setPos(this.playerName.x, 794)
            .setText('')


        let info = ''

        this.playerInfo = TextFac.new_(ns, this)
            .setPos(this.playerName.x, 872)
            .setText(cnWrap(info + info + info, 20, 79))

        window.onkeyup = (e) => {
            console.log('key up', e.key, e.keyCode);
            if (e.key == 'q' || e.keyCode == 81) {
                this.showPlayer()
            }
        }

        getTop5Data(res => {
            let d = JSON.parse(res)
            console.log('top5 data', res, d);
            this.infoArr = d// JSON.parse(res)
            let tabArr = []
            let imgArr = []
            this.cacheTime = new Date().getTime()
            for (let i = 0; i < 5; i++) {
                // if (infoArr[i]) {
                imgArr.push(`/img/player/top5/${this.infoArr[i].img}.png?t=` + this.cacheTime)
                //     this.infoArr[i] //player info
                // }
            }

            // imgArr.push('/img/panel/top5/bg.png')

            imgLoader.loadTexArr(imgArr, _ => {
                if (this.infoArr.length)
                    this.showPlayer()
            })
        })

        let gameId = 645
        getRoundList(res => {
            for (let i = 0; i < res.data.length; i++) {
                let roundData = res.data[i];
                if (roundData.id == gameId) {
                    let addr = roundData.site_address
                    this.address.setText(addr)
                    console.log('get location', roundData);
                    return
                }
            }
        })


        ns.fontSize = '38px'
        ns.fill = '#000'
        let timer = new TextTimer('', ns)
        timer.isMin = true
        timer.x = 1730
        timer.y = 90
        this.addChild(timer)
        var pd = function (d) {
            if (d < 10) return '0' + d;
            return d + ""
        }
        var d = new Date()
        var endTime = '19:30'
        var end = new Date(pd(d.getMonth() + 1) + '/' + pd(d.getDate()) + "/" + d.getFullYear() + ' ' + endTime);
        var distance = Math.floor((end - d)/1000);
        timer.setTimeBySec(distance)
        timer.toggleTimer()

        setInterval(_ => {
            this.showPlayer()
        },9000)
    }


    curIdx = 0
    showPlayer() {
        let player = this.infoArr[this.curIdx]
        this.playerHWA.setText(player.hwa[2] + '岁 '
            + player.hwa[0] + 'cm '
            + player.hwa[1] + 'kg '
        )
        this.playerName.setText(player.name)
        let info = player.info.replace(/\n/g, ",")
        console.log('show info', info);
        this.playerInfo.setText(cnWrap(info, 20, 79))

        this.curIdx = (this.curIdx + 1) % this.infoArr.length

        this.avt.texture = imgLoader.getTex(`/img/player/top5/${player.img}.png?t=` + this.cacheTime)
        setScale(this.avt, 635 / 550)
    }
}