export class PlayerInfo{
    id: number
    name: string
    avatar: string
    weight: number
    height: number
    groupId: number
    level: number
    
    score:number
    winCount: number = 0
    loseCount: number = 0
    //
    beatPlayerArr = []
    //净胜分
    beatScore = []
} 