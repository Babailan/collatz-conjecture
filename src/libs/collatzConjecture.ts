function collatzConjecture(n: number) {
  let a = [];
  while (true) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = n * 3 + 1;
    }
    a.push(n);
    if (n === 1) {
      return a;
    }
  }
}

export default collatzConjecture;
