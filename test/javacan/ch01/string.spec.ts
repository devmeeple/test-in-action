describe('StringTest', () => {
  it('substring 메서드는 문자열의 부분 문자열을 반환한다 [성공]', () => {
    // given
    const str = 'abcde';

    // when
    const sut = str.substring(2, 4);

    // then
    expect(sut).toBe('cd');
  });
});
