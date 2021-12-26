function Logger(constructor: Function) {
  console.log("Logging...1");
  console.log(constructor);
}

@Logger
class Person {
  name = "Dong";

  constructor() {
    console.log("Creating person object1");
  }
}

// Decorator Factory
function Logger2() {
  return function (constructor: Function) {
    console.log("Logging...2");
    console.log(constructor);
  };
}

@Logger2()
class Person2 {
  name = "Dong";

  constructor() {
    console.log("Creating person object2");
  }
}

@Logger
@Logger2()
class Person3 {
  name = "Dong";

  constructor() {
    console.log("Creating person object3");
  }
}

// const person = new Person();
// const person2 = new Person2();
// const person3 = new Person3();

// console.log(person);

function WithTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super(); // save original
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@WithTemplate("<h1>My Person Object</h1>", "app")
class Person4 {
  name = "Dong";

  constructor() {
    console.log("Creating person object3");
  }
}

const person4 = new Person4();

/////////////////////////////////////
// Property Decorator
function Log(target: any, propertyName: string | Symbol) {
  console.log("Property Decorator");
  console.log(target);
  console.log(propertyName);
}

// Accessor Decorator
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor Decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// Method Decorator
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  console.log("Method Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
  return {};
}

// Parameter Decorator
function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter Decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}
class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("price should be positive");
    }
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const book1 = new Product("a book", 19);
const book2 = new Product("a book2", 20);

function Autobind(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log(descriptor);
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
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
  message = "This Works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button")!;
// button.addEventListener("click", p.showMessage.bind(p));
button.addEventListener("click", p.showMessage);

// Property, Accessor, Method, Parameter Decorator는 instance가 생성될 때 수행되는 것이 아니라
// class가 선언될 때 수행

function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
@sealed
class BugReport {
  type = "report";
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    reportingURL = "http://www...";
  };
}

@reportableClassDecorator
class BugReport2 {
  type = "report";
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const bug = new BugReport("Needs dark mode");
console.log(bug.title); // Prints "Needs dark mode"
console.log(bug.type); // Prints "report"

// Note that the decorator _does not_ change the TypeScript type
// and so the new property `reportingURL` is not known
// to the type system:
// bug.reportingURL; // error : 'BugReport' 형식에 'reportingURL' 속성이 없습니다.

function enumerable(value: boolean) {
  return function (
    _target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  @enumerable(false)
  greet() {
    return "Hello, " + this.greeting;
  }
}
