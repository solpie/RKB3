import { VueBase } from '../../utils/VueBase';
class EditForm extends VueBase{
    playerInfo = VueBase.PROP
    template = require('./editForm.html')
    constructor() {
        super();
        VueBase.initProps(this);
    }

    protected created (){
        this.playerInfo = {"name":"233"}
    }

}

export let editForm = new EditForm()