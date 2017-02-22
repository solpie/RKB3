import { Event2017 } from './Event2017';
import { PlayerInfo } from '../../../../model/PlayerInfo';
import { TweenEx } from '../../../utils/TweenEx';
import { Score2017 } from './Score2017';
import { getHupuWS } from '../../../utils/HupuAPI';
import { ScorePanel2 } from './ScorePanel2';
import { CommandId } from '../../../Command';
// import { initIO } from '../../../../router/PanelRouter';
import { PanelId, TimerState } from '../../../const';
import { BasePanelView } from '../../BasePanelView';
declare let io;
export class ScoreView extends BasePanelView {
    scorePanel: Score2017
    eventPanel: Event2017

    delayTimeMS = 0
    gameId: any
    isTest = false

    constructor(stage: PIXI.Container, $route) {
        super(PanelId.onlinePanel)
        this.name = PanelId.scorePanel
        // this.isOp = this.$route.params.op == "op"
        let darkTheme = $route.query.theme == "dark"
        this.gameId = $route.params.game_id

        this.isTest = $route.query.test == "1"

        this.scorePanel = new Score2017(stage, darkTheme)
        this.eventPanel = new Event2017(stage, darkTheme)
        console.log('new ScoreView')

        this.initRemote()
        this.initLocal()
        // if (this.isTest)
        //     this.initRoom()
    }

    initRoom() {
        let roomIO = io.connect("tcp.lb.liangle.com:3081")
            .on('connect', (msg) => {
                console.log('msg', msg)
                roomIO.emit('join', {
                    room_id: 10287,
                    match_id: 1,
                    token: ''
                })
            })
            .on('wall', (msg) => {
                console.log('wall', msg)
            })
    }

    initDefaultPlayer() {
        let p = 'http://w1.hoopchina.com.cn/huputv/resource/img/amateur.jpg'
        this.scorePanel.setLeftPlayerInfo('Player 1', p, 78, 178, '', 0)
        this.scorePanel.setRightPlayerInfo('Player 1', p, 78, 178, '', 0)
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
    }
    initRemote() {
        // getHupuWs()
        let isRunning = false
        getHupuWS((hupuWsUrl) => {
            let remoteIO = io.connect(hupuWsUrl);
            let setPlayer = (leftPlayer, rightPlayer) => {
                console.log(leftPlayer)
                this.scorePanel.setLeftPlayerInfo(leftPlayer.name, leftPlayer.avatar, leftPlayer.weight, leftPlayer.height, leftPlayer.group, leftPlayer.totalChampion)
                this.scorePanel.setRightPlayerInfo(rightPlayer.name, rightPlayer.avatar, rightPlayer.weight, rightPlayer.height, rightPlayer.group, rightPlayer.totalChampion)
            };

            remoteIO.on('connect', () => {
                console.log('hupuAuto socket connected', hupuWsUrl);
                remoteIO.emit('passerbyking', {
                    game_id: this.gameId,
                    page: 'score'
                })

                TweenEx.delayedCall(3000, () => {
                    if (!isRunning)
                        this.initDefaultPlayer()
                });
            });

            remoteIO.on('wall', (data: any) => {
                let event = data.et;
                let eventMap = {};
                console.log('event:', event, data);

                eventMap['init'] = () => {
                    console.log('init', data);
                    this.scorePanel.set35ScoreLight(data.winScore);
                    this.scorePanel.setGameIdx(Number(data.gameIdx), Number(data.matchType) == 2);
                    setPlayer(data.player.left, data.player.right);
                    this.scorePanel.setLeftScore(data.player.left.leftScore);
                    this.scorePanel.setRightScore(data.player.right.rightScore);
                    this.scorePanel.setLeftFoul(data.player.left.leftFoul);
                    this.scorePanel.setRightFoul(data.player.right.rightFoul);
                    this.emit('init', data)
                    // if (data.status == 0) {//status字段吧 0 进行中 1已结束
                    //     this.scorePanel.resetTimer();
                    //     this.scorePanel.toggleTimer(TimerState.RUNNING);
                    // }

                    //setup timer
                    // console.log('$opView', this.$opView);
                    // this.$opView.setSrvTime(data.t);

                    // this.$opView.liveTime = DateFormat(new Date(this.srvTime), "hh:mm:ss");


                    //test
                    // this.eventPanel.playerInfoCard.fadeInWinPlayer(true, data.player.left);
                    // this.eventPanel.playerInfoCard.fadeInWinPlayer(false, data.player.right);
                    // this.scorePanel.resetTimer();
                    // this.scorePanel.toggleTimer1(TimerState.RUNNING);
                    // Tween.get(this).wait(3000).call(()=> {
                    //     this.scorePanel.toggleTimer1(TimerState.PAUSE);
                    // });
                    // this.scorePanel.setRightFoul(3)
                    // this.scorePanel.setLeftFoul(4)
                    if (this.isTest) {
                        let player = {
                            avatar: "http://w2.hoopchina.com.cn/43/6f/6a/436f6a5aa8a38e158b98830a3b5c4a4b001.jpg",
                            group: 'Fe3O4',
                            height: '177',
                            intro: "一二三四五六七八九十一二三四五六七八九十一二三22四五六七八九十一二三四五六七八九十一二三四五六七八九十",
                            loseAmount: 1,
                            name: "geoffrey0326",
                            roundScore: 28,
                            totalChampion: 0,
                            weight: '79',
                            winAmount: "3"
                        }
                        this.eventPanel.showWin(player)
                    }

                };

                eventMap['updateScore'] = () => {
                    console.log('updateScore', data);
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
                eventMap['startGame'] = () => {
                    console.log('startGame', data);
                    this.scorePanel.set35ScoreLight(data.winScore);
                    this.scorePanel.setGameIdx(data.gameIdx, Number(data.matchType) == 2);
                    setPlayer(data.player.left, data.player.right);
                    // window.location.reload();
                    this.scorePanel.toggleTimer(TimerState.PAUSE);
                    this.scorePanel.resetScore();
                    this.scorePanel.resetTimer();
                };



                eventMap['commitGame'] = () => {
                    console.log('commitGame', data)
                    let player = data.player

                    this.eventPanel.showWin(player)
                    // if (this.isScorePanelVisible) {
                    //     let isBlue = data.idx == 0;
                    //     data.player.winGameCount = data.player.winAmount;
                    //     data.player.loseGameCount = data.player.loseAmount;
                    //     data.player.curFtScore = data.player.roundScore;
                    //     this.eventPanel.playerInfoCard.fadeInWinPlayer(isBlue, data.player);
                    //     this.scorePanel.toggleTimer1(TimerState.PAUSE);
                    // }
                };
                if (eventMap[event]) {
                    isRunning = true
                    TweenEx.delayedCall(this.delayTimeMS, () => {
                        eventMap[event]();
                    });
                }
            });
        })
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