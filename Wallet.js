class Wallet {
  constructor() {
    let _money = 100;
    this.getMoney = () => _money;
    this.setMoney = money => {
      _money = money;
    };

    this.checkCanPlay = bet => {
      if (bet > _money) {
        return false;
      } else return true;
    };
  }
}
