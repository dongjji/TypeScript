// const person: {
//   name: string;
//   age: number;
//   hobbies: Array<string>;
// } = {
//   name: "DONG",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
// };

// object, array, tuple, enum
// enum
enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = 200,
}

// object
const person: {
  name: string;
  age: number;
  // array
  hobbies: string[];
  role: [number, string]; // tuple
  role2: Role.ADMIN;
  role3: any;
} = {
  name: "DONG",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
  role2: Role.ADMIN,
  role3: ["Hello"],
};
console.log(person.name);

for (const hobby of person.hobbies) {
  // console.log(hobby.toUpperCase());
  console.log(hobby);
}

// let favoriteActivities: string[];
// favoriteActivities = ["Sports", "Cooking"];
let favoriteActivities: any[];
favoriteActivities = ["Sports", 1, ["string"]];

// Union Types
// Literal Type
// Type Aliases
type Addable = number | string;
function addFunc(
  n1: Addable,
  n2: Addable,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (typeof n1 == "number" && typeof n2 == "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return resultConversion == "as-number" ? +result : result.toString();
}

console.log(typeof addFunc("30", "20", "as-number"));

// Type Aliase & Custom Type
// type Addable = number;
type Product = { title: string; price: number };
const p1: Product = { title: "A Book", price: 12.99 };

type User = { name: string } | string;
let u1: User = { name: "Max" };
u1 = "Michael";

// void Type
function printResult(num: number): void {
  console.log("printing: ", num);
}

// some function as Type
// let combineValues = Function;
let combineValues: (a: number, b: number) => number;
combineValues = addFunc;

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log("result: ", result);
});

// unknow Type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "DONG";

// userName = userInput // error
if (typeof userInput === "string") {
  userName = userInput;
}

// never Type : not void
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError("An error occured!", 500);
console.log(result); // No undefined return (error occurred)
