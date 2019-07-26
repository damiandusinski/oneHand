class Stats {
  constructor() {
    this.stats = [];
    this.addStats = newStatsArr => {
      this.stats = newStatsArr;
    };
    this.showStats = () => this.stats;
  }
}
