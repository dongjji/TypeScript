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
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
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
) {
  console.log("Method Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
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

// Property, Accessor, Method, Parameter Decorator는 instance가 생성될 때 수행되는 것이 아니라
// class가 선언될 때 수행
