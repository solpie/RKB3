import { ascendingProp } from '../../utils/JsFunc';
import { VueBase } from "../../utils/VueBase";
/**
 * Created by toramisu on 2016/10/24.
 */
declare var $;
declare var QRCode;
export function getScorePanelUrl(gameId, isDark, isOb = true) {
    let op = 'op'
    if (isOb)
        op = 'ob'
    if (isDark)
        return `/panel/#/ol/${op}/${gameId}?panel=score&s4=1&theme=dark`
    return `/panel/#/ol/${op}/${gameId}?panel=score&s4=1`
}
class HomeView extends VueBase {
    template = require('./home.html');
    links = VueBase.PROP;
    opUrlArr = VueBase.PROP;
    selected = VueBase.PROP;
    options = VueBase.PROP;
    gameDataArr = VueBase.PROP;
    iosParam = VueBase.Dict;
    rmtpUrl = VueBase.String;
    playUrl = VueBase.String;
    rmtpUrl2 = VueBase.String;
    playUrl2 = VueBase.String;
    lotteryId = VueBase.PROP;
    lotteryIdx = VueBase.PROP;
    qrcode;
    constructor() {
        super();
        VueBase.initProps(this);
    }

    created() {
        console.log('post /admin/');
        var url = 'http://api.liangle.com/api/passerbyking/game/list';
        $.get(`/proxy?url=${url}`, (res1) => {
            console.log(res1);
            // var data = JSON.parse(res1.entity);
            var gameDataArr = res1.data;
            this.gameDataArr = [];
            for (var i = 0; i < gameDataArr.length; i++) {
                // var gameData = gameDataArr[i];
                var gameData = gameDataArr[gameDataArr.length - 1 - i];
                if (Number(gameData.id) > 573) {
                    gameData.text = "[" + gameData.id + "]:" + gameData.title;
                    gameData.value = gameData.id;
                    this.gameDataArr.push(gameData);
                }
            }
            this.gameDataArr.sort(ascendingProp('id'))
            this.options = this.gameDataArr;
        });
    }

    mounted() {
        this.updateLinks(79);
    }

    updateLinks(gameId) {
        this.links = [
            // { title: "比分面板（蓝色）", url: getScorePanelUrl(gameId, true) },
            { title: "比分面板（S4）", url: getScorePanelUrl(gameId, false) },
            { title: "线上控制台", url: getScorePanelUrl(gameId, false, false) },
            { title: "八强面板", url: `/panel/#/ol/ob/${gameId}?panel=bracket` },
            { title: "小组面板", url: `/panel/#/ol/ob/${gameId}?panel=group` },

            // { title: "比分面板（蓝色）", url: getScorePanelUrl(gameId, true) + '&m=1' },
            // { title: "比分面板（绿色）", url: getScorePanelUrl(gameId, false) + '&m=1' },
            // { title: "线上控制台", url: getScorePanelUrl(gameId, false, false) + '&m=1' },
            // { title: "八强面板", url: `/panel/#/ol/ob/${gameId}?panel=bracket` + '&m=1' },
            // { title: "DmkLeecher", url: `/dmk` },

            // { title: "---------------------Final--------------------", url: `/panel/#/ol/ob/0?panel=bracket` },
            // { title: "K.O.A", url: `/panel/#/koa/op/` },
            // { title: "战团双败", url: `/panel/#/ol/ob/0?panel=bracket` },
            // { title: "5v5", url: `/panel/#/5v5/op/` },
            // { title: "5v5 手机", url: `/panel/#/5v5/op/?m=1` },
        ];
    }

    watch = {
        selected: "onSelGameID"
    };

    genQRCode() {
        this.iosParam = { "rtmp": this.rmtpUrl, gameId: this.selected + "" };
        if (this.qrcode) {
            $('#qrcode').empty()
            console.log('clear')
        }
        this.qrcode = new QRCode(document.getElementById("qrcode"), {
            text: JSON.stringify(this.iosParam),
            width: 256,
            height: 256,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }

    methods = {
        onSelGameID(gameId) {
            this.updateLinks(gameId);
            var url = 'http://api.liangle.com/api/passerbyking/game/info/' + gameId;
            $.get(`/proxy?url=${url}`, (res1) => {
                console.log(res1);
                let p = res1.data.stream.publish
                this.rmtpUrl = p.url + "/" + p.stream
                this.playUrl = res1.data.stream.play
                this.genQRCode()

                p = res1.data.stream2.publish
                this.rmtpUrl2 = p.url + "/" + p.stream
                this.playUrl2 = res1.data.stream2.play
            });
        },
        onClkQRCode() {
            // var $s = $($('script')[0])
            // console.log($s);
            this.genQRCode()
        }
    };
}

export var homeView = new HomeView();