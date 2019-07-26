class Result {
  constructor() {}
  static checkWin() {
    let x = draw.getDrawResult();
    if (
      (x[0] === "blue" && x[1] === "blue" && x[2] === "blue") ||
      (x[0] === "red" && x[1] === "red" && x[2] === "red") ||
      (x[0] === "green" && x[1] === "green" && x[2] === "green")
    ) {
      console.log(x);
      console.log("win");
    } else if (x[0] !== x[1] && x[1] !== x[2] && x[0] !== x[2]) {
      console.log(x);
      console.log("win");
    } else {
      console.log(x);
      console.log("loss");
    }
  }
  static moneyWonInGame() {}
}
