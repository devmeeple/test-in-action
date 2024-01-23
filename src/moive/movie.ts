export class Movie {
  private sumOfRate: number = 0;
  private countOfRate: number = 0;

  averageRating() {
    return this.countOfRate === 0 ? 0 : this.sumOfRate / this.countOfRate;
  }

  rate(rate: number) {
    this.sumOfRate += rate;
    this.countOfRate++;
  }
}
