function collatzConjecture(n: any) {
  n = parseInt(n);
  let a = [n];
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
