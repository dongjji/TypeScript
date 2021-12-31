interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

// @ts-ignore
const obj2: Required<Props> = { a: 5 };

const obj3: Required<Props> = { a: 5, b: "3" };

// @ts-ignore
const obj4: Required<Props> = { a: 5, b: "3", what: "bulgogi" };
