POST http://test.liangle.com/manage/create/game/jifen
    Content - Type: application / json
data:

    {
        rank_idx: 1, //从2018 10月开始1 递增
        [{
            rank: 1
            player_id: 1
        }]
    }

response: {
    code: 1, //1成功 2 不存在 player_id
    param: "player_id"
}