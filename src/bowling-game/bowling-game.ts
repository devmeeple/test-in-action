export class BowlingGame {
  // 길이를 명시적으로 선언함 길이가 21인 배열을 선언하고 임의의 값을 할당
  private rolls: number[] = new Array(21).fill(0);
  private currentRoll: number = 0;

  /**
   * 볼링 공을 굴린다
   * @param pins 쓰러트린 핀 수
   */
  roll(pins: number) {
    this.rolls[this.currentRoll++] = pins;
  }

  getScore() {
    let score = 0;
    let firstRollInFrame = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this.isSpare(firstRollInFrame)) {
        score += 10 + this.nextBallsForSpare(firstRollInFrame);
        firstRollInFrame += 2;
      } else if (this.isStrike(firstRollInFrame)) {
        score += 10 + this.nextBallsForStrike(firstRollInFrame);
        firstRollInFrame += 1;
      } else {
        score += this.nextBallsForFrame(firstRollInFrame);
        firstRollInFrame += 2;
      }
    }
    return score;
  }

  private nextBallsForFrame(firstRollInFrame: number) {
    return this.rolls[firstRollInFrame] + this.rolls[firstRollInFrame + 1];
  }

  private nextBallsForStrike(firstRollInFrame: number) {
    return this.rolls[firstRollInFrame + 1] + this.rolls[firstRollInFrame + 2];
  }

  private nextBallsForSpare(firstRollInFrame: number) {
    return this.rolls[firstRollInFrame + 2];
  }

  private isStrike(firstRollInFrame: number) {
    return this.rolls[firstRollInFrame] === 10;
  }

  private isSpare(firstRollInFrame: number) {
    return (
      this.rolls[firstRollInFrame] + this.rolls[firstRollInFrame + 1] === 10
    );
  }
}
