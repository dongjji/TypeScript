function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    // use _ if dont need to use
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering Template");
        const hookElement = document.getElementById(hookId);
        if (hookElement) {
          hookElement.innerHTML = template;
          hookElement.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@Logger2("Logging")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Dong";

  constructor() {
    console.log("Creating person object");
  }
}

const pers = new Person();

console.log(pers);

function Logger2(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger2("Logging - Person")
class Person2 {
  name = "Max";

  constructor() {
    console.log("Creating person object");
  }
}

// Property Decorator
function Log(target: any, propertyName: string | symbol) {
  console.log("Property Decorator!");
  console.log(target, propertyName);
}

// Accessor Decorator
function Log2(target: any, name: string, description: PropertyDescriptor) {
  console.log("Accessor Decorator!");
  console.log(target);
  console.log(name);
  console.log(description);
}

// Method Decorator
function Log3(
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
// Parameter Decorator
function Log4(target: any, name: string | symbol, position: number) {
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(price: number) {
    if (price > 0) {
      this._price = price;
    } else {
      throw new Error("Invalid Price - Should be positive");
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

// decorator will not execute
const p1 = new Product("Book", 20);
const p2 = new Product("Book2", 30);

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
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
  message = "This works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage);
