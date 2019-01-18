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
        this.conf = [
            {
                "button": "小易 余霜",
                "type": 1,//ppd logo 
                "cont": ["小易_MC小易", "余霜_英雄联盟官方主持"]
            },
            {
                "button": "余霜 小易 ",
                "type": 1,//ppd logo 
                "cont": ["余霜_英雄联盟官方主持", "小易_MC小易"]
            },
            {
                "button": "小易 盼盼",
                "type": 1,//ppd logo 
                "cont": ["小易_MC小易", "盼盼_路人王官方主播"]
            },
            {
                "button": "盼盼 小易",
                "type": 1,//ppd logo 
                "cont": ["盼盼_路人王官方主播", "小易_MC小易"]
            },
            {
                "button": "Gary 杨毅",
                "type": 1,//ppd logo 
                "cont": ["鹅黄Gary_路人王官方主播", "杨毅_篮球评论员"]
            },
            {
                "button": "杨毅 Gary",
                "type": 1,//ppd logo 
                "cont": ["杨毅_篮球评论员", "鹅黄Gary_路人王官方主播"]
            },
            {
                "button": "Gary 堂主",
                "type": 1,//ppd logo 
                "cont": ["鹅黄Gary_路人王官方主播", "堂主_路人王官方主播"]
            },
            {
                "button": "堂主 Gary",
                "type": 1,//ppd logo 
                "cont": ["堂主_路人王官方主播", "鹅黄Gary_路人王官方主播"]
            },
            //
            {
                "button": "黄宇军",
                "type": 2,
                "cont": "黄宇军(军哥)"
            },
            {
                "button": "马克",
                "type": 2,
                "cont": "马克"
            },
            {
                "button": "王晶",
                "type": 2,
                "cont": "王晶"
            },
            {
                "button": "张梓祎",
                "type": 2,
                "cont": "张梓祎"
            },
            {
                "button": "张帅康",
                "type": 2,
                "cont": "张帅康"
            },
            {
                "button": "陈凯涛",
                "type": 2,
                "cont": "陈凯涛"
            },
            {
                "button": "李俊达",
                "type": 2,
                "cont": "李俊达"
            },
            {
                "button": "宋流轩",
                "type": 2,
                "cont": "宋流轩(宋教练)"
            },
            {
                "button": "徐长龙",
                "type": 2,
                "cont": "徐长龙"
            },
            {
                "button": "张天宇",
                "type": 2,
                "cont": "张天宇"
            },
            {
                "button": "张智扬",
                "type": 2,
                "cont": "张智扬"
            },
            {
                "button": "孟亚东",
                "type": 2,
                "cont": "孟亚东(平常心)"
            },
            {
                "button": "郝天佶",
                "type": 2,
                "cont": "郝天佶(头盔哥)"
            },
            {
                "button": "陈泽文",
                "type": 2,
                "cont": "陈泽文"
            },
            {
                "button": "耿骁骐",
                "type": 2,
                "cont": "耿骁骐"
            },
           
            {
                "button": "安云鹏",
                "type": 2,
                "cont": "安云鹏"
            },
            {
                "button": "张祎逊",
                "type": 2,
                "cont": "张祎逊"
            },
            {
                "button": "矣进宏",
                "type": 2,
                "cont": "矣进宏"
            },
            {
                "button": "小青龙",
                "type": 2,
                "cont": "说唱歌手：小青龙"
            }
        ]
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
        onShowPick(v=true) {
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