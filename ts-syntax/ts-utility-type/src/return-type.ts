declare function f1(): { a: number; b: string };

type RT0 = ReturnType<() => string>;
// type RT0 = string

type RT1 = ReturnType<(s: string) => void>;
// type RT1 = void

type RT2 = ReturnType<<T>() => T>;
// type RT2 = unknown

type RT3 = ReturnType<<T extends U, U extends number[]>() => T>;
// type RT3 = number[]

type RT4 = ReturnType<typeof f1>;
// type RT4 = {
//     a: number;
//     b: string;
// }

type RT5 = ReturnType<any>;
// type RT5 = any

type RT6 = ReturnType<never>;
// type RT6 = never

type RT7 = ReturnType<string>;
// 'string' 형식이 '(...args: any) => any' 제약 조건을 만족하지 않습니다.
// type RT7 = any

type RT8 = ReturnType<Function>;
// 'Function' 형식이 '(...args: any) => any' 제약 조건을 만족하지 않습니다.
//   'Function' 형식에서 '(...args: any): any' 시그니처에 대한 일치하는 항목을 제공하지 않습니다.
// type RT8 = any
