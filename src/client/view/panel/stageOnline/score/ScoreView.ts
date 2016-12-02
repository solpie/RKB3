import { getHupuWS } from '../../../utils/HupuAPI';
import { ScorePanel } from './ScorePanel';
import { CommandId } from '../../../Command';
// import { initIO } from '../../../../router/PanelRouter';
import { PanelId, TimerState } from '../../../const';
import { BasePanelView } from '../../BasePanelView';
declare let io;
export class ScoreView extends BasePanelView {
    scorePanel: ScorePanel
    delayTimeMS = 0
    constructor(stage: PIXI.Container) {
        super(PanelId.onlinePanel)
        this.name = PanelId.scorePanel
        this.ctn = new PIXI.Container()
        stage.addChild(this.ctn)

        this.scorePanel = new ScorePanel(this.ctn)

        console.log('new ScoreView')

        this.initRemote()
    }

    initRemote(){
        // getHupuWs()
     
        getHupuWS((hupuWsUrl)=>{
            let remoteIO = io.connect(hupuWsUrl);

            let setPlayer = (leftPlayer, rightPlayer)=> {
            // let leftPlayerInfo = new PlayerInfo();
            // let playerData = leftPlayer;
            // leftPlayerInfo.name(playerData.name);
            // leftPlayerInfo.avatar(playerData.avatar);
            // leftPlayerInfo.winGameCount(playerData.winAmount);
            // leftPlayerInfo.loseGameCount(playerData.loseAmount);
            // leftPlayerInfo.playerData['ftDoc'] = {name: leftPlayer.group};
            // leftPlayerInfo.playerData.playerNum = leftPlayer.playerNum;
            // leftPlayerInfo.playerData.curFtScore = leftPlayer.roundScore;
            // this.playerPanel.setPlayer(0, leftPlayerInfo.playerData);

            // let rightPlayerInfo = new PlayerInfo();
            // playerData = rightPlayer;
            // rightPlayerInfo.name(playerData.name);
            // rightPlayerInfo.avatar(playerData.avatar);
            // rightPlayerInfo.winGameCount(playerData.winAmount);
            // rightPlayerInfo.loseGameCount(playerData.loseAmount);
            // rightPlayerInfo.playerData['ftDoc'] = {name: rightPlayer.group};
            // rightPlayerInfo.playerData.playerNum = rightPlayer.playerNum;
            // rightPlayerInfo.playerData.curFtScore = rightPlayer.roundScore;
            // this.playerPanel.setPlayer(1, rightPlayerInfo.playerData);
            // this.scorePanel.setPlayerName([leftPlayer.name, rightPlayer.name])
            };

        remoteIO.on('connect', ()=> {
            console.log('hupuAuto socket connected');
            remoteIO.emit('passerbyking', {
                game_id: '107',
                page: 'score'
            })
        });

        remoteIO.on('wall', (data: any)=> {
            let event = data.et;
            let eventMap = {};
            console.log('event:', event, data);

            eventMap['init'] = ()=> {
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
                    this.scorePanel.toggleTimer1(TimerState.RUNNING);
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
            };

            eventMap['updateScore'] = ()=> {
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

            eventMap['startGame'] = ()=> {
                console.log('startGame', data);
                this.scorePanel.set35ScoreLight(data.winScore);
                this.scorePanel.setGameIdx(data.gameIdx);
                setPlayer(data.player.left, data.player.right);
                // window.location.reload();
                this.scorePanel.resetScore();
                this.scorePanel.resetTimer();
                this.scorePanel.toggleTimer1(TimerState.RUNNING);
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
            // eventMap['fadeInCountDown'] = ()=> {
            //     let text = data.text;
            //     let cdSec = data.cdSec;
            //     let type = data.type;
            //     this.countDownRender.fadeInCountDown(cdSec, text);
            //     console.log('fadeInCountDown', data);
            // };
            // eventMap['fadeOutCountDown'] = ()=> {
            //     this.countDownRender.fadeOut();
            //     console.log('fadeOutCountDown', data);
            // };
            if (eventMap[event]) {

                // delayCall(this.delayTimeMS, ()=> {
                    eventMap[event]();
                // });
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
                this.scorePanel.toggleTimer1(TimerState.RUNNING)
            })
            .on(CommandId.sc_pauseTimer, (data) => {
                this.scorePanel.toggleTimer1(TimerState.PAUSE)
            })
            .on(CommandId.sc_resetTimer, (data) => {
                console.log("CommandId.sc_resetTimer", data);
                this.scorePanel.resetTimer()
            })
    }
}