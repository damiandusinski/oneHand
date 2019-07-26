const btn = document.querySelector("#start");

const game = new Game();
const wallet = new Wallet();
const stats = new Stats();
const draw = new Draw();

btn.addEventListener("click", game.startGame);
