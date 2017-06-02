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
- `_` {null} 回溯

### Event: 'drop'
- `playerId` {Number} 弃权

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

线上修改比分犯规推送