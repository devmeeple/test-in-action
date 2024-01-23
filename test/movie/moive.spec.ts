import { Movie } from '../../src/moive/movie';

describe('MovieTest(movie)', () => {
  let movie: Movie;

  beforeEach(() => {
    movie = new Movie();
  });

  it('새로 생성된 영화의 평점은 0점을 반환한다', () => {
    // given

    // when + then
    expect(movie.averageRating()).toEqual(0);
  });

  it('영화에 한 번 평점 1점을 부여하면 1을 반환한다', () => {
    // given

    // when
    movie.rate(1);

    // when + then
    expect(movie.averageRating()).toEqual(1);
  });

  it('영화에 두 번 평점을 3, 5 점 부여하면 3을 반환한다', () => {
    // when
    movie.rate(3);
    movie.rate(5);

    // then
    expect(movie.averageRating()).toEqual(4);
  });
});
