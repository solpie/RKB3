import { dynamicLoading } from '../../utils/WebJsFunc';
import { VueBase } from '../../utils/VueBase';
import { newBitmap } from '../../utils/PixiEx';
 class Stage3point extends VueBase{
     template = require('./3point.html')
     isOp= VueBase.PROP
    // constructor(){
    //     super()
    //     // parent.addChild(this)
    //     // var bg = newBitmap({url:''})
    //     // this.addChild(bg)
    // }

     constructor() {
        super();
        VueBase.initProps(this);
    }

    protected created(){
        this.isOp = this.$route.params['op'] == 'op'
        if (this.isOp) {
            dynamicLoading.css('/css/bulma.min.css')
        }
    }

    setPlayerState(playerId,state){



    }
}

export let stage3point = new Stage3point()