export class Gugudan {
  calc(dan: number) {
    const result: number[] = [];
    const START = 1;
    const END = 9;
    for (let i = START; i <= END; i++) {
      result.push(dan * i);
    }
    return result;
  }
}