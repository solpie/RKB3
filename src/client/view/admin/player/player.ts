import { editForm } from './editForm';
import { getPlayerDoc } from '../../utils/HupuAPI';
import { descendingProp, ascendingProp } from '../../utils/JsFunc';
import { VueBase } from '../../utils/VueBase';
class PlayerView extends VueBase {
    template = require('./player.html')
    playerArr = VueBase.PROP
    editPlayerDoc = VueBase.PROP
    components = {"editForm":editForm}
    isEdit = VueBase.PROP
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
        onEdit(playerDoc){
            console.log('onEdit player id:',playerDoc.id)
            this.editPlayerDoc = playerDoc
            this.isEdit = true
         }
    }
}
export let playerView = new PlayerView()