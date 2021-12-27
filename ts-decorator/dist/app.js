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
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1").textContent = this.name;
                }
            }
        };
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
    return {};
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
function Autobind(_target, _methodName, descriptor) {
    console.log(descriptor);
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.message = "This Works!";
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button = document.querySelector("button");
button.addEventListener("click", p.showMessage);
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
let BugReport = class BugReport {
    constructor(t) {
        this.type = "report";
        this.title = t;
    }
};
BugReport = __decorate([
    sealed
], BugReport);
function reportableClassDecorator(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.reportingURL = "http://www...";
        }
    };
}
let BugReport2 = class BugReport2 {
    constructor(t) {
        this.type = "report";
        this.title = t;
    }
};
BugReport2 = __decorate([
    reportableClassDecorator
], BugReport2);
const bug = new BugReport("Needs dark mode");
console.log(bug.title);
console.log(bug.type);
function enumerable(value) {
    return function (_target, _propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
__decorate([
    enumerable(false)
], Greeter.prototype, "greet", null);
function configurable(value) {
    return function (target, propertyKey, descriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        descriptor.configurable = value;
    };
}
class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
}
__decorate([
    configurable(false)
], Point.prototype, "x", null);
__decorate([
    configurable(false)
], Point.prototype, "y", null);
let point = new Point(10, 20);
point.x;
point.y;
const registeredValidators = {};
function Required(target, propertyKey) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propertyKey]: [
            ...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propertyKey]) !== null && _b !== void 0 ? _b : []),
            "required",
        ] });
}
function PositiveNumber(target, propertyKey) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propertyKey]: [
            ...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propertyKey]) !== null && _b !== void 0 ? _b : []),
            "positive",
        ] });
}
function validate(obj) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case "required":
                    isValid = isValid && !!obj[prop];
                    break;
                case "positive":
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector("form");
courseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleInput = document.getElementById("title");
    const priceInput = document.getElementById("price");
    const title = titleInput.value;
    const price = +priceInput.value;
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert("Invalid Input, Please try again");
        return;
    }
    console.log(createdCourse);
});
//# sourceMappingURL=app.js.map