import {  blink2, blink3 } from '../../../utils/Fx';
import { BitmapText, imgToTex, loadRes, newBitmap } from '../../../utils/PixiEx';

import { ViewConst } from '../../../const';
declare let TWEEN;
export class ScorePanel2 {
    ctn: PIXI.Container;
    timeText: PIXI.Text
    leftScoreNum: BitmapText;
    rightScoreNum: BitmapText;

    leftFoulCircleArr: Array<any>;
    rightFoulCircleArr: Array<any>;
    leftFoulHint: PIXI.Sprite;
    rightFoulHint: PIXI.Sprite;

    constructor(parent: PIXI.Container) {
        let ctn = new PIXI.Container()
        ctn.y = ViewConst.STAGE_HEIGHT - 132
        parent.addChild(ctn)
        this.ctn = ctn;


        ctn.addChild(newBitmap({ url: '/img/panel/score/bg.png' }))

        let timeText = this.timeText = new PIXI.Text("99:99", { fill: "#ffffffff" })
        timeText.x = ViewConst.STAGE_WIDTH * .5 - 28
        timeText.y = 100
        ctn.addChild(timeText)


        var px = 855
        loadRes("/img/panel/stage1v1/scoreNum.png", (img) => {
            let tex = imgToTex(img)

            let sheet = {
                text: '0',
                animations: {
                    "0": 1, "1": 2, "2": 3, "3": 4, "4": 5,
                    "5": 6, "6": 7, "7": 8, "8": 9, "9": 0
                },
                texture: tex,
                frames: [[0, 0, 40, 54],
                [41, 0, 40, 54],
                [0, 55, 40, 54],
                [41, 55, 40, 54],
                [82, 0, 40, 54],
                [82, 55, 40, 54],
                [123, 0, 40, 54],
                [123, 55, 40, 54],
                [0, 110, 40, 54],
                [41, 110, 40, 54]]
            }

            let leftScoreNum = new BitmapText(sheet)
            this.leftScoreNum = leftScoreNum
            leftScoreNum.x = px
            leftScoreNum.y = 60
            leftScoreNum.align = 'center'
            ctn.addChild(leftScoreNum)

            let rightScoreNum = new BitmapText(sheet)
            this.rightScoreNum = rightScoreNum
            rightScoreNum.x = px + 175
            rightScoreNum.y = leftScoreNum.y
            rightScoreNum.align = 'center'
            ctn.addChild(rightScoreNum)
        })


        //  this.leftCircleArr = [];
        //     this.rightCircleArr = [];
        //     this.leftCircleBgArr = [];
        //     this.rightCircleBgArr = [];

        this.initFoulCircle()
    }

    initFoulCircle() {
        var circle;
        this.leftFoulCircleArr = [];
        this.rightFoulCircleArr = [];

        for (var i = 0; i < 4; i++) {
            circle = newBitmap({ url: '/img/panel/score/foul.png' });
            circle.x = 604 + i * 9;
            circle.y = 120 - i * 15;
            circle.alpha = 0;
            this.ctn.addChild(circle);
            this.leftFoulCircleArr.push(circle);

            circle = newBitmap({ url: '/img/panel/score/foul.png' });
            circle.x = 1318 - i * 9;
            circle.scale.x = -1;
            circle.y = 120 - i * 15;
            circle.alpha = 0;
            this.ctn.addChild(circle);
            this.rightFoulCircleArr.push(circle);
        }

        this.leftFoulHint = newBitmap({ url: '/img/panel/score/foulHint.png' });
        //new createjs.Bitmap('/img/panel/score/foulHint.png')
        this.leftFoulHint.x = 590;
        this.leftFoulHint.y = 62;
        this.ctn.addChild(this.leftFoulHint);

        this.rightFoulHint = newBitmap({ url: '/img/panel/score/foulHint.png' });
        // new createjs.Bitmap('/img/panel/stage1v1/foulHint.png')
        this.rightFoulHint.scale.x = -1;
        this.rightFoulHint.x = 1332;
        this.rightFoulHint.y = 62//this.leftFoulHint.y;
        this.ctn.addChild(this.rightFoulHint);

        this.rightFoulHint.alpha = this.leftFoulHint.alpha = 0;

    }

    toggleTimer1(state) {
    }
    resetTimer() {
    }

    set35ScoreLight(winScore) {
    }

    setGameIdx(gameIdx) {
    }

    resetScore() {
        this.setLeftScore(0);
        this.setRightScore(0);
        this.setLeftFoul(0);
        this.setRightFoul(0);
    }

    setLeftScore(leftScore) {
        this.leftScoreNum.text = String(leftScore)
    }

    setRightScore(rightScore) {
        this.rightScoreNum.text = String(rightScore)
    }

    setLeftFoul(leftFoul) {
        this._setFoul(leftFoul, this.leftFoulCircleArr, this.leftFoulHint);
    }

    _setFoul(foul, circleArr, hint) {
        foul = Number(foul);
        if (foul > 4)
            foul = 4;
        var c;
        for (var i = 0; i < circleArr.length; i++) {
            if (i < foul) {
                if (circleArr[i].alpha == 0) {
                    blink2({
                        target: circleArr[i]
                    });
                }
            }
            else {
                // c = circleArr[i]
                // var a2 = { alpha: circleArr[i].alpha }
                // new TWEEN.Tween(a2)
                //     .to({ alpha: 0.0 }, 200)
                //     .onUpdate(() => {
                //         c.alpha = a2.alpha
                //         // circleArr[i].alpha = a2.alpha
                //     })
                //     .start()
            }
        }
        //闪烁
        if (foul > 3) {
            console.log("foul: 4");
            // var a2 = { alpha: hint.alpha }
            blink2({ target: hint, time: 150 })
            // var t2 = new TWEEN.Tween(hint)
            //     .to({ alpha: 1.0 }, 150)
            //     .to({ alpha: 0.0 }, 150)
            //     .repeat(Infinity)
            //     .onUpdate(function () {
            //         // console.log(a2.alpha);
            //         // hint.alpha = a2.alpha;
            //     })
            //     .start()

        }
        else {
            hint.alpha = 0

            // var a = { alpha: hint.alpha }
            // new TWEEN.Tween(a)
            //     .to({ alpha: 0.0 }, 200)
            //     .onUpdate(() => {
            //         hint.alpha = a.alpha;
            //     })
            //     .start()

        }

    }

    setRightFoul(rightFoul) {
        this._setFoul(rightFoul, this.rightFoulCircleArr, this.rightFoulHint);
    }

}