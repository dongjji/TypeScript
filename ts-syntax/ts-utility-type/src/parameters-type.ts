////////////////////////////////////////
// Parameters<Type>
declare function f1(arg: { a: number; b: string }): void;

type PT0 = Parameters<() => string>;
// type PT0 = []

type PT1 = Parameters<(s: string) => void>;
// type PT1 = [s: string]

type PT2 = Parameters<<T>(arg: T) => T>;
// type PT2 = [arg: unknown]

type PT3 = Parameters<typeof f1>;
// type PT3 = [arg: {
//     a: number;
//     b: string;
// }

type PT4 = Parameters<any>;
// type PT4 = unknown[]

type PT5 = Parameters<never>;
// type PT5 = never

// @ts-ignore
type PT6 = Parameters<string>;
// 'string' 형식이 '(...args: any) => any' 제약 조건을 만족하지 않습니다.
// type T6 = never

// @ts-ignore
type PT7 = Parameters<Function>;
// 'Function' 형식이 '(...args: any) => any' 제약 조건을 만족하지 않습니다.
// 'Function' 형식에서 '(...args: any): any' 시그니처에 대한 일치하는 항목을 제공하지 않습니다.
// type T7 = never

////////////////////////////////////////
// ConstructorParameters<Type>
type CT0 = ConstructorParameters<ErrorConstructor>;
// type CT0 = [message?: string]

type CT1 = ConstructorParameters<FunctionConstructor>;
// type CT1 = string[]

type CT2 = ConstructorParameters<RegExpConstructor>;
// type CT2 = [pattern: string | RegExp, flags?: string]

type CT3 = ConstructorParameters<any>;
// type CT3 = unknown[]

// @ts-ignore
type CT4 = ConstructorParameters<Function>;
// 'Function' 형식이 'abstract new (...args: any) => any' 제약 조건을 만족하지 않습니다.
// 'Function' 형식에서 'new (...args: any): any' 시그니처에 대한 일치하는 항목을 제공하지 않습니다.
// type CT4 = never

type CT5 = ConstructorParameters<never>;
// type CT5 = never
