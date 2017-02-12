import { VueBase } from "../../utils/VueBase";
/**
 * Created by toramisu on 2016/10/24.
 */
declare var $;
declare var QRCode;

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
                gameData.text = "[" + gameData.id + "]:" + gameData.title;
                gameData.value = gameData.id;
                this.gameDataArr.push(gameData);
            }
            this.options = gameDataArr;
        });
    }

    mounted() {
        this.updateLinks(79);
    }

    updateLinks(gameId) {
        this.links = [
            { title: "比分面板", url: `/panel/#/ol/ob/${gameId}?panel=score` },
            { title: "比分面板 操作", url: `/panel/#/ol/op/${gameId}?panel=score` },
            { title: "八强面板", url: `/panel/#/ol/ob/${gameId}?panel=bracket` },
            // /panel/#/ol/op/0?panel=bracket
            { title: "---------------------Final--------------------", url: `/panel/#/ol/ob/0?panel=bracket` },
            { title: "K.O.A", url: `/panel/#/koa/op/` },
            { title: "战团双败", url: `/panel/#/ol/ob/0?panel=bracket` },
            { title: "5v5", url: `/panel/#/5v5/op/` },
            { title: "5v5 手机", url: `/panel/#/5v5/op/?m=1` },
            // { title: "screen1v1 ob", url: "/panel/#/screen1v1/ob" },
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