export class Admin {
  private blocked = false;

  /**
   * 사용자의 상태 반환
   */
  isBlocked() {
    return this.blocked;
  }

  /**
   * 사용자 차단
   * 이미 차단된 사용자를 차단할 땐 에러발생
   */
  block() {
    if (this.blocked) {
      throw new Error('이미 차단된 사용자입니다');
    }

    this.blocked = true;
  }

  /**
   * 사용자 차단 해제
   * 차단되지 않은 사용자를 차단 해제할 땐 에러발생
   */
  unblock() {
    if (!this.blocked) {
      throw new Error('차단되지 않은 사용자입니다');
    }

    this.blocked = false;
  }
}
