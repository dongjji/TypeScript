"use strict";
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
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
})(Role || (Role = {}));
// object
const person = {
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
let favoriteActivities;
favoriteActivities = ["Sports", 1, ["string"]];
function addFunc(n1, n2, resultConversion) {
    let result;
    if (typeof n1 == "number" && typeof n2 == "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return resultConversion == "as-number" ? +result : result.toString();
}
console.log(typeof addFunc("30", "20", "as-number"));
const p1 = { title: "A Book", price: 12.99 };
let u1 = { name: "Max" };
u1 = "Michael";
// void Type
function printResult(num) {
    console.log("printing: ", num);
}
// some function as Type
// let combineValues = Function;
let combineValues;
// combineValues = addFunc;
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log("result: ", result);
});
// unknow Type
let userInput;
let userName;
userInput = 5;
userInput = "DONG";
// userName = userInput // error
if (typeof userInput === "string") {
    userName = userInput;
}
// never Type : not void
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const result = generateError("An error occured!", 500);
console.log(result); // No undefined return (error occurred)
//# sourceMappingURL=types.js.map