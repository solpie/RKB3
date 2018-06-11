import { imgLoader } from "../../../utils/ImgLoader";
import { getTop5Data } from "../../../utils/HupuAPI";

export class HotPlayer extends PIXI.Container {
    cacheTime: any
    infoArr: any
    create(parent) {

        let bgUrl = '/img/panel/studio/comingFg.png'
        let imgArr = [bgUrl]

        // getTop5Data(res => {
        //     let d = JSON.parse(res)
        //     this.infoArr = d
        //     this.cacheTime = new Date().getTime()
        //     for (let i = 0; i < 10; i++) {
        //         if (this.infoArr[i]) {
        //             imgArr.push(`/img/player/top5/${this.infoArr[i].img}.png?t=` + this.cacheTime)
        //             //     this.infoArr[i] //player info
        //         }
        //     }
        //     imgLoader.loadTexArr(imgArr, tex => {

        //     })
        // })
    }

    show(data) {

    }
}