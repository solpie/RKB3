import { get_champion_player, post_champion_rec, post_champion_rank5 } from '../../utils/HupuAPI';
import { mapToArr, arrToMap } from '../../utils/JsFunc';
import { post_rank5 } from './ChampionPoster';
export class ChampionPoster {
    game_id = 765
    player_map: any
    updatePlayerList() {
        get_champion_player(this.game_id, player_arr => {
            this.player_map = arrToMap(player_arr, 'player_id')
            console.log('get player list', this.player_map)
        })
    }

    postRec(rec) {
        let player_id_arr = rec.playerId
        let score_arr = rec.score
        let foul_arr = [0, 0]//todo
        let left_player = this.player_map[player_id_arr[0]]
        let right_player = this.player_map[player_id_arr[1]]
        let result_flag = 1;

        if (Number(score_arr[0]) > Number(score_arr[1])) {
            result_flag = 2
        }
        else {
            result_flag = 1
        }
        let data = {
            'action': "match", data: {
                "game_id": this.game_id,
                "left_player_id": left_player.player_id,
                "left_puid": left_player.puid,
                "left_score": score_arr[0],

                "right_player_id": right_player.player_id,
                "right_puid": right_player.puid,
                "right_score": score_arr[1],

                "left_foul": foul_arr[0],
                "right_foul": foul_arr[1],
                "num": rec.gameIdx,
                "game_start": 1478245971,
                "game_end": 1478245975,
                "status": result_flag
            }
        }
        post_champion_rec(data, res => {
            console.log('postChampionRec', res)
        })
        // (注:
        //     game_id 路人王轮次id
        //     left_puid 左边球员
        //     left_player_id 当前左边球员id
        //     right_puid  左边球员
        //     right_player_id 右边球员球员id
        //     left_score 左边得分
        //     right_score  右边得分
        //     left_foul  左边犯规
        //     right_foul 右边犯规',
        //     num 当前第几场
        //     game_start  当前轮次比赛开始时间
        //     game_end  当前轮次比赛结束时间
        //     status 当前轮次比赛结果 1:红袖标胜 2:蓝袖标胜 3:红袖标弃权 4:蓝袖标弃权)

    }
    post_rank5(player_id, callback) {
        // export function post_rank5(gameId, player_id, callback) {
        // let url_post = 'http://test.liangle.com/api/passerbyking/champion/game/match'
        // let data = { game_id: gameId, player_id: player_id }
        // // $post(proxy(url_post), data, callback)
        // }

        post_champion_rank5({
            action: '4choose1',
            data: {
                game_id: this.game_id,
                player_id: player_id
            }
        }, _ => {
            console.log(_)
            callback()
        })
    }
}