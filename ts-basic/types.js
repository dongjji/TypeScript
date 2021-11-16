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
var person = {
    name: "DONG",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
    role2: Role.ADMIN,
    role3: ["Hello"]
};
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    // console.log(hobby.toUpperCase());
    console.log(hobby);
}
// let favoriteActivities: string[];
// favoriteActivities = ["Sports", "Cooking"];
var favoriteActivities;
favoriteActivities = ["Sports", 1, ["string"]];
function addFunc(n1, n2, resultConversion) {
    var result;
    if (typeof n1 == "number" && typeof n2 == "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return resultConversion == "as-number" ? +result : result.toString();
}
console.log(typeof addFunc("30", "20", "as-number"));
var p1 = { title: "A Book", price: 12.99 };
var u1 = { name: "Max" };
u1 = "Michael";
// void Type
function printResult(num) {
    console.log("printing: ", num);
}
// some function as Type
// let combineValues = Function;
var combineValues;
combineValues = addFunc;
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log("result: ", result);
});
// unknow Type
var userInput;
var userName;
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
var result = generateError("An error occured!", 500);
console.log(result); // No undefined return (error occurred)
