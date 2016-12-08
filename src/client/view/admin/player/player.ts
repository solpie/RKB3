import { getPlayerDoc } from '../../utils/HupuAPI';
import { descendingProp, ascendingProp } from '../../utils/JsFunc';
import { VueBase } from '../../utils/VueBase';
class PlayerView extends VueBase {
    template = require('./player.html')
    playerArr = VueBase.PROP
    constructor() {
        super();
        VueBase.initProps(this);
    }
    protected created() {
        getPlayerDoc( (res) => {
            this.playerArr = res.sort(ascendingProp('id'))
            console.log(this.playerArr);
        })
    }
}
export let playerView = new PlayerView()