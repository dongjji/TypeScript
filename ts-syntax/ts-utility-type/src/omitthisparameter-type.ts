// type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T;

function toHex(this: Number) {
  return this.toString(16);
}

// @ts-ignore
const fiveToHex: OmitThisParameter<typeof toHex> = function (
  _num: Number
): string {
  return "Hello";
};

console.log(fiveToHex());
