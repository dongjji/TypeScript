"use strict";
function identity(arg) {
    return arg;
}
let myIdentity = identity;
let output = identity("My string");
let output2 = identity(5);
const names = ["Dong", "Cha"];
const gene = [];
const generic = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done!");
        reject("This is not done!");
    }, 2000);
});
const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done!");
        reject("This is not done");
    }, 2000);
});
newPromise.then((data) => {
    data.split(" ");
});
function merge(objA, objB, num1) {
    console.log(num1);
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: "Dong" }, { age: 25 }, 30);
console.log(mergeObj.age);
function countAndPrint(element) {
    let descriptionText = "Got No Value.";
    if (element.length == 1) {
        descriptionText = "Got 1 element";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements";
    }
    return [element, descriptionText];
}
console.log(countAndPrint(["Hi there!"]));
console.log(countAndPrint([0]));
function extractAndConvert(obj, key) {
    return obj[key];
}
class StorageItem {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new StorageItem();
textStorage.addItem("Dong");
textStorage.addItem("Cha");
textStorage.removeItem("Cha");
console.log(textStorage.getItems());
const numberStorage = new StorageItem();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names2 = ["Dong", "Cha"];
class DataStorage {
    constructor() {
        this.data = [];
    }
    additem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) == -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
//# sourceMappingURL=app.js.map