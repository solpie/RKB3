import { imgLoader } from '../../../utils/ImgLoader';
import { imgToTex, BitmapText, newBitmap } from '../../../utils/PixiEx';
import { loadImg } from '../../../utils/JsFunc';
import { TextTimer } from '../../../utils/TextTimer';
export class Countdown extends PIXI.Container {
    constructor() {
        super()
        loadImg('/img/num/num1.png', (img) => {
            this.addChild(newBitmap({url:'/img/panel/countdown/bg.png'}))
            let tex = imgToTex(img)
            let sheet = {
                text: '0',
                animations: {
                    "1":5, "2": 0, "3": 7, "4":6, "5": 3,
                    "6":9 , "7":8, "8": 10, "9":1 , "0": 2, ":":4
                },
                texture: tex,
                frames: [
                    [0, 75, 51, 74],
                    [0, 150, 51, 74],
                    [52, 0, 51, 74],
                    [52, 150, 51, 74],
                    [104, 150, 51, 74],
                    [104, 75, 51, 74],
                    [104, 0, 51, 74],
                    [52, 75, 51, 74],
                    [0, 0, 51, 74],
                    [156, 0, 51, 74],
                    [156, 75, 51, 74],
                ]
            }
            let sec = new BitmapText(sheet)
            sec.ofs = -16
            sec.x = 490
            sec.y = 109+35
            this.addChild(sec)
            sec.text = "00:00"
            let cd = new TextTimer()
            cd.setTimeBySec(3600)
            // sec.text = "1234567890:"
            cd.isMin = true
            cd.on('sec', text => {
                sec.text = text
            })
            cd.toggleTimer()
            
        })


    }
}