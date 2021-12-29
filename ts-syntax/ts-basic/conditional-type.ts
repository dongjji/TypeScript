interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;

// type Example1 = number

type Example2 = RegExp extends Animal ? number : string;

// type Example2 = string

interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

// function createLabel(id: number): IdLabel;
// function createLabel(name: string): NameLabel;
// function createLabel(nameOrId: string | number): IdLabel | NameLabel;
// function createLabel(nameOrId: string | number): IdLabel | NameLabel {
//   throw "unimplemented";
// }

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(_idOrName: T): NameOrId<T> {
  throw "unimplemented";
}

let a = createLabel("typescript");

//   let a: NameLabel

let b = createLabel(2.8);

//   let b: IdLabel

let c = createLabel(Math.random() ? "hello" : 42);
//   let c: NameLabel | IdLabel

type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

interface Email {
  message: string;
}

interface Dog {
  bark(): void;
}

type EmailMessageContents = MessageOf<Email>;

// type EmailMessageContents = string

type DogMessageContents = MessageOf<Dog>;

// type DogMessageContents = never

type Flatten<T> = T extends any[] ? T[number] : T;

// Extracts out the element type.
type Str = Flatten<string[]>;

// type Str = string

// Leaves the type alone.
type Num = Flatten<number>;

// type Num = number

type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;

type Num2 = GetReturnType<() => number>;
// type Num = number

type Str2 = GetReturnType<(x: string) => string>;
// type Str2 = string

type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;
// type Bools2 = boolean[]

declare function stringOrNum(x: string): number;
declare function stringOrNum(x: number): string;
declare function stringOrNum(x: string | number): string | number;

type T1 = ReturnType<typeof stringOrNum>;

type ToArray<Type> = Type extends any ? Type[] : never;

type StrArrOrNumArr = ToArray<string | number>;

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;

type StrArrOrNumArr2 = ToArrayNonDist<string | number>;
