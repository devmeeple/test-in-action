import { BowlingGame } from '../../src/bowling-game/bowling-game';

describe('볼링 게임', () => {
  let game: BowlingGame;

  beforeEach(() => {
    game = new BowlingGame();
  });

  /**
   * 테스트 헬퍼 함수 Extract Method
   * 중복을 제거하는 리팩토링
   */
  const rollMany = (pins: number, frames: number) => {
    for (let i = 0; i < frames; i++) {
      game.roll(pins);
    }
  };

  const rollSpare = () => {
    game.roll(5);
    game.roll(5);
  };

  const rollStrike = () => game.roll(10);

  it('[gutterGame] 핀을 10 프레임동안 한번도 쓰러뜨리지 못하면 0점을 반환한다', () => {
    // given

    // when
    rollMany(0, 20);

    // then
    expect(game.getScore()).toEqual(0);
  });

  it('[allOne] 10 프레임 동안 1개의 핀 씩 쓰러뜨리면 점수 20점을 반환한다', () => {
    // given

    // when
    rollMany(1, 20);

    // then
    expect(game.getScore()).toEqual(20);
  });

  it('[oneSpare] 10 프레임 동안 한 번 스페어처리를 하고 핀을 쓰러트리지 못한 상황', () => {
    // given
    rollSpare();
    game.roll(3);

    // when
    rollMany(17, 0);

    // then
    expect(game.getScore()).toEqual(16);
  });

  it('[oneStrike]', () => {
    // given
    rollStrike();
    game.roll(5);
    game.roll(3);
    rollMany(16, 0);
    // when
    // then
    expect(game.getScore()).toEqual(26);
  });

  it('[perfectGame]', () => {
    // given
    rollMany(10, 10);
    game.roll(10);
    game.roll(10);
    // when
    // then
    expect(game.getScore()).toEqual(300);
  });
});
