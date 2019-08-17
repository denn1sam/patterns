const AMX_50B_Module = (function() {
  let battlesCount = 3;

  const getBattlesCount = () => battlesCount;

  const goToNewBattle = () => { battlesCount++ };

  return {
    getBattlesCount,
    goToNewBattle
  }
})();
