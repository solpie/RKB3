import { VueBase } from '../../utils/VueBase';
import { PanelId } from '../../const';
import { CommandId } from '../../Command';
declare let $;
let opReq = (cmdId: string, param: any) => {
    param._ = null;
    $.ajax({
        url: `/panel/${PanelId.onlinePanel}/${cmdId}`,
        type: "post",
        data: JSON.stringify(param),
        headers: { "Content-Type": "application/json" },
        dataType: "json"
    });
};
export class _PickTeamAdmin extends VueBase {
    template = require('./pickTeam.html');
    teamArr1 = VueBase.PROP
    teamArr2 = VueBase.PROP
    teamArr3 = VueBase.PROP
    conf = VueBase.PROP
    constructor() {
        super();
        VueBase.initProps(this);
    }
    created() {
        this.teamArr1 = [{ name: '1', playerId: 1 }]
        this.teamArr2 = [{ name: '2', playerId: 1 }]
        this.teamArr3 = [{ name: '3', playerId: 1 }]
        this.conf = [
            {
                "button": "小易 余霜",
                "type": 1,//ppd logo 
                "cont": ["小易_MC小易", "余霜_英雄联盟官方主持人"]
            },
            {
                "button": "余霜 小易 ",
                "type": 1,//ppd logo 
                "cont": ["余霜_英雄联盟官方主持人","小易_MC小易"]
            },
            {
                "button": "gary 杨毅",
                "type": 1,//ppd logo 
                "cont": ["gary_主播","杨毅_嘉宾"]
            },
            {
                "button": "黄宇军",
                "type": 2,
                "cont": "黄宇军(军哥)"
            },
            {
                "button": "小青龙",
                "type": 2,
                "cont": "说唱歌手：小青龙"
            },
            {
                "button": "有奖互动",
                "type": 3,//福利题
                "cont": "url"
            }
        ]
    }
    methods = {
        onShowLowerThird(lt,visible?) {
            console.log('show')
            
            opReq(CommandId.cs_showLowerThird, { data: lt, visible: visible })
        }
    }
}
export let PickTeamAdmin = new _PickTeamAdmin()