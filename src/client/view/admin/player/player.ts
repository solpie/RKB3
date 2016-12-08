import { descendingProp, ascendingProp } from '../../utils/JsFunc';
import { VueBase } from '../../utils/VueBase';
declare let $;
class PlayerView extends VueBase {
    template = require('./player.html')
    playerArr = VueBase.PROP
    constructor() {
        super();
        VueBase.initProps(this);
    }
    protected created() {
        $.get('/game/player', (res) => {
            this.playerArr = res.sort(ascendingProp('id'))
        })
    }
}
export let playerView = new PlayerView()