import { VueBase } from '../../utils/VueBase';
declare let JSONEditor;
class EditForm extends VueBase{
    playerInfo = VueBase.PROP
    template = require('./editForm.html')
    editor
    watch = {"playerInfo":"onPlayerInfo"}
    constructor() {
        super();
        VueBase.initProps(this);
    }

    protected created (){
        this.playerInfo = {"name":"233"}
    }
    protected mounted()
    {
            var container = document.getElementById("jsoneditor");
                this.editor =new JSONEditor(container);
    }
    methods = {
        onPlayerInfo(v){
            console.log(v)
            this.editor.set(v)
        }
    }

}

export let editForm = new EditForm()