enum cmdEnum {
    //
    //stage panel
    // toggleTimer,
    // cs_toggleTimer,
    resetTimer,
    // cs_resetTimer,
    disableTracker,
    updateLeftScore,
    cs_addLeftScore,//1000010
    updateRightScore,
    cs_addRightScore,

    updateLeftBall,
    updateRightBall,
    cs_addLeftBall,
    cs_addRightBall,
    cs_minLeftBall,
    cs_minRightBall,
    cs_updateInitBallCount,

    minLeftScore,
    cs_minLeftScore,//1000010
    minRightScore,
    cs_minRightScore,

    updateLeftFoul,
    cs_addLeftFoul,
    cs_minLeftFoul,
    updateRightFoul,
    cs_addRightFoul,
    cs_minRightFoul,
    // skill        
    cs_updateLeftSkill,
    updateLeftSkill,
    cs_updateRightSkill,
    updateRightSkill,

    stageFadeOut,
    cs_fadeOut,
    playerScore,
    cs_playerScore,
    stageFadeIn,
    cs_stageFadeIn,
    moveStagePanel,
    cs_moveStagePanel,//1000020
    updatePlayer,
    cs_updatePlayer,
    updatePlayerAll,
    cs_changeColor,//红蓝交换
    cs_updatePlayerAll,
    cs_updatePlayerBackNum,
    updatePlayerBackNum,
    fadeInNotice,//小喇叭
    cs_fadeInNotice,
    cs_resetGame,//重置game
    cs_toggleDmk,//弹幕助手
    toggleDmk,
    resetGame,//
    cs_unLimitScore,//不限制比分显示
    unLimitScore,//不限制比分显示
    cs_updatePlayerState,//更新状态
    updatePlayerState,

    cs_setGameIdx,//设置比赛场次
    setGameIdx,
    //-----------------win panel
    fadeInWinPanel,
    cs_fadeInWinPanel,
    fadeOutWinPanel,
    cs_fadeOutWinPanel,
    saveGameRec,
    cs_saveGameRec,
    cs_fadeInFinalPlayer,
    fadeInFinalPlayer,
    cs_fadeOutFinalPlayer,
    fadeOutFinalPlayer,
    //-----------------1v1
    cs_setActPlayer,//参赛名单
    cs_setBracketPlayer,//八强名单
    cs_clearActPlayerGameRec,//清除act 20人战绩
    cs_getBracketPlayerByIdx,//获取球员信息
    cs_refreshClient,//刷新bracket
    refreshClient,
    cs_updateWinScore,//胜出分数
    updateWinScore,//
    cs_updateKingPlayer,
    updateKingPlayer,
    cs_setCursorPlayer,
    setCursorPlayer,
    cs_saveToTotalScore,//本轮积分加到总积分
    cs_setScorePanelVisible,//隐藏记分面板
    setScorePanelVisible,//隐藏记分面板
    cs_autoSaveGameRec,//hupu 记录比赛
    cs_setDelayTime,//
    sc_setDelayTime,//
    //onlinePanel
    cs_showRank,//
    sc_showRank,//
    cs_showBracket,//
    sc_showBracket,//
    cs_hideOnlinePanel,//
    sc_hideOnlinePanel,//
    // rkb panel
    cs_resetTimer,
    sc_resetTimer,
    //koa panel
    cs_startTimer,
    sc_startTimer,
    cs_pauseTimer,
    sc_pauseTimer,
    cs_showPickup,//
    sc_showPickup,//
    //hp
    cs_startGame,
    sc_startGame,
    cs_commitGame,
    sc_commitGame,
    cs_commitTeam,
    sc_commitTeam,
    cs_toggleTimer,
    sc_toggleTimer,
    cs_setBlood,
    sc_setBlood,
    cs_setFoul,
    sc_setFoul,
    cs_setSt,
    sc_setSt,
    //ft bracket
    cs_ftBracketInfo,
    sc_ftBracketInfo,
    //---------------- 5v5 panel
    cs_showHeaderText,
    sc_showHeaderText,
    cs_5v5score,
    sc_5v5score,
    cs_5v5timeup,
    sc_5v5timeup,
    cs_5v5queter,
    sc_5v5queter,
    cs_5v5toggleTimer,
    sc_5v5toggleTimer,
    cs_5v5resetTimer,
    sc_5v5resetTimer,
    cs_5v5setPlayer,
    sc_5v5setPlayer,
    cs_5v5hidePlayer,
    sc_5v5hidePlayer,
    
    //---------------- player panel

    cs_startingLine,
    startingLine,

    cs_hideStartingLine,
    hideStartingLine,

    cs_queryPlayerByPos,
    fadeInPlayerPanel,
    cs_fadeInPlayerPanel,
    fadeOutPlayerPanel,
    cs_fadeOutPlayerPanel,
    movePlayerPanel,
    cs_movePlayerPanel,

    initPanel,
    ///screen
    cs_inScreenScore,
    inScreenScore,
    //// RKB
    cs_attack,
    attack,
    cs_addHealth,
    addHealth,
    fadeInOK,
    cs_combo,
    combo
}
export var CommandId: any = {};
for (var k in cmdEnum) {
    CommandId[k] = k;
}