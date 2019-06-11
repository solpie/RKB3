import { getPlayerMap } from '../../utils/HupuAPI';
import { arrToMap } from '../../utils/JsFunc';
export class Champion8090 {
    player_map:any
    get_player_list(callback) {
        getPlayerMap(data => {
            this.player_map = arrToMap(data.player_all, 'player_id')
            for (let k in this.player_map) {
                let p = this.player_map[k]
                p.playerId = p.player_id
            }
            console.log('get player list', this.player_map)
            callback(this.player_map)
        })
    }
}