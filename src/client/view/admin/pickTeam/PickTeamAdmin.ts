import { VueBase } from '../../utils/VueBase';
import { PanelId } from '../../const';
import { CommandId } from '../../Command';
import { syncWorldWarPanel3, getLowerthird } from '../../utils/HupuAPI';
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
    // colorArr = VueBase.PROP

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
    lowerthirdText = VueBase.PROP

    confType1_arr: any
    confType1_arr_8090: any
    confType2_arr_8090: any
    constructor() {
        super();
        VueBase.initProps(this);
    }
    created() {
        this.color1 = '绿'
        this.color2 = '红'
        this.color3 = '白'
        // this.colorArr = ['绿', '红', '白']
        this.teamArr1 = [{ name: '1', playerId: 1 }]
        this.teamArr2 = [{ name: '2', playerId: 1 }]
        this.teamArr3 = [{ name: '3', playerId: 1 }]
        this.confType1_arr = [
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
                "button": "盼盼 姜冕",
                "type": 1,
                "cont": ["盼盼_路人王官方主播", "姜冕_路人王官方主播"]
            },
            {
                "button": "姜冕 盼盼",
                "type": 1,
                "cont": ["姜冕_路人王官方主播", "盼盼_路人王官方主播"]
            },
            // {
            //     "button": "Gary 殳海",
            //     "type": 1, 
            //     "cont": ["鹅皇Gary_路人王官方主播", "殳海_腾讯NBA解说嘉宾"]
            // },
            // {
            //     "button": "殳海 Gary",
            //     "type": 1, 
            //     "cont": ["殳海_腾讯NBA解说嘉宾", "鹅皇Gary_路人王官方主播"]
            // },
            {
                "button": "Gary 堂主",
                "type": 1,
                "cont": ["鹅皇Gary_路人王官方主播", "堂主_路人王官方主播"]
            },
            {
                "button": "堂主 Gary",
                "type": 1,
                "cont": ["堂主_路人王官方主播", "鹅皇Gary_路人王官方主播"]
            },
            {
                "button": "(抖音/微信)堂主 Gary",
                "type": 1,
                "cont": ["堂主_微博/抖音号：信堂堂主", "鹅皇Gary_微博/抖音号：鹅皇Gary"]
            },
            {
                "button": "(抖音/微信)Gary 堂主",
                "type": 1,
                "cont": ["鹅皇Gary_微博/抖音号：鹅皇Gary", "堂主_微博/抖音号：信堂堂主"]
            },
            // {
            //     "button": "赵德强",
            //     "type": 2,
            //     "cont": "国家级裁判：赵德强"
            // },
            // {
            //     "button": "王深",
            //     "type": 2,
            //     "cont": "国家一级裁判：王深"
            // },
            // {
            //     "button": "吕文龙",
            //     "type": 2,
            //     "cont": "国家一级裁判：吕文龙"
            // },

            //
        ]
        this.conf = []
    }
    mounted() {
        this.updataPlayerMap()
    }
    updataPlayerMap() {
        syncWorldWarPanel3(data => {
            // let playerMap = JSON.parse(data.playerMap)
            // let name_arr = []
            // for (let k in playerMap) {
            //     let p = playerMap[k]
            //     console.log('update playerMap:', p.name)
            //     if (p.name)
            //         name_arr.push(p.name)
            // }
            // this.conf = []
            // for (let n of this.confType1_arr) {
            //     this.conf.push(n)
            // }
            // for (let n of name_arr) {
            //     this.conf.push({ "button": n, type: 2, cont: n })
            // }


            //主播 裁判 lowerthird   
            getLowerthird('ww3', data => {
                console.log('get lowerthird')
                console.log('referee', data.referee)
                console.log('commentator', data.commentator)

                this.confType1_arr_8090 = []
                for (let i = 0; i < data.commentator.length; i++) {
                    let c = data.commentator[i];
                    this.confType1_arr_8090.push(
                        {
                            "button": c.name + ' ',
                            "type": 1,
                            "cont": ["鹅皇Gary_路人王官方主播", "堂主_路人王官方主播"]
                        }
                    )
                }
                if (data.commentator.length == 2) {
                    let c1 = data.commentator[0]
                    let c2 = data.commentator[1]
                    this.confType1_arr_8090.push(
                        {
                            "button": c1.name + ' ' + c2.name,
                            "type": 1,
                            "cont": [c1.name + '_' + c1.info, c2.name + '_' + c2.info]
                        }
                    )
                }
                this.confType2_arr_8090 = []
                for (let i = 0; i < data.mc.length; i++) {
                    let mc = data.mc[i];

                    this.confType2_arr_8090.push(
                        {
                            "button": mc.name,
                            "type": 2,
                            "cont": mc.info
                        }
                    )
                }
                for (let i = 0; i < data.referee.length; i++) {
                    let ref = data.referee[i];
                    this.confType2_arr_8090.push(
                        {
                            "button": ref.name,
                            "type": 2,
                            "cont": ref.info
                        }
                    )
                }
                this.conf = this.conf.concat(this.confType1_arr_8090)
                    .concat(this.confType2_arr_8090)
            })

            // console.log('update playerMap:', playerMap)
        })

    }
    methods = {
        onShowWW3PlayerInfo(data, v) {
            opReq(CommandId.cs_showWW3PlayerInfo, { playerArr: data, visible: v })
        },
        onShowLowerThird(lt, visible?) {
            console.log('show', lt)
            opReq(CommandId.cs_showLowerThird, { data: lt, visible: visible })
        },
        onShowLowerThirdCustom(lt,type=1) {
            this.onShowLowerThird({
                "button": lt,
                "type": type,
                "cont": lt
            })
        },  
        onUpdatePlayerMap() {
            this.updataPlayerMap()
        },
        onSetColor() {
            // if (this.colorArr[0] != this.colorArr[1]
            //     && this.colorArr[1] != this.colorArr[2]
            //     && this.colorArr[0] != this.colorArr[2]
            // ) {
            //     opReq(CommandId.cs_setTeamColor, {
            //         colorArr: this.colorArr, visible: true
            //     })
            // }
            // else {
            //     alert('颜色相同')
            // }
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