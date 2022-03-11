// 함수이름<타입변수>(매개변수)
export const arrayLength = <T>(array: T[]): number => array.length;

export function arrayLengt2<T>(array: T[]): number {
  return array.length;
}

const f = <T>(cb: (arg: T, i?: number) => number): void => {};

// 선언형 형태로 배열 primitive 함수 만들기
export const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : [];

const makeArray = (num: number) => {
  return Array.from({ length: num }, (v, i) => i);
};

export const fold = <T>(
  array: T[],
  callback: (result: T, val: T) => T,
  initValue: T
) => {
  let result: T = initValue;
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    result = callback(result, value);
  }
  return result;
};

export const filter = <T>(
  array: T[],
  callback: (value: T, index?: number) => boolean
): T[] => {
  let result: T[] = [];
  for (let index: number = 0; index < array.length; index++) {
    const value = array[index];
    if (callback(value, index)) {
      result = [...result, value];
    }
  }
  return result;
};

export const map = <T, Q>(
  array: T[],
  callback: (value: T, index?: number) => Q
): Q[] => {
  let result: Q[] = [];
  for (let index: number = 0; index < array.length; index++) {
    const value = array[index];
    result = [...result, callback(value, index)];
  }
  return result;
};

// 순수함수를 쉽게 만들기 위해 매개변수 타입에 readonly 사용할 수 있음
function forcePure(array: readonly number[]) {
  // array.push(0)
  // 'readonly number[]' 형식에 'push' 속성이 없습니다.
}

export const pureDelete = <T>(
  array: readonly T[],
  cb: (val: T, index?: number) => boolean
): T[] => array.filter((val, index) => cb(val, index) == false);

// 가변 인수
export const mergeArray = <T>(...arrays: readonly T[][]): T[] => {
  let result: T[] = [];
  for (let index = 0; index < arrays.length; index++) {
    const array: T[] = arrays[index];
    result = [...result, ...array];
  }
  return result;
};
