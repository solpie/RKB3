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
    delayTimeMS = 0
    constructor(stage: PIXI.Container) {
        super(PanelId.onlinePanel)
        this.name = PanelId.scorePanel

        this.scorePanel = new Score2017(stage)

        console.log('new ScoreView')

        this.initRemote()
        this.initLocal()
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
    }
    initRemote() {
        // getHupuWs()
        getHupuWS((hupuWsUrl) => {
            let remoteIO = io.connect(hupuWsUrl);
            let setPlayer = (leftPlayer, rightPlayer) => {
                console.log(leftPlayer)
                this.scorePanel.setLeftPlayerInfo(leftPlayer.name, leftPlayer.avatar, leftPlayer.group)
                this.scorePanel.setRightPlayerInfo(rightPlayer.name, rightPlayer.avatar, rightPlayer.group)
            };

            remoteIO.on('connect', () => {
                console.log('hupuAuto socket connected', hupuWsUrl);
                remoteIO.emit('passerbyking', {
                    game_id: '107',
                    page: 'score'
                })
            });

            remoteIO.on('wall', (data: any) => {
                let event = data.et;
                let eventMap = {};
                console.log('event:', event, data);

                eventMap['init'] = () => {
                    console.log('init', data, "visible");
                    // this.scorePanel.ctn.visible = this.isScorePanelVisible;
                    this.scorePanel.set35ScoreLight(data.winScore);
                    this.scorePanel.setGameIdx(data.gameIdx);
                    setPlayer(data.player.left, data.player.right);
                    this.scorePanel.setLeftScore(data.player.left.leftScore);
                    this.scorePanel.setRightScore(data.player.right.rightScore);
                    this.scorePanel.setLeftFoul(data.player.left.leftFoul);
                    this.scorePanel.setRightFoul(data.player.right.rightFoul);

                    if (data.status == 0) {//status字段吧 0 进行中 1已结束
                        this.scorePanel.resetTimer();
                        this.scorePanel.toggleTimer(TimerState.RUNNING);
                    }


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
                    this.scorePanel.setLeftFoul(4)
                    // var i = 0
                    // new TweenEx(this.scorePanel)
                    //     .delay(1000)
                    //     .call(() => {
                    //         this.scorePanel.setRightScore(i)
                    //         this.scorePanel.setLeftScore(++i)
                    //     })
                    //     .delay(1000)
                    //     .call(() => {
                    //         this.scorePanel.setRightScore(i)
                    //         this.scorePanel.setLeftScore(++i)
                    //     })
                    //     .delay(1000)
                    //     .call(() => {
                    //         this.scorePanel.setRightScore(i)
                    //         this.scorePanel.setLeftScore(++i)
                    //     })
                    //     .delay(1000)
                    //     .call(() => {
                    //         this.scorePanel.setRightScore(i)
                    //         this.scorePanel.setLeftScore(++i)
                    //     })
                    //     .delay(1000)
                    //     .call(() => {
                    //         this.scorePanel.setRightScore(i)
                    //         this.scorePanel.setLeftScore(++i)
                    //     })
                    //     .delay(1000)
                    //     .call(() => {
                    //         this.scorePanel.setRightScore(i)
                    //         this.scorePanel.setLeftScore(++i)
                    //     })
                    //     .start()
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

                eventMap['startGame'] = () => {
                    console.log('startGame', data);
                    this.scorePanel.set35ScoreLight(data.winScore);
                    this.scorePanel.setGameIdx(data.gameIdx);
                    setPlayer(data.player.left, data.player.right);
                    // window.location.reload();
                    this.scorePanel.resetScore();
                    this.scorePanel.resetTimer();
                    this.scorePanel.toggleTimer(TimerState.RUNNING);
                };

                // eventMap['commitGame'] = ()=> {
                //     if (this.isScorePanelVisible) {
                //         let isBlue = data.idx == 0;
                //         data.player.winGameCount = data.player.winAmount;
                //         data.player.loseGameCount = data.player.loseAmount;
                //         data.player.curFtScore = data.player.roundScore;
                //         this.eventPanel.playerInfoCard.fadeInWinPlayer(isBlue, data.player);
                //         this.scorePanel.toggleTimer1(TimerState.PAUSE);
                //     }
                // };
                if (eventMap[event]) {
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