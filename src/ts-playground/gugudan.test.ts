import { Gugudan } from './gugudan';

describe('구구단', () => {
  let gugudan: Gugudan;

  beforeEach(() => {
    gugudan = new Gugudan();
  });

  it.each([
    [2, [2, 4, 6, 8, 10, 12, 14, 16, 18]],
    [3, [3, 6, 9, 12, 15, 18, 21, 24, 27]],
    [9, [9, 18, 27, 36, 45, 54, 63, 72, 81]]
  ])('%d단', (dan, expected) => {
    // when
    const actual = gugudan.calc(dan);

    // then
    expect(actual).toEqual(expected);
  });
});