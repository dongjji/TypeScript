"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(constructor) {
    console.log("Logging...1");
    console.log(constructor);
}
let Person = class Person {
    constructor() {
        this.name = "Dong";
        console.log("Creating person object1");
    }
};
Person = __decorate([
    Logger
], Person);
function Logger2() {
    return function (constructor) {
        console.log("Logging...2");
        console.log(constructor);
    };
}
let Person2 = class Person2 {
    constructor() {
        this.name = "Dong";
        console.log("Creating person object2");
    }
};
Person2 = __decorate([
    Logger2()
], Person2);
let Person3 = class Person3 {
    constructor() {
        this.name = "Dong";
        console.log("Creating person object3");
    }
};
Person3 = __decorate([
    Logger,
    Logger2()
], Person3);
function WithTemplate(template, hookId) {
    return function (constructor) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1").textContent = p.name;
        }
    };
}
let Person4 = class Person4 {
    constructor() {
        this.name = "Dong";
        console.log("Creating person object3");
    }
};
Person4 = __decorate([
    WithTemplate("<h1>My Person Object</h1>", "app")
], Person4);
const person4 = new Person4();
function Log(target, propertyName) {
    console.log("Property Decorator");
    console.log(target);
    console.log(propertyName);
}
function Log2(target, name, descriptor) {
    console.log("Accessor Decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log("Method Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log("Parameter Decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    set price(value) {
        if (value > 0) {
            this._price = value;
        }
        else {
            throw new Error("price should be positive");
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
const book1 = new Product("a book", 19);
const book2 = new Product("a book2", 20);
//# sourceMappingURL=app.js.map