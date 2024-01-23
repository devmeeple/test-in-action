/**
 * 관리자 차단 여부 확인
 *
 * 차단되지 않은 상태
 * 차단하면 차단된 상태
 * 차단된 상태에서 다시 차단하면 에러
 * 차단된 상태에서 해제하면 다시 풀림
 */

import { Admin } from '../../src/admin-block/admin';

describe('관리자 차단 검증', () => {
  let admin: Admin;

  beforeEach(() => {
    admin = new Admin();
  });

  describe('[차단되지 않은 상태]', () => {
    it('새로 생성된 관리자는 차단된 상태가 아니다', () => {
      // given

      // when
      const isBlocked = admin.isBlocked();

      // then
      expect(isBlocked).toBeFalsy();
    });

    it('관리자를 차단한다', () => {
      // given
      admin.block();

      // when
      const isBlocked = admin.isBlocked();

      // then
      expect(isBlocked).toBeTruthy();
    });

    it('차단을 해제하면 에러가 발생한다', () => {
      expect(() => admin.unblock()).toThrow();
    });
  });

  describe('[차단된 상태]', () => {
    it('다시 차단하면 에러가 발생한다', () => {
      // given
      admin.block();

      expect(() => admin.block()).toThrow(
        new Error('이미 차단된 사용자입니다'),
      );
    });

    it('차단을 해제하면 풀린다', () => {
      // given
      admin.block();

      // when
      admin.unblock();

      // then
      expect(admin.isBlocked()).toBeFalsy();
    });
  });
});
