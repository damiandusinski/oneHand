class Result {
  constructor() {}
  static checkWin() {
    let flag = false;
    let x = draw.getDrawResult();
    if (
      (x[0] === "blue" && x[1] === "blue" && x[2] === "blue") ||
      (x[0] === "red" && x[1] === "red" && x[2] === "red") ||
      (x[0] === "green" && x[1] === "green" && x[2] === "green")
    ) {
      flag = true;
      stats.addStats("Wygrana", 1, 1, 0);
      return flag;
    } else if (x[0] !== x[1] && x[1] !== x[2] && x[0] !== x[2]) {
      flag = true;
      stats.addStats("Wygrana", 1, 1, 0);
      return flag;
    } else {
      flag = false;
      stats.addStats("Przegrana", 1, 0, 1);
      return flag;
    }
  }
  static moneyWonInGame(money) {
    const moneyInWallet = wallet.getMoney();
    const winMonye = money * 3;
    wallet.setMoney(moneyInWallet + winMonye);
  }
}
