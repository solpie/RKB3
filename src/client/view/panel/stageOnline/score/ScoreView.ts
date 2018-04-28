import { WebDBCmd } from '../../../WebDBCmd';
import { encode } from 'punycode';
import { isBoolean } from 'util';
import { Event2017 } from './Event2017';
import { PlayerInfo } from '../../../../model/PlayerInfo';
import { getScorePanelUrl } from '../../../admin/home/home';
import { CommandId } from '../../../Command';
import { PanelId, TimerState, FontName } from '../../../const';
import { getHupuWS } from '../../../utils/HupuAPI';
import { TweenEx } from '../../../utils/TweenEx';
import { BasePanelView } from '../../BasePanelView';
import { RankingData } from './RankingData';
import { Score2017 } from './Score2017';
import { ScoreM3 } from './ScoreM2';
import { ScorePanel2 } from './ScorePanel2';
import { Score2018 } from './Score2018';
import { PlayerNow } from '../playerNow/PlayerNow';
declare let io;
declare let $;
function logEvent(...a) {
    let d = new Date()
    let t = '[' + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ']'
    console.info(t, a)
}
export class ScoreView extends BasePanelView {
    scorePanel: Score2018
    eventPanel: Event2017
    rankingData: RankingData
    stage: any

    delayTimeMS = 0
    delayTd = 0
    gameId: any
    isTest = false
    $route: any
    isM2: Boolean
    isOP: Boolean
    isRmOP: Boolean

    constructor(stage: PIXI.Container, $route) {
        super(PanelId.onlinePanel)
        this.stage = stage

        this.$route = $route
        this.name = PanelId.scorePanel
        this.isOP = this.$route.params.op == "op"
        this.isRmOP = this.$route.params.op == "rmop"
        console.log('$route', this.$route);
        let darkTheme = $route.query.theme == "dark"
        this.gameId = $route.params.game_id

        this.isTest = $route.query.test == "1"
        let isManmual = $route.query.m == '1'
        let m2 = $route.query.m2 == '1'
        // let s4 = $route.query.s4 == '1'
        this.isM2 = m2
        if (m2) {
            // this.scorePanel = new ScoreM3(stage, darkTheme)
        }
        else {
            //preload font
            // let f1 = this.preLoadFont(FontName.DigiLED)
            let f1 = this.preLoadFont(FontName.MicrosoftYahei)
            stage.addChild(f1)
            let f2 = this.preLoadFont(FontName.Impact)
            stage.addChild(f2)
            TweenEx.delayedCall(1000, _ => {
                if (!this.isRmOP)
                    this.scorePanel = new Score2018(stage)
                this.initDelay()
            })
        }
        // this.scorePanel = new Score2017(stage, darkTheme)
        this.eventPanel = new Event2017(stage, darkTheme)

        console.log('new ScoreView')
        if (this.isTest) {
            // let player = {
            //     avatar: "http://w2.hoopchina.com.cn/43/6f/6a/436f6a5aa8a38e158b98830a3b5c4a4b001.jpg",
            //     group: 'Fe3O4',
            //     height: '177',
            //     intro: "一二三四五六七八九十一二三四五六七八九十一二三22四五六七八九十一二三四五六七八九十一二三四五六七八九十",
            //     loseAmount: 1,
            //     name: "geoffrey0326",
            //     roundScore: 28,
            //     totalChampion: 0,
            //     weight: '79',
            //     winAmount: "3"
            // }
            // this.eventPanel.showWin(player)
            // TweenEx.delayedCall(7000, () => {
            //     player.group = 'Gambia'
            //     this.eventPanel.showWin(player)
            // })
            // this.eventPanel.showWin2(player)
            // this.eventPanel.showTopInfo()
            // this.eventPanel.showLogoFx()
            let p = new PlayerNow()
            p.show({
                avatar: '/img/player/now/p1.png',
                title: '蓝方球员',
                y: 285, x: 20
            })
            this.stage.addChild(p)

            let p2 = new PlayerNow()
            p2.show({
                avatar: '/img/player/now/p1.png',
                title: '红方球员',
                x: 1920 - 270, y: 285
            })
            this.stage.addChild(p2)

        }
        // if (isManmual) {
        //     this.initManmual()
        // }
        // else
        this.initLocal()
    }

    preLoadFont(fontName) {
        let t = new PIXI.Text('', {
            fontFamily: fontName,
        })
        t.text = '0'
        t.alpha = 0
        return t
    }
    initDelay() {
        console.log('initDelay')

        $.get('/online/delay/' + this.gameId, (delay) => {
            // this.delayTimeShowOnly = delay
            if (delay)
                this.delayTimeMS = Number(delay) * 1000
            console.log('/online/delay/' + this.delayTimeMS)
            // this.initRemote()
            // alert('rankingData')
            // this.rankingData = new RankingData(this.gameId, _ => {
            // })
        })
        this.initRemote()
    }
    initOP(view) {
        let isCtrl;
        window.onmouseup = (e) => {
            if (isCtrl) {
                view.onSetFxPoint(e.clientX, e.clientY)
            }
        }
        window.onkeydown = (e) => {
            if (e.key == 'p') {
                isCtrl = true
            }
        }
        window.onkeyup = () => {
            isCtrl = false
        }
    }

    initDefaultPlayer() {
        let p = 'http://w1.hoopchina.com.cn/huputv/resource/img/amateur.jpg'
        // this.scorePanel.setLeftPlayerInfo('Player 1', p, 78, 178, '', 0)
        // this.scorePanel.setRightPlayerInfo('Player 1', p, 78, 178, '', 0)
    }

    initLocal() {
        let localWs = io.connect(`/${PanelId.rkbPanel}`)
        localWs.on('connect', (msg) => {
            console.log('connect', window.location.host)
            // localWs.emit("opUrl", { opUrl: window.location.host })
        })
            .on(`${CommandId.sc_startTimer}`, (data) => {
                this.scorePanel.toggleTimer(TimerState.RUNNING)
            })
            .on(`${CommandId.sc_pauseTimer}`, (data) => {
                this.scorePanel.toggleTimer(TimerState.PAUSE)
            })
            .on(`${CommandId.sc_resetTimer}`, (data) => {
                this.scorePanel.resetTimer()
            })
            .on(`${CommandId.sc_setDelayTime}`, (data) => {
                this.delayTimeMS = data.delayTimeMS
            })
            .on(`${CommandId.sc_setTimer}`, (data) => {
                this.scorePanel.setTimer(data.time)
            })
            .on(`${CommandId.sc_toggleTheme}`, (data) => {
                let isDark = data.isDark
                let ob = this.$route.params.op != "op"
                window.location.href = getScorePanelUrl(this.gameId, isDark, ob)
                window.location.reload()
            })
            .on(`${CommandId.sc_showChampion}`, (data) => {
                let player = this.scorePanel.getPlayerInfo(data.isLeft)
                this.eventPanel.showChampion(data.title, player)
                this.eventPanel.champion.show()
                this.scorePanel.hide()
            })
            .on(`${CommandId.sc_toggleScorePanel}`, (data) => {
                if (data.visible) {
                    this.scorePanel.show()
                }
                else {
                    this.scorePanel.hide()
                    this.eventPanel.hideVictory()
                }
            })
            .on(`${CommandId.sc_toggleChampionPanel}`, (data) => {
                data.visible ?
                    this.eventPanel.champion.show()
                    : this.eventPanel.champion.hide()
            })
            .on(`${CommandId.sc_showNotice}`, (data) => {
                if (data.isPreview) {
                    if (this.isOP || this.isRmOP) {
                        this.eventPanel.showNotice(data.title, data.content, data.isLeft, data.isBold)
                        data.visible ?
                            this.eventPanel.noticeSprite.show()
                            : this.eventPanel.noticeSprite.hide()
                    }
                }
                else {
                    this.eventPanel.showNotice(data.title, data.content, data.isLeft, data.isBold)
                    data.visible ?
                        this.eventPanel.noticeSprite.show()
                        : this.eventPanel.noticeSprite.hide()
                }

            })
            .on(`${CommandId.sc_showRanking}`, (data) => {
                // this.eventPanel.showRanking(data, this.rankingData)
            })
            //score fx
            .on(`${CommandId.sc_setFxPoint}`, (data) => {
                this.eventPanel.setFxPoint(data.mx, data.my)
            })
            .on(`${CommandId.sc_playScoreFx}`, (data) => {
                this.eventPanel.showScoreFx()
            })
            .on(`${CommandId.sc_setBdVisible}`, (data) => {
                this.eventPanel.showBd(data.v)
                data.v ? this.scorePanel.hide()
                    : this.scorePanel.show()
            })
            .on(`${CommandId.sc_showTop5}`, (data) => {
                console.log('sc_showTop5');
                this.eventPanel.showTop5(data)
            })
            .on(`${CommandId.sc_showVsTitle}`, (data) => {
                console.log('sc_showVsTitle', data);
                this.eventPanel.showVsTitle(data)
            })
            .on(`${CommandId.sc_showStage}`, (data) => {
                console.log('sc_showStage', data);
                this.showStage(data.visible)
            })
    }
    showStage(v) {
        this.stage.visible = v
        // if (v) {
        //     this.scorePanel.show()
        //     this.eventPanel.visible = true
        // }
        // else {
        //     this.scorePanel.hide()
        //     this.eventPanel.visible = false
        // }
    }


    initRemote() {
        // getHupuWs()
        let isRunning = false
        getHupuWS((hupuWsUrl) => {
            let remoteIO = io.connect(hupuWsUrl);
            let setPlayer = (leftPlayer, rightPlayer) => {
                console.log(leftPlayer)
                let leftRankingData;
                let rightRankingData;

                // powerRankType  1.大魔王，2.精英，3.实力选手，4.路人，5.新秀，6.冲榜
                console.log('rankingData', leftRankingData, rightRankingData);
                // player level 0 其他 1 至少一个胜场  2 大师赛 3冠军
                this.scorePanel.setLeftPlayerInfo(leftPlayer)
                this.scorePanel.setRightPlayerInfo(rightPlayer)
            };

            remoteIO.on('error', (e) => {
                console.log('connect_error', e);
            })

            remoteIO.on('connect', () => {
                console.log('hupuAuto socket connected', hupuWsUrl, this.gameId);
                remoteIO.emit('passerbyking', {
                    game_id: this.gameId,
                    page: 'score'
                })

                // TweenEx.delayedCall(3000, () => {
                //     if (!isRunning)
                //         this.initDefaultPlayer()
                // });
            });

            remoteIO.on('wall', (data: any) => {
                let event = data.et;
                let eventMap = {};
                console.log('event:', event, data);

                eventMap['init'] = () => {
                    console.log('init', data);
                    logEvent('init', data);
                    let lPlayer = data.player.left
                    let rPlayer = data.player.right
                    this.scorePanel.set35ScoreLight(data.winScore);
                    this.scorePanel.setGameIdx(Number(data.gameIdx), Number(data.matchType));
                    setPlayer(data.player.left, data.player.right);
                    this.scorePanel.setLeftScore(data.player.left.leftScore);
                    this.scorePanel.setRightScore(data.player.right.rightScore);
                    this.scorePanel.setLeftFoul(data.player.left.leftFoul);
                    this.scorePanel.setRightFoul(data.player.right.rightFoul);
                    data.delayTimeMS = this.delayTimeMS

                    let gameStatus = Number(data.status)
                    if (data.status == 0) {//status字段吧 0 进行中 1已结束 2 ready
                        let gameTime = Math.floor(data.t / 1000 - Number(data.st))
                        this.scorePanel.setTimer(gameTime)
                        this.scorePanel.toggleTimer(TimerState.RUNNING);
                    }
                    else if (data.status == 2) {
                        this.scorePanel.toggleTimer(TimerState.PAUSE);
                        this.scorePanel.resetTimer();
                    }

                    //vs title
                    if (lPlayer.title && rPlayer.title)
                        this.eventPanel.showVsTitle({ visible: true, vs: lPlayer.title + ' ' + rPlayer.title })
                };

                eventMap['updateScore'] = () => {
                    console.log('updateScore', data);
                    logEvent('updateScore', data);
                    if (data.leftScore != null) {
                        this.scorePanel.setLeftScore(data.leftScore);
                    }
                    if (data.rightScore != null) {
                        this.scorePanel.setRightScore(data.rightScore);
                    }
                    if (data.rightFoul != null) {
                        this.scorePanel.setRightFoul(data.rightFoul);
                    }
                    if (data.leftFoul != null) {
                        this.scorePanel.setLeftFoul(data.leftFoul);
                    }
                };

                eventMap['timeStart'] = () => {
                    console.log('timeStart', data);
                    this.scorePanel.toggleTimer(TimerState.RUNNING);
                }
                eventMap['timeDiff'] = () => {
                    console.log('timeDiff', data);
                    this.delayTd = Number(data.td) * 1000
                    // this.scorePanel.toggleTimer(TimerState.RUNNING);
                }
                eventMap['startGame'] = () => {
                    console.log('startGame', data);
                    logEvent('startGame', data)
                    this.scorePanel.toggleTimer(TimerState.PAUSE);
                    this.scorePanel.resetScore();
                    this.scorePanel.resetTimer();

                    let lPlayer = data.player.left
                    let rPlayer = data.player.right
                    this.scorePanel.set35ScoreLight(data.winScore);
                    this.scorePanel.setGameIdx(Number(data.gameIdx), Number(data.matchType));
                    setPlayer(data.player.left, data.player.right);
                    // window.location.reload();
                    if (lPlayer.title && rPlayer.title)
                        this.eventPanel.showVsTitle({ visible: true, vs: lPlayer.title + ' ' + rPlayer.title })

                };

                eventMap['commitGame'] = () => {
                    console.log('commitGame', data)
                    logEvent('commitGame', data)
                    let player = data.player
                    // if (this.isM2)
                    if (this.scorePanel.baseCtn.visible)
                        this.eventPanel.showVictory(player)

                    // else
                    //     this.eventPanel.showWin(player)
                    // this.scorePanel.toggleTimer(TimerState.PAUSE);
                    // this.scorePanel.resetScore();
                };
                if (eventMap[event]) {
                    isRunning = true
                    let d = this.delayTimeMS + this.delayTd;
                    logEvent(event, 'delay', d, data)
                    if (event == 'init')
                        d = 0
                    this.emit(event, data)
                    TweenEx.delayedCall(d, () => {
                        eventMap[event]();
                    });
                }
            });
        })
    }

    setScoreFoul(data) {
        logEvent('setScoreFoul', data)
        if (data.leftScore != null) {
            this.scorePanel.setLeftScore(data.leftScore);
        }
        if (data.rightScore != null) {
            this.scorePanel.setRightScore(data.rightScore);
        }
        if (data.rightFoul != null) {
            this.scorePanel.setRightFoul(data.rightFoul);
        }
        if (data.leftFoul != null) {
            this.scorePanel.setLeftFoul(data.leftFoul);
        }
    }

    initIO() {
        let localWs = io.connect(`/${PanelId.rkbPanel}`)
        localWs.on('connect', function (msg) {
            console.log('connect', window.location.host);
            localWs.emit("opUrl", { opUrl: window.location.host });
        })
            .on(`${CommandId.sc_setDelayTime}`, (data) => {
                console.log("CommandId.setDelayTime", data);
                this.delayTimeMS = data.delayTimeMS;
            })
            .on(CommandId.sc_startTimer, (data) => {
                this.scorePanel.toggleTimer(TimerState.RUNNING)
            })
            .on(CommandId.sc_pauseTimer, (data) => {
                this.scorePanel.toggleTimer(TimerState.PAUSE)
            })
            .on(CommandId.sc_resetTimer, (data) => {
                console.log("CommandId.sc_resetTimer", data);
                this.scorePanel.resetTimer()
            })
    }


}