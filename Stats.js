class Stats {
  constructor() {
    this.stats = ["", 0, 0, 0];
    this.addStats = (howWin, h, w, l) => {
      this.stats[0] = howWin;
      this.stats[1] += h;
      this.stats[2] += w;
      this.stats[3] += l;
    };
    this.showStats = () => this.stats;
  }
}
