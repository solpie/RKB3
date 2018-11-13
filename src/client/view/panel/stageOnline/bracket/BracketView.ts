import { CommandId } from '../../../Command';
import { FontName, PanelId } from "../../../const";
import { getHupuWS } from '../../../utils/HupuAPI';
import { BasePanelView } from "../../BasePanelView";
import { BracketV2 } from '../scoreV2/BracketV2';
import { fitWidth, groupPosMap } from './BracketGroup';
// import Container = createjs.Container;
// import Bitmap = createjs.Bitmap;
declare let $;
declare let io;
export class BracketView extends BasePanelView {
    bracket: BracketV2
    // preRound: PreRound
    constructor(stage, gameId, $route) {
        super(PanelId.onlinePanel);
        this.name = PanelId.bracketPanel;
        console.log("new bracket", $route.query);
        let isManmaul = $route.query.m == '1'

        this.bracket = new BracketV2(stage)

        if (isManmaul)
            this.initManmaul()
        else {
            this.bracket.visible = false
            this.getPreRoundInfo(gameId)
            this.initAuto(Number(gameId));
        }
        this.initLocal()
        this.initBg()
    }

    initManmaul() {
        // let srvIO = io.connect('/webDB')
        //     .on('connect', () => {
        //         console.log('connect manmaul!')
        //         let url = `/db/cmd/${WebDBCmd.cs_bracketCreated}`
        //         let param = { _: null }
        //         $.ajax({
        //             url: url,
        //             type: 'post',
        //             data: JSON.stringify(param),
        //             headers: { "Content-Type": "application/json" },
        //             dataType: 'json'
        //         });
        //     })
        //     .on(`${WebDBCmd.sc_bracketInit}`, (data) => {
        //         delete data['_']
        //         // this.onBracketData({ data: data });
        //     })
    }

    getPreRoundInfo(gameId) {
        // getPreRoundPlayer(gameId, (res) => {
        //     console.log('getPreRoundInfo', res)
        //     let playerArr = res.data
        //     if (playerArr.length > 8) {
        //         this.preRound.setPlayerArr(playerArr)
        // this.bracket.visible = false
        // this.preRound.visible = true
        //     }
        //     else {
        this.bracket.visible = true
        // this.preRound.visible = false
        //     }
        // })
    }

    initBg() {
    }

    showComingIdx(idx) {
        //todo：加上延时
        this.bracket.showComingIdx(idx)
    }



    hide() {
        // this.ctn.visible = false;
    }

    show() {
        // this.ctn.visible = true;
        // this.getFtBracketInfo()
    }
    getFtBracketInfo() {
        $.ajax({
            url: `/panel/${PanelId.onlinePanel}/cs_ftBracketInfo`,
            type: 'post',
            data: JSON.stringify({}),
            headers: { "Content-Type": "application/json" },
            dataType: 'json',
        });
        console.log('connected local /rkb');
    }

    initLocal() {
        let localWs = io.connect(`/${PanelId.rkbPanel}`)
        localWs.on('connect', (msg) => {
            console.log('connect', window.location.host)
        })
            .on(`${CommandId.sc_showBracketPage}`, (data) => {
                console.log('sc_showBracketPage',data)
                this.bracket.showPage(data)
            })
            .on(`${CommandId.sc_togglePreRoundTheme}`, (data) => {
                // this.bracket.visible = false
                // this.preRound.visible = true
                // this.preRound.setTheme(data.isDark)
            })
    }

    initAuto(gameId) {
        let conWs = (url) => {
            let remoteIO = io.connect(url);
            remoteIO.on('connect', () => {
                if (gameId) {
                    console.log('hupuAuto socket connected GameId', gameId);
                    remoteIO.emit('passerbyking', {
                        game_id: gameId,
                        page: 'top8Map'
                    })
                }
                else {
                    this.getFtBracketInfo()
                    console.log('connected local /rkb');
                }
            });
            let eventMap = {};
            eventMap['top8Match'] = (data) => {
                console.log('top8Match', data);
                data.data = data.list;
                this.bracket.onBracketData(data)
            };
            eventMap['startGame'] = (data) => {
                console.log('startGame', data);
                this.getPreRoundInfo(gameId)
                // this.bracket.hideComing()
            };

            eventMap['init'] = (data) => {
                console.log('init', data);
                // this.bracket.hideComing()
            };

            eventMap['commitGame'] = (data) => {
                console.log('commitGame', data);
                this.getPreRoundInfo(gameId)
                // this.bracket.hideComing()
            };

            eventMap['updateScore'] = (data) => {
                this.bracket.hideComing()
            };

            remoteIO.on('wall', (data: any) => {
                let event = data.et;
                console.log('event:', event, data);
                if (eventMap[event])
                    eventMap[event](data);
            });
            let onData = (data) => {
                let event = data.et;
                if (eventMap[event])
                    eventMap[event](data);
            }
            // remoteIO.on(`${CommandId.sc_ftBracketInfo}`, onData)
            // remoteIO.on(`${CommandId.sc_commitTeam}`, onData)
        }

        if (gameId)
            getHupuWS((hupuWsUrl) => {
                conWs(hupuWsUrl)
            })
        else {
            conWs('/rkb')
        }
    }


    onBracketData(res) {
        let closeGame = {};
        let s = { font: '25px', fill: '#e1e1e1', align: 'right', fontFamily: FontName.MicrosoftYahei };
        console.log('onBracketData', res.data)
        for (let gameIdx in res.data) {
            let dataObj = res.data[gameIdx];
            let group1 = groupPosMap[gameIdx];
            group1.idx = Number(gameIdx);
            if (Number(dataObj.left.score) || Number(dataObj.right.score)) {
                if (dataObj.left.score > dataObj.right.score)
                    this.bracket.setWinHint(group1.hint1, true)
                else
                    this.bracket.setWinHint(group1.hint2)
                closeGame[gameIdx] = true;
            }
            if (dataObj.left.name) {
                (group1.labels[0] as PIXI.Text).style = s;
            }
            if (dataObj.right.name) {
                (group1.labels[1] as PIXI.Text).style = s;
            }
            let hints = group1.hints;
            group1.labels[0].text = dataObj.left.name || (hints ? hints[0] : '');
            fitWidth(group1.labels[0], 160, 25)
            group1.scores[0].text = dataObj.left.score || "0";

            group1.labels[1].text = dataObj.right.name || (hints ? hints[1] : '');
            fitWidth(group1.labels[1], 160, 25)
            group1.scores[1].text = dataObj.right.score || "0";
        }


        var comingIdx = 1;
        for (var i = 0; i < 8; i++) {
            var isClose = closeGame[8 - i];
            if (isClose) {
                comingIdx = 8 - i + 1;
                break;
            }
        }
        this.showComingIdx(comingIdx);
    }
}