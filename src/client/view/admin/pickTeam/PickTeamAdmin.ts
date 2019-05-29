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
    confType2_playerMap = VueBase.PROP
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

            //  
        ]
        this.conf = []
        this.confType2_playerMap = []
    }
    mounted() {
        this.updataPlayerMap()
    }
    updataPlayerMap() {
        syncWorldWarPanel3(data => {
            //主播 裁判 lowerthird   
            getLowerthird('lowerthird', data => {
                console.log('get lowerthird', data)
                console.log('referee', data.referee)
                console.log('commentator', data.commentator)
                this.confType2_playerMap
                let doc = JSON.parse(data.event_1.doc)
                // let doc = data.doc
                console.log('playerMap', doc.playerMap)
                this.confType2_playerMap = []
                for (let pid in doc.playerMap) {
                    if (pid == 'p0')
                        continue;
                    let p = doc.playerMap[pid]
                    this.confType2_playerMap.push({
                        "button": p.name + '-' + pid,
                        "type": 2,
                        "cont": p.name
                    })
                }
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
                let doubleCommentator = (field) => {
                    if (data[field].length == 2) {
                        let c1 = data[field][0]
                        let c2 = data[field][1]
                        this.confType1_arr_8090.push(
                            {
                                "button": c1.name + ' ' + c2.name,
                                "type": 1,
                                "cont": [c1.name + '_' + c1.info, c2.name + '_' + c2.info]
                            }
                        )
                        let tmp = c1
                        c1 = c2
                        c2 = tmp
                        this.confType1_arr_8090.push(
                            {
                                "button": c1.name + ' ' + c2.name,
                                "type": 1,
                                "cont": [c1.name + '_' + c1.info, c2.name + '_' + c2.info]
                            }
                        )
                    }
                }
                doubleCommentator('double_1')
                doubleCommentator('double_2')


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
        onShowLowerThirdCustom(lt, type = 1) {
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