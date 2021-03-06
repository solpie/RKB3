import { newBitmap, setScale } from '../../../utils/PixiEx';
import { getTop5Data, getRoundList, getTop5Data2, getPlayerArr } from '../../../utils/HupuAPI';
import { imgLoader } from "../../../utils/ImgLoader";
import { Text2, TextFac } from '../../../utils/TextFac';
import { FontName } from "../../../const";
import { cnWrap, ascendingProp } from "../../../utils/JsFunc";
import { TextTimer } from '../../../utils/TextTimer';

export class LiveComing extends PIXI.Container {
    cacheTime: any
    infoArr: any


    avt: PIXI.Sprite
    levelSP: PIXI.Sprite

    playerName: Text2
    playerHWA: Text2
    playerInfo: Text2

    address: Text2

    constructor(conf) {
        super()
        console.log('live conf', conf);
        let ctn1 = new PIXI.Container()
        this.addChild(ctn1)

        ctn1.addChild(newBitmap({ url: '/img/panel/studio/comingFg.png' }))
        this.addChild(newBitmap({ url: '/img/panel/studio/cdBg.png' }))
        ctn1.visible =true
        let playerMask = newBitmap({ url: '/img/panel/studio/comingMask.png' })
        ctn1.addChild(playerMask)

        this.avt = new PIXI.Sprite
        ctn1.addChild(this.avt)
        this.avt.x = 40
        this.avt.y = 39
        this.avt.mask = playerMask
        //todo gameid to get location
        //todo key press to check
        let ns = {
            fontFamily: FontName.MicrosoftYahei,
            fontSize: '38px', fill: "#303030",
            fontWeight: 'bold'
        }

        this.playerName = TextFac.new_(ns, ctn1)
            .setPos(122, 700)
            .setText('')

        ns.fontSize = '32px'
        ns.fill = '#000'
        this.address = TextFac.new_(ns, ctn1)
            .setPos(652, 882)

        ns.fontSize = '32px'
        ns.fontWeight = ''
        ns.fill = '#606060'
        this.playerHWA = TextFac.new_(ns, ctn1)
            .setPos(this.playerName.x, 794)
            .setText('')


        let info = ''

        this.playerInfo = TextFac.new_(ns, ctn1)
            .setPos(this.playerName.x, 872)
            .setText(cnWrap(info + info + info, 20, 79))

        this.levelSP = new PIXI.Sprite()
        ctn1.addChild(this.levelSP)
        this.levelSP.x = 30 + 15 + 8
        this.levelSP.y = 30 + 6 + 3

        window.onkeyup = (e) => {
            console.log('key up', e.key, e.keyCode);
            if (e.key == 'q' || e.keyCode == 81) {
                this.showPlayer()
            }
        }
        let starPlayerArr = conf.star_players.split('-')
        getPlayerArr(conf.star_players, pArr => {
            console.log('pArr', pArr);
            for (let player of pArr) {
                player.hwa = [player.height, player.weight, player.age]
                player.name = player.live_name
                player.info = player.brief
            }
            this.infoArr = pArr
            this.showPlayer()

        })



        let gameId = conf.game_id
        if (conf.address)
            this.address.setText(conf.address)
        else
            getRoundList(res => {
                for (let i = 0; i < res.data.length; i++) {
                    let roundData = res.data[i];
                    if (String(roundData.id) == String(gameId)) {
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
        if (conf.count_down) {
            let a = conf.count_down.split('T')
            let b = a[1].split(':')
            endTime = b[0] + ':' + b[1]
        }

        console.log('count down', conf.count_down, endTime);

        var end = new Date(pd(d.getMonth() + 1) + '/' + pd(d.getDate()) + "/" + d.getFullYear() + ' ' + endTime);
        var distance = Math.floor((end as any - (d as any)) / 1000);
        timer.setTimeBySec(distance)
        timer.toggleTimer()

        setInterval(_ => {
            this.showPlayer()
        }, 9000)
    }


    curIdx = 0
    texMap = {}

    showPlayer() {
        if (this.infoArr && this.infoArr.length) {

            let player = this.infoArr[this.curIdx]
            this.playerHWA.setText(player.hwa[2] + '岁 '
                + player.hwa[0] + 'cm '
                + player.hwa[1] + 'kg '
            )
            this.playerName.setText(player.name)
            let info = player.info.replace(/\r\n/g, ",")
            console.log('show info', info);
            this.playerInfo.setText(cnWrap(info, 20, 79))




            if (player.level && Number(player.level) != 0) {
                let url = `/img/panel/top5/${player.level}.png`
                imgLoader.loadTexRemote(url, tex => {
                    console.log('set tex');
                    this.levelSP.texture = imgLoader.getTex(url)
                    this.levelSP.visible = true
                })
            }
            else {
                this.levelSP.visible = false
            }
            this.curIdx = (this.curIdx + 1) % this.infoArr.length

            let idx = this.curIdx
            if (!this.texMap[idx])
                this.texMap[idx] = PIXI.Texture.fromImage(player.avatar)
            this.avt.texture = this.texMap[idx]
            // this.avt.texture = imgLoader.getTex(`/img/player/top5/${player.img}.png?t=` + this.cacheTime)
            setScale(this.avt, 635 / 595)
        }

    }
}