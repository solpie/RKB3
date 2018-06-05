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
        input.addEventListener('change', (e) => {
            var files = e.target['files'];
            var reader;
            var file;
            var url;
            if (files && files.length > 0) {
                file = files[0];
                this.fileCrop = file
                if (FileReader) {
                    reader = new FileReader();
                    reader.onload = function (e) {
                        done(reader.result);
                    };
                    reader.readAsDataURL(file);
                }
            }
        });
    }
    mounted() {
        this.updateLinks(79);
        this.actTab = 'tab2'
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
        tab(s) {
            this.actTab = s
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
                // this.initCropper()
            })
        },
        onCrop() {
            if (this.playerInEdit.player_id) {
                let image = this.fileCrop
                cropper.getCroppedCanvas().toBlob((blob) => {
                    var formData = new FormData();
                    formData.append('files', blob, 'player.png');
                    console.log('blob', blob);
                    $.ajax('http://rtmp.icassi.us:8090/upload', {
                        method: 'POST',
                        data: formData,
                        processData: false,
                        contentType: false,
                        xhr: () => {
                            var xhr = new XMLHttpRequest();
                            xhr.upload.onprogress = function (e) {
                                var percent = '0';
                                var percentage = '0%';
                                if (e.lengthComputable) {
                                    percent = Math.round((e.loaded / e.total) * 100) + '';
                                    percentage = percent + '%';
                                    console.log('upload', percentage);
                                }
                            };
                            return xhr;
                        },
                        success: (res) => {
                            console.log('on uploaded', res);
                            let img = res[0]
                            getPlayer(this.playerInEdit.player_id, res1 => {
                                let player = res1[0]
                                img.related.push(player._id)
                                player.hot_player = img
                                console.log('update player1', player);
                                updatePlayer({ '_id': player._id, 'hot_player': img }, res => {
                                    console.log('update player done!!!!!!', res);
                                })
                            })
                        },
                        error: function () {
                            // avatar['src'] = initialAvatarURL;
                            // $alert.show().addClass('alert-warning').text('Upload error');
                        },
                        complete: function () {
                            console.log('on complete');
                            // alert('上传成功')
                        },
                    });
                });
            }
            else {

            }

        },
        onClkQRCode() {
            // this.genQRCode()
            downloadGameData()
        },
    };
}

export var homeView = new HomeView();