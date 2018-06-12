import { ascendingProp } from '../../utils/JsFunc';
import { VueBase } from "../../utils/VueBase";
import { downloadGameData } from '../../../model/PlayerS4';
import { $post } from '../../utils/WebJsFunc';
import { getPlayerInfoFromLiangle, createPlayer, getPlayer, uploadImage, updatePlayer } from '../../utils/HupuAPI';
/**
 * Created by toramisu on 2016/10/24.
 */
declare var $;
declare var QRCode;
declare var Cropper;
let cropper;
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
    player_id = VueBase.PROP;
    actTab = VueBase.PROP;


    fileCrop = VueBase.PROP;
    cropper = VueBase.PROP;
    playerInEdit = VueBase.PROP
    playerArrStr = VueBase.PROP
    imgBase64 = VueBase.PROP
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
                if (Number(gameData.id) > 613) {
                    gameData.text = "[" + gameData.id + "]:" + gameData.title;
                    gameData.value = gameData.id;
                    this.gameDataArr.push(gameData);
                }
            }
            this.gameDataArr.sort(ascendingProp('id'))
            this.options = this.gameDataArr;

            this.initCropper()
        });
    }
    isInitCropper = false
    initCropper() {
        if (this.isInitCropper)
            return;
        this.isInitCropper = true

        ///cropperjs
        let avatar = document.getElementById('avatar');
        let input = document.getElementById('input');

        let done = (url) => {
            input['value'] = '';
            avatar['src'] = url;
            $('#input').hide()
            let image = document.getElementById('avatar');
            cropper = new Cropper(image, {
                aspectRatio: 442 / 634,
                width: 442,
                height: 634,
                crop: function (event) {
                    console.log(event.detail.x, cropper.toBlob);
                }
            });
        };
    }

    mounted() {
        this.updateLinks(79);
        this.actTab = 'tab1'
    }

    updateLinks(gameId) {
        this.links = [
            // { title: "比分面板（蓝色）", url: getScorePanelUrl(gameId, true) },
            { title: "比分面板（S4）", url: getScorePanelUrl(gameId, false) },
            { title: "赛前轮播面板", url: `/panel/#/studio/ob?pre=1` },
            { title: "直播间面板", url: `/panel/#/studio/ob/` },
            { title: "线上控制台", url: getScorePanelUrl(gameId, false, false) },
            { title: "八强面板", url: `/panel/#/ol/ob/${gameId}?panel=bracket` },
            // { title: "小组面板", url: `/panel/#/ol/ob/${gameId}?panel=group` },

            // { title: "比分面板（蓝色）", url: getScorePanelUrl(gameId, true) + '&m=1' },
            // { title: "比分面板（绿色）", url: getScorePanelUrl(gameId, false) + '&m=1' },
            // { title: "线上控制台", url: getScorePanelUrl(gameId, false, false) + '&m=1' },
            // { title: "八强面板", url: `/panel/#/ol/ob/${gameId}?panel=bracket` + '&m=1' },
            // { title: "DmkLeecher", url: `/dmk` },

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
        tab(s) {
            this.actTab = s
        },
        onUpload(e) {
            document.getElementById('input').click()
            this.imgBase64 = ''
        },
        onImgLoaded(e) {
            let result = document.querySelector('.result')
            if (e.target.files.length) {
                // start file reader
                $('#input').hide()
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (e.target.result) {
                        // create new image
                        let img = document.createElement('img');
                        img.id = 'image';
                        img.src = e.target.result
                        // clean result before
                        result.innerHTML = '';
                        // append new image
                        result.appendChild(img);
                        cropper = new Cropper(img, {
                            aspectRatio: 420 / 595,
                            width: 420,
                            height: 595
                        });
                    }
                };
                reader.readAsDataURL(e.target.files[0]);
            }
        },
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
        onSyncPlayerToStrapi(player_id) {
            if (player_id != '') {
                getPlayerInfoFromLiangle(player_id, res1 => {
                    console.log(res1);
                    if (res1.data && res1.data.name) {
                        let player = res1.data
                        createPlayer({ 'player_id': Number(player.player_id), 'name': player.name, 'raw': JSON.stringify(player) }, res => {
                            console.log('on create player', res);
                            alert(JSON.stringify(res))
                        })
                    }
                    else {
                        alert('无法在亮了网后台找到 球员编号' + player_id)
                    }
                })
            }
            this.initCropper()
            //update put
        },
        onPullPlayerData(player_id) {
            getPlayer(player_id, res => {
                console.log('8090', res);
                this.playerInEdit = JSON.parse(JSON.stringify(res[0]))
                let img = document.createElement('img');
                img.id = 'imagePreview';
                img.src = this.playerInEdit.avatar
                let result = document.querySelector('.preview')
                result.innerHTML = ''
                result.appendChild(img);
            })
        },
        onSetStarPlayer(playerArrStr) {
            let a = playerArrStr.split('-')
            if (a.length > 0) {
                
            }
        },
        onCrop() {
            // if (this.playerInEdit.player_id) {
            let image = this.fileCrop

            let base64 = cropper.getCroppedCanvas({
                width: 420, height: 595
            }).toDataURL()
            this.imgBase64 = base64
            document.getElementById('imgToDownload')['src'] = base64

            getPlayer(this.player_id, res1 => {
                let player = res1[0]
                console.log('update player1', player);
                updatePlayer({ '_id': player._id, 'avatar': base64 }, res => {
                    alert('头像上传成功!')
                })
            })
        },
        onClkQRCode() {
            // this.genQRCode()
            downloadGameData()
        },
    };
}

export var homeView = new HomeView();