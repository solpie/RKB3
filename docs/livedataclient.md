## Class: Player
- `playerId` {String} 球员编号ID
- `hupuId` {String} 虎扑ID
- `name` {String} 真实姓名
- `height` {Stirng} 身高
- `weight` {String} 体重
- `score` {Number} 比分
- `foul` {Number}  犯规
- `avatar` {String} 头像url


# websocket
## client event
### Event: 'start'
- `_` {null} 开始计时

### Event: 'push'
- `leftScore` {Number}
- `rightScore` {Number}
- `leftFoul` {Number}
- `righFoul` {Number}

比分 犯规数据提交
### Event: 'commit'
- `_` {null} 提交比赛

### Event: 'fallback'
- `playerId` {Number} 回溯球员，因误操作淘汰的球员重新比赛

### Event: 'drop'
- `playerId` {Number} 弃权,场上队员弃权

## server event
### Event: 'init'

- `leftPlayer` {Player}
- `rightPlayer` {Player}
- `gameIdx` {Number}
- `winScore` {Number} 2球胜 5球胜... ，-1为不限制
- `matchType` {Number} 1车轮战 2大师赛  3决赛 4单淘汰 

初始化记分。重连ws，下一场比赛，回溯比赛推送


### Event: 'pull'
- `leftScore` {Number}
- `rightScore` {Number}
- `leftFoul` {Number}
- `righFoul` {Number}

### Event: 'list'
- `losePlayers` {Array<Player>} 败者组球员列表，看是否淘汰、复活用
- `winPlayers` {Array<Player>} 胜者组球员列表，看是否淘汰、复活用


线上修改比分犯规推送