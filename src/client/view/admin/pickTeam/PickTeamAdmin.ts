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

    color1 = VueBase.PROP
    color2 = VueBase.PROP
    color3 = VueBase.PROP
    colorArr = VueBase.PROP

    team1_1 = VueBase.PROP
    team1_2 = VueBase.PROP
    team1_3 = VueBase.PROP
    team1_4 = VueBase.PROP

    team2_1 = VueBase.PROP
    team2_2 = VueBase.PROP
    team2_3 = VueBase.PROP
    team2_4 = VueBase.PROP

    team3_1 = VueBase.PROP
    team3_2 = VueBase.PROP
    team3_3 = VueBase.PROP
    team3_4 = VueBase.PROP
    constructor() {
        super();
        VueBase.initProps(this);

    }
    created() {
        this.color1 = '绿'
        this.color2 = '红'
        this.color3 = '白'
        this.colorArr = ['绿', '红', '白']
        this.teamArr1 = [{ name: '1', playerId: 1 }]
        this.teamArr2 = [{ name: '2', playerId: 1 }]
        this.teamArr3 = [{ name: '3', playerId: 1 }]
        let arr2 = [
            '傅攀怡'
            , '姜冕'
            , '徐心雨'
            , '叶凤阳'
            , '石一童'
            , '艾林林'
            , '陈婵丽'
            , '苏锦欣'
            , '亿元'
            , '李俊'
            , '肖颖'
            , '周薇'


        ]
        this.conf = [
            // {
            //     "button": "小易 余霜",
            //     "type": 1,//ppd logo 
            //     "cont": ["小易_MC小易", "余霜_英雄联盟官方主持"]
            // },
            // {
            //     "button": "余霜 小易 ",
            //     "type": 1,//ppd logo 
            //     "cont": ["余霜_英雄联盟官方主持", "小易_MC小易"]
            // },
            //lowerthird
            {
                "button": "盼盼 flyyoung",
                "type": 1,//ppd logo 
                "cont": ["盼盼_路人王官方主播", "flyyoung_路人王官方主播"]
            },
            {
                "button": "flyyoung 盼盼",
                "type": 1,//ppd logo 
                "cont": ["flyyoung_路人王官方主播", "盼盼_路人王官方主播"]
            },
            // {
            //     "button": "Gary 杨毅",
            //     "type": 1,//ppd logo 
            //     "cont": ["鹅皇Gary_路人王官方主播", "杨毅_篮球评论员"]
            // },
            // {
            //     "button": "杨毅 Gary",
            //     "type": 1,//ppd logo 
            //     "cont": ["杨毅_篮球评论员", "鹅皇Gary_路人王官方主播"]
            // },
            {
                "button": "Gary 堂主",
                "type": 1,//ppd logo 
                "cont": ["鹅皇Gary_路人王官方主播", "堂主_路人王官方主播"]
            },
            {
                "button": "堂主 Gary",
                "type": 1,//ppd logo 
                "cont": ["堂主_路人王官方主播", "鹅皇Gary_路人王官方主播"]
            },
            //

        ]
        for (let n of arr2) {
            this.conf.push({ "button": n, type: 2, cont: n })
        }
    }
    methods = {
        onShowLowerThird(lt, visible?) {
            console.log('show')
            opReq(CommandId.cs_showLowerThird, { data: lt, visible: visible })
        },
        onSetColor() {
            if (this.colorArr[0] != this.colorArr[1]
                && this.colorArr[1] != this.colorArr[2]
                && this.colorArr[0] != this.colorArr[2]
            ) {
                opReq(CommandId.cs_setTeamColor, {
                    colorArr: this.colorArr, visible: true
                })
            }
            else {
                alert('颜色相同')
            }
        },
        onShowPick(v = true) {
            opReq(CommandId.cs_showPickup, {
                teamArr1: [
                    this.team1_1,
                    this.team1_2,
                    this.team1_3,
                    this.team1_4,
                ],
                teamArr2: [
                    this.team2_1,
                    this.team2_2,
                    this.team2_3,
                    this.team2_4,
                ],
                teamArr3: [
                    this.team3_1,
                    this.team3_2,
                    this.team3_3,
                    this.team3_4,
                ],
                visible: v
            })
        }
    }
}
export let PickTeamAdmin = new _PickTeamAdmin()