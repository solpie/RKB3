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
// import { RankingData } from './RankingData';
import { Score2017 } from './Score2017';
import { ScoreM3 } from './ScoreM2';
import { ScorePanel2 } from './ScorePanel2';
import { Score2018 } from './Score2018';
import { PlayerNow } from '../playerNow/PlayerNow';
import { Score2018v3 } from './Score2018v3';
import { WorldWar } from './worldWar/WorldWar';
import { WorldWarView } from './worldWar/WorldWarView';
import { ScoreV2 } from '../scoreV2/ScoreV2';
declare let io;
declare let $;
function logEvent(...a) {
    let d = new Date()
    let t = '[' + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ']'
    console.info(t, a)
}
export class ScoreView extends BasePanelView {
    scorePanelV3: ScoreV2
    // scorePanel: Score2018
    eventPanel: Event2017
    // rankingData: RankingData
    stage: any

    delayTimeMS = 0
    delayTd = 0
    gameId: any
    isTest = false
    isWorld = false
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
        this.isWorld = $route.query.world == "1"
        window['isBigBlood'] = $route.query.bblood == "1"
        window['isGame3v3'] = $route.query.game3v3 == "1"
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
            // let f1 = this.preLoadFont(FontName.MicrosoftYahei)
            // stage.addChild(f1)
            // let f2 = this.preLoadFont(FontName.Impact)
            // stage.addChild(f2)
            // let f4 = this.preLoadFont(FontName.DigiLED)
            // stage.addChild(f4)
            let f3 = this.preLoadFont(FontName.dinCondensedC)
            stage.addChild(f3)
            TweenEx.delayedCall(1000, _ => {
                if (!this.isRmOP) {
                    this.scorePanelV3 = new ScoreV2(stage)
                    if (this.isWorld)
                        this.scorePanelV3.visible = false
                    else {
                        this.scorePanelV3.visible = true
                    }
                }
                this.initDelay()
                this.eventPanel = new Event2017(stage, darkTheme)
            })
        }

        console.log('new ScoreView')
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
            if (this.isWorld) {
                new WorldWarView(this.stage, localWs)
            }
        })
            .on(`${CommandId.sc_startTimer}`, (data) => {
                this.scorePanelV3.toggleTimer(TimerState.RUNNING)
            })
            .on(`${CommandId.sc_pauseTimer}`, (data) => {
                this.scorePanelV3.toggleTimer(TimerState.PAUSE)
            })
            .on(`${CommandId.sc_resetTimer}`, (data) => {
                this.scorePanelV3.resetTimer()
            })
            .on(`${CommandId.sc_setDelayTime}`, (data) => {
                this.delayTimeMS = data.delayTimeMS
            })
            .on(`${CommandId.sc_setPlayer}`, (data) => {
                let lp = data.leftPlayer
                let rp = data.rightPlayer
                this.scorePanelV3.setLeftPlayer(lp)
                this.scorePanelV3.setRightPlayer(rp)
                this.scorePanelV3.resetScore()
                this.scorePanelV3.resetTimer()
                this.scorePanelV3.toggleTimer(TimerState.PAUSE)
                this.scorePanelV3.setGameTitle(data.gameTitle || '', data.gameSubTitle || '')
            })
            .on(`${CommandId.sc_updateScore}`, (data) => {
                if (data.dtScore != null) {

                    this.scorePanelV3.setDtScore(data)
                }
                else {
                    if (data.isLeft) {
                        data.leftScore = data.score
                        this.scorePanelV3.setLeftScore(data.score)
                    }
                    else {
                        data.rightScore = data.score
                        this.scorePanelV3.setRightScore(data.score)
                    }
                }
            })
            .on(`${CommandId.sc_updateFoul}`, (data) => {
                if (data.dtFoul != null) {
                    this.scorePanelV3.setDtFoul(data)

                }
                else {
                    if (data.isLeft)
                        this.scorePanelV3.setLeftFoul(data.foul)
                    else
                        this.scorePanelV3.setRightFoul(data.foul)
                }
            })
            .on(`${CommandId.sc_setTimer}`, (data) => {
                this.scorePanelV3.setTimer(data.time)
            })
            .on(`${CommandId.sc_toggleTheme}`, (data) => {
                let isDark = data.isDark
                let ob = this.$route.params.op != "op"
                window.location.href = getScorePanelUrl(this.gameId, isDark, ob)
                window.location.reload()
            })
            .on(`${CommandId.sc_showChampion}`, (data) => {
                let player = this.scorePanelV3.getPlayerInfo(data.isLeft)
                this.eventPanel.showChampion(data.title, player)
                this.eventPanel.champion.show()
                this.scorePanelV3.hide()
            })
            .on(`${CommandId.sc_toggleScorePanel}`, (data) => {
                if (data.visible) {
                    this.scorePanelV3.show(data)
                }
                else {
                    this.scorePanelV3.hide(data)
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
                        this.eventPanel.showNotice(data)
                    }
                }
                else
                    this.eventPanel.showNotice(data)
            })

            .on(`${CommandId.sc_showPlayerPopInfo}`, (data) => {
                if (data.isPreview) {
                    if (this.isOP || this.isRmOP) {
                        this.scorePanelV3.showPopup(data)
                    }
                }
                else
                    this.scorePanelV3.showPopup(data)
            })

            .on(`${CommandId.sc_showRanking}`, (data) => {
                this.eventPanel.showRanking(data)
            })
            .on(`${CommandId.sc_showPanel}`, (data) => {
                console.log('sc_showPanel', data)
                if (data.panelId == PanelId.bottomNoticeAccount) {
                    this.eventPanel.showBottomNoticeAccount(data)
                }
                // else if (data.panelId == PanelId.notice_left_bottom) {
                //     this.eventPanel.show_notice_left_bottom(data)
                // }
            })
            //score fx
            .on(`${CommandId.sc_setFxPoint}`, (data) => {
                this.eventPanel.setFxPoint(data.mx, data.my)
            })
            .on(`${CommandId.sc_playScoreFx}`, (data) => {
                this.eventPanel.showScoreFx()
            })
            .on(`${CommandId.sc_showTop5}`, (data) => {
                console.log('sc_showTop5');
                this.eventPanel.showTop5(data)
            })
            .on(`${CommandId.sc_showVsTitle}`, (data) => {
                console.log('sc_showVsTitle', data);
                this.scorePanelV3.showTitle(data)
            })
            .on(`${CommandId.sc_showRollText}`, (data) => {
                console.log('sc_showRollText', data);
                this.eventPanel.showRollText(data)
            })
            .on(`${CommandId.sc_showStage}`, (data) => {
                console.log('sc_showStage', data);
                this.showStage(data.visible)
            })
            .on(`${CommandId.sc_togglePlayerState}`, (data) => {
                console.log('sc_togglePlayerState', data);
                // this.scorePanelV3.toggleState(data)
            })

            .on(CommandId.sc_showScoreRank, (data) => {
                this.eventPanel.showScoreRank(data)
            })
            //

            // this.opReq(`${CommandId.cs_updateScore}`, { _: null, dtScore: v, isLeft: isLeft })
            .on(CommandId.sc_updateScore, (data) => {
                if (data.scoreFx) {
                    this.eventPanel.showScoreRank(data)
                }
            })
        // 
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
                // player level 0 其他 1 至少一个胜场  2 大师赛 3冠军
                this.scorePanelV3.setLeftPlayer(leftPlayer)
                this.scorePanelV3.setRightPlayer(rightPlayer)
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
                    this.scorePanelV3.setGameIdx(Number(data.gameIdx), Number(data.matchType));
                    setPlayer(data.player.left, data.player.right);
                    this.scorePanelV3.setLeftScore(data.player.left.leftScore);
                    this.scorePanelV3.setRightScore(data.player.right.rightScore);
                    this.scorePanelV3.setLeftFoul(data.player.left.leftFoul);
                    this.scorePanelV3.setRightFoul(data.player.right.rightFoul);
                    data.delayTimeMS = this.delayTimeMS

                    let gameStatus = Number(data.status)
                    if (data.status == 0) {//status字段吧 0 进行中 1已结束 2 ready
                        let gameTime = Math.floor(data.t / 1000 - Number(data.st))

                        this.scorePanelV3.setTimer(gameTime)
                        this.scorePanelV3.toggleTimer(TimerState.RUNNING);
                    }
                    else if (data.status == 2) {
                        this.scorePanelV3.toggleTimer(TimerState.PAUSE);
                        this.scorePanelV3.resetTimer();
                    }

                    //vs titletitle
                    // if (lPlayer.title && rPlayer.title)
                    //     this.eventPanel.showVsTitle({ visible: true, vs: lPlayer.title.replace(" ", '') + ' ' + rPlayer.title.replace(" ", '') })
                };

                eventMap['updateScore'] = () => {
                    console.log('updateScore', data);
                    logEvent('updateScore', data);
                    if (data.leftScore != null) {
                        this.scorePanelV3.setLeftScore(data.leftScore);
                    }
                    if (data.rightScore != null) {
                        this.scorePanelV3.setRightScore(data.rightScore);
                    }
                    if (data.rightFoul != null) {
                        this.scorePanelV3.setRightFoul(data.rightFoul);
                    }
                    if (data.leftFoul != null) {
                        this.scorePanelV3.setLeftFoul(data.leftFoul);
                    }
                };

                eventMap['timeStart'] = () => {
                    console.log('timeStart', data);
                    this.scorePanelV3.toggleTimer(TimerState.RUNNING);
                }
                eventMap['timeDiff'] = () => {
                    console.log('timeDiff', data);
                    this.delayTd = Number(data.td) * 1000
                    // this.scorePanel.toggleTimer(TimerState.RUNNING);
                }
                eventMap['startGame'] = () => {
                    console.log('startGame', data);
                    logEvent('startGame', data)
                    this.scorePanelV3.toggleTimer(TimerState.PAUSE);
                    this.scorePanelV3.resetScore();
                    this.scorePanelV3.resetTimer();

                    let lPlayer = data.player.left
                    let rPlayer = data.player.right
                    this.scorePanelV3.setGameIdx(Number(data.gameIdx), Number(data.matchType));
                    setPlayer(data.player.left, data.player.right);
                    // window.location.reload();
                    // if (lPlayer.title && rPlayer.title)
                    //     this.eventPanel.showVsTitle({ visible: true, vs: lPlayer.title.replace(" ", '') + ' ' + rPlayer.title.replace(" ", '') })

                };

                eventMap['commitGame'] = () => {
                    console.log('commitGame', data)
                    logEvent('commitGame', data)
                    let player = data.player
                    // if (this.isM2)
                    // if (this.scorePanel.baseCtn.visible)
                    //     this.eventPanel.showVictory(player)

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
            this.scorePanelV3.setLeftScore(data.leftScore);
        }
        if (data.rightScore != null) {
            this.scorePanelV3.setRightScore(data.rightScore);
        }
        if (data.rightFoul != null) {
            this.scorePanelV3.setRightFoul(data.rightFoul);
        }
        if (data.leftFoul != null) {
            this.scorePanelV3.setLeftFoul(data.leftFoul);
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
                this.scorePanelV3.toggleTimer(TimerState.RUNNING)
            })
            .on(CommandId.sc_pauseTimer, (data) => {
                this.scorePanelV3.toggleTimer(TimerState.PAUSE)
            })
            .on(CommandId.sc_resetTimer, (data) => {
                console.log("CommandId.sc_resetTimer", data);
                this.scorePanelV3.resetTimer()
            })
    }


}