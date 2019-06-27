import { getPlayerMap, getPlayer2 } from '../../utils/HupuAPI';
import { arrToMap } from '../../utils/JsFunc';
export class Champion8090 {
    player_map: any
    get_player_list(callback) {
        getPlayer2(data => {
            this.player_map = arrToMap(data, 'player_id')
            for (let k in this.player_map) {
                let p = this.player_map[k]
                if (p.name)
                    p.playerId = p.player_id
                else
                    delete this.player_map[k]
            }
            console.log('get player list', this.player_map)
            callback(this.player_map)
        })
    }
}