class Draw {
  constructor() {
    this.options = ["red", "green", "blue"];
    let _result = [];
    this.drwaResult = () => {
      _result = [];
      for (let i = 0; i <= 2; i++) {
        _result.push(
          this.options[Math.floor(Math.random() * this.options.length)]
        );
      }
      game.render();
    };
    this.getDrawResult = () => _result;
  }
}
