import { editForm } from './editForm';
import { getPlayerDoc } from '../../utils/HupuAPI';
import { descendingProp, ascendingProp } from '../../utils/JsFunc';
import { VueBase } from '../../utils/VueBase';
class PlayerView extends VueBase {
    template = require('./player.html')
    playerArr = VueBase.PROP
    components = {"editForm":editForm}
    
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
    
     methods = {
        onEdit(id){
            console.log('onEdit player id:',id)
        }
    }
}
export let playerView = new PlayerView()