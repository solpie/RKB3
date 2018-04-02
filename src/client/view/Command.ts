export const CommandId = {
    resetTimer: '',
    // cs_resetTimer:'',
    disableTracker: '',
    updateLeftScore: '',
    cs_addLeftScore: '',//1000010
    updateRightScore: '',
    cs_addRightScore: '',


    minLeftScore: '',
    cs_minLeftScore: '',//1000010
    minRightScore: '',
    cs_minRightScore: '',

    updateLeftFoul: '',
    cs_addLeftFoul: '',
    cs_minLeftFoul: '',
    updateRightFoul: '',
    cs_addRightFoul: '',
    cs_minRightFoul: '',
    // skill        
    cs_updateLeftSkill: '',
    updateLeftSkill: '',
    cs_updateRightSkill: '',
    updateRightSkill: '',


    cs_setGameIdx: '',//设置比赛场次
    setGameIdx: '',
    //-----------------win panel
    fadeInWinPanel: '',
    cs_fadeInWinPanel: '',
    fadeOutWinPanel: '',
    cs_fadeOutWinPanel: '',
    saveGameRec: '',
    cs_saveGameRec: '',
    cs_fadeInFinalPlayer: '',
    fadeInFinalPlayer: '',
    cs_fadeOutFinalPlayer: '',
    fadeOutFinalPlayer: '',
    //-----------------1v1
    cs_setActPlayer: '',//参赛名单
    cs_setBracketPlayer: '',//八强名单
    cs_clearActPlayerGameRec: '',//清除act 20人战绩
    cs_getBracketPlayerByIdx: '',//获取球员信息
    cs_refreshClient: '',//刷新bracket
    refreshClient: '',
    cs_updateWinScore: '',//胜出分数
    updateWinScore: '',//
    cs_updateKingPlayer: '',
    updateKingPlayer: '',
    cs_setCursorPlayer: '',
    setCursorPlayer: '',
    cs_saveToTotalScore: '',//本轮积分加到总积分
    cs_setScorePanelVisible: '',//隐藏记分面板
    setScorePanelVisible: '',//隐藏记分面板
    cs_autoSaveGameRec: '',//hupu 记录比赛
    cs_setDelayTime: '',//
    sc_setDelayTime: '',//
    // cs_setClientDelayTime: '',//
    // sc_setClientDelayTime: '',//
    //onlinePanel
    cs_showRank: '',//
    sc_showRank: '',//
    cs_showBracket: '',//
    sc_showBracket: '',//
    cs_showGroup: '',//
    sc_showGroup: '',//
    cs_hideOnlinePanel: '',//
    sc_hideOnlinePanel: '',//
    //preround
    cs_setPreRoundPosition: '',//
    sc_setPreRoundPosition: '',//
    cs_togglePreRoundTheme: '',//
    sc_togglePreRoundTheme: '',//
    cs_setBdVisible: '',//
    sc_setBdVisible: '',//
    //fx
    cs_setFxPoint: '',//
    sc_setFxPoint: '',//
    cs_playScoreFx: '',//
    sc_playScoreFx: '',//
    // rkb panel
    cs_resetTimer: '',
    sc_resetTimer: '',
    cs_setTimer: '',
    sc_setTimer: '',
    //koa panel
    cs_startTimer: '',
    sc_startTimer: '',
    cs_pauseTimer: '',
    sc_pauseTimer: '',
    cs_showPickup: '',//
    sc_showPickup: '',//
    //hp
    cs_startGame: '',
    sc_startGame: '',
    cs_commitGame: '',
    sc_commitGame: '',
    cs_commitTeam: '',
    sc_commitTeam: '',
    cs_toggleTimer: '',
    sc_toggleTimer: '',
    cs_setBlood: '',
    sc_setBlood: '',
    cs_setFoul: '',
    sc_setFoul: '',
    cs_setSt: '',
    sc_setSt: '',
    cs_hideSt: '',
    sc_hideSt: '',
    //ft bracket
    cs_ftBracketInfo: '',
    sc_ftBracketInfo: '',
    //---------------- 5v5 panel
    cs_showHeaderText: '',
    sc_showHeaderText: '',
    cs_5v5score: '',
    sc_5v5score: '',
    cs_5v5timeup: '',
    sc_5v5timeup: '',
    cs_5v5queter: '',
    sc_5v5queter: '',
    cs_5v5toggleTimer: '',
    sc_5v5toggleTimer: '',
    cs_5v5resetTimer: '',
    sc_5v5resetTimer: '',
    cs_5v5setPlayer: '',
    sc_5v5setPlayer: '',
    cs_5v5hidePlayer: '',
    sc_5v5hidePlayer: '',
    cs_5v5setTimeString: '',
    sc_5v5setTimeString: '',

    //-- online panel
    cs_toggleTheme: '',
    sc_toggleTheme: '',
    cs_showNotice: '',
    sc_showNotice: '',
    cs_showChampion: '',
    sc_showChampion: '',
    //实力榜
    cs_showRanking: '',
    sc_showRanking: '',
    cs_toggleScorePanel: '',
    sc_toggleScorePanel: '',
    cs_toggleChampionPanel: '',
    sc_toggleChampionPanel: '',
    initPanel: '',
    //top 5
    cs_showTop5: '',
    sc_showTop5: '',
    ///screen
    cs_inScreenScore: '',
    inScreenScore: '',
    //// RKB
    cs_attack: '',
    attack: '',
    cs_addHealth: '',
    addHealth: '',
    fadeInOK: '',
    cs_combo: '',
    combo: ''
}
for (var k in CommandId) {
    CommandId[k] = k;
}