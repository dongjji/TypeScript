// function identity(arg: any): any {
//     return arg
// }

function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: <T>(arg: T) => T = identity;

let output = identity("My string");
let output2 = identity<number>(5);

const names = ["Dong", "Cha"]; // string[]
// const names: string[] = ['Dong', 'Cha']

const gene: any[] = [];
const generic: Array<string> = [];
// generic[0].split(" "); // TS will not complain beacuse it is string

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
    reject("This is not done!");
  }, 2000);
});

const newPromise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
    reject("This is not done");
  }, 2000);
});

newPromise.then((data) => {
  data.split(" ");
});

// own Generic

// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

// console.log(merge({ name: "Dong" }, { age: 25 }));
// // {name: 'Dong', age: 25}

// const mergeObj = merge({name: "Dong"}, {age: 25})
// // error will occur
// if ("age" in mergeObj) {
//     mergeObj.age;
// }

function merge<T extends object, U extends object, N extends number>(
  objA: T,
  objB: U,
  num1: N
): T & U {
  console.log(num1);
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "Dong" }, { age: 25 }, 30);
// error will not occur
console.log(mergeObj.age);

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got No Value.";
  if (element.length == 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText];
}

console.log(countAndPrint(["Hi there!"]));
console.log(countAndPrint([0]));
// console.log(countAndPrint(10)); // error becuz no length in number

// keyof constraint
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

class StorageItem<T extends number | string | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new StorageItem<string>();
textStorage.addItem("Dong");
textStorage.addItem("Cha");
textStorage.removeItem("Cha");
console.log(textStorage.getItems());

const numberStorage = new StorageItem<number>();

// const objStorage = new StorageItem<object>();  // error
// objStorage.addItem({ name: "Dong" });
// objStorage.addItem({ name: "Cha" });
// objStorage.addItem({ name: "DDONG" });
// objStorage.removeItem({ name: "Cha" });
// console.log(objStorage);

// // not a good result
// // StorageItem {data: Array(2)}
// // data: Array(2)
// // 0: {name: 'Dong'}
// // 1: {name: 'Cha'}
// // length: 2
// // [[Prototype]]: Array(0)
// // [[Prototype]]: Object

// Generic Utility Types
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
//   return { title, description, completeUntil: date };
// }

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// const names = ['Max', 'Sports']; // up
const names2: Readonly<string[]> = ["Dong", "Cha"];

// Generic vs Union app.ts/93
class DataStorage {
  private data: (string | number | boolean)[] = [];

  additem(item: string | number | boolean) {
    this.data.push(item);
  }

  removeItem(item: string | number | boolean) {
    if (this.data.indexOf(item) == -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}
