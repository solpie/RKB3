import { VueBase } from '../../utils/VueBase';
export class _PickTeamAdmin extends VueBase {
    template = require('./pickTeam.html');
    teamArr1 = VueBase.PROP
    teamArr2 = VueBase.PROP
    teamArr3 = VueBase.PROP
    constructor() {
        super();
        VueBase.initProps(this);
    }
    created() {
        this.teamArr1 = [{ name: '1', playerId: 1 }]
        this.teamArr2 = [{ name: '2', playerId: 1 }]
        this.teamArr3 = [{ name: '3', playerId: 1 }]
    }
}
export let PickTeamAdmin = new _PickTeamAdmin()