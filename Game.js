// link do gry: https://websamuraj.pl/examples/js/gra/

class Game {
  constructor(he) {
    this.he = he;
    this.bid = document.querySelector("#bid");
    this.colors = [...document.querySelectorAll(".color")];
    this.walletContainer = document.querySelector(".wallet");
    // this.res = document.querySelector(".result");
    // this.howMany = document.querySelector(".number");
    // this.win = document.querySelector(".win");
    // this.loss = document.querySelector(".loss");
    this.scoreBoard = [...document.querySelectorAll(".score span")];
  }

  startGame() {
    if (wallet.checkCanPlay(this.bid.value)) {
      wallet.setMoney(wallet.getMoney() - this.bid.value);
      draw.drwaResult();
      const checkWin = Result.checkWin();
      if (checkWin) {
        Result.moneyWonInGame(this.bid.value);
      }
    } else alert("Za mało monet");
  }

  render() {
    const tab = draw.getDrawResult();
    const scores = stats.showStats();
    this.walletContainer.textContent = wallet.getMoney();
    this.colors.forEach((color, i) => {
      this.colors[i].style.backgroundColor = tab[i];
    });

    this.scoreBoard.forEach((item, i) => {
      this.scoreBoard[i].textContent = scores[i];
    });
  }
}
