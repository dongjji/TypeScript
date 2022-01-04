// type ThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any ? U : unknown;

function toBinary(this: number) {
  return this.toString(2);
}

function numberToString(n: ThisParameterType<typeof toBinary>) {
  return toBinary.apply(n);
}

numberToString(10);
