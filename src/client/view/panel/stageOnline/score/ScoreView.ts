import { getScorePanelUrl } from '../../../admin/home/home';
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
declare let $;
function logEvent(...a) {
    let d = new Date()
    let t = '[' + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ']'
    console.info(t, a)
}
export class ScoreView extends BasePanelView {
    scorePanel: Score2017
    eventPanel: Event2017

    delayTimeMS = 0
    gameId: any
    isTest = false
    $route: any


    constructor(stage: PIXI.Container, $route) {
        super(PanelId.onlinePanel)
        this.$route = $route
        this.name = PanelId.scorePanel
        // this.isOp = this.$route.params.op == "op"
        let darkTheme = $route.query.theme == "dark"
        this.gameId = $route.params.game_id

        this.isTest = $route.query.test == "1"

        this.scorePanel = new Score2017(stage, darkTheme)
        this.eventPanel = new Event2017(stage, darkTheme)
        console.log('new ScoreView')
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
            TweenEx.delayedCall(7000, () => {
                player.group = 'Gambia'
                this.eventPanel.showWin(player)
            })
            // this.eventPanel.showLogoFx()

        }
        this.initDelay()
        this.initLocal()
        // if (this.isTest)
        //     this.initRoom()
    }
    initDelay() {
        $.get('/online/delay/' + this.gameId, (delay) => {
            // this.delayTimeShowOnly = delay
            if (delay)
                this.delayTimeMS = Number(delay) * 1000
            console.log('/online/delay/' + this.delayTimeMS)
            this.initRemote()
        })
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
                data.visible ?
                    this.scorePanel.show()
                    : this.scorePanel.hide()
            })
            .on(`${CommandId.sc_toggleChampionPanel}`, (data) => {
                data.visible ?
                    this.eventPanel.champion.show()
                    : this.eventPanel.champion.hide()
            })
            .on(`${CommandId.sc_showNotice}`, (data) => {
                this.eventPanel.showNotice(data.title, data.content, data.isLeft,data.isBold)
                data.visible ?
                    this.eventPanel.noticeSprite.show()
                    : this.eventPanel.noticeSprite.hide()
            })
    }

    initRemote() {
        // getHupuWs()
        let isRunning = false
        getHupuWS((hupuWsUrl) => {
            let remoteIO = io.connect(hupuWsUrl);
            let setPlayer = (leftPlayer, rightPlayer) => {
                console.log(leftPlayer)
                // player level 0 其他 1 至少一个胜场  2 大师赛 3冠军
                this.scorePanel.setLeftPlayerInfo(leftPlayer.name, leftPlayer.avatar, leftPlayer.weight, leftPlayer.height, leftPlayer.groupId, leftPlayer.level)
                this.scorePanel.setRightPlayerInfo(rightPlayer.name, rightPlayer.avatar, rightPlayer.weight, rightPlayer.height, rightPlayer.groupId, rightPlayer.level)
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
                    logEvent('init', data);
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
                    // if (gameTime > 0)
                    //     this.scorePanel.toggleTimer(TimerState.RUNNING)
                    // this.emit('init', data)
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
                eventMap['startGame'] = () => {
                    console.log('startGame', data);
                    logEvent('startGame', data)
                    this.scorePanel.set35ScoreLight(data.winScore);
                    this.scorePanel.setGameIdx(data.gameIdx, Number(data.matchType));
                    setPlayer(data.player.left, data.player.right);
                    // window.location.reload();
                    this.scorePanel.toggleTimer(TimerState.PAUSE);
                    this.scorePanel.resetScore();
                    this.scorePanel.resetTimer();
                };

                eventMap['commitGame'] = () => {
                    console.log('commitGame', data)
                    logEvent('commitGame', data)
                    let player = data.player

                    this.eventPanel.showWin(player)
                    this.scorePanel.toggleTimer(TimerState.PAUSE);
                };
                if (eventMap[event]) {
                    isRunning = true
                    let d = this.delayTimeMS;
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