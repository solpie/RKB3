import { $post } from '../../utils/WebJsFunc';
import { VueBase } from '../../utils/VueBase';
declare let JSONEditor;
declare let $;

class EditForm extends VueBase {
    isShow = VueBase.PROP
    playerInfo = VueBase.PROP
    template = require('./editForm.html')
    editor
    watch = { "playerInfo": "onPlayerInfo" }
    player_id: string//for edit protect

    constructor() {
        super();
        VueBase.initProps(this);
    }

    protected created() {
        this.player_id = ''
    }
    protected mounted() {
        var container = document.getElementById("jsoneditor");
        this.editor = new JSONEditor(container);
        this.setPlayerDoc(this.playerInfo)
    }
    setPlayerDoc(v) {
        console.log(v)
        if (v) {
            this.player_id = v._id
            delete v._id
            this.editor.set(v)
        }
    }
    methods = {
        onPlayerInfo(v) {
            this.setPlayerDoc(v)
        },
        onCancel() {
            this.$parent.isEdit = false
        },
        onUpdate() {
            let playerDoc = this.editor.get()
            playerDoc._id = this.player_id
            console.log('playerDoc', playerDoc);
            if (playerDoc._id) {
                $post('/game/player/update', playerDoc, (res) => {
                    console.log('playerDoc update', res);
                    if (res && res._id) {
                        window.location.reload()
                    }
                })
                this.$parent.isEdit = false
            }

        }
    }

}

export let editForm = new EditForm()