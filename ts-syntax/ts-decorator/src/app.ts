// function Logger(constructor: Function) {
//   console.log("Logging...1");
//   console.log(constructor);
// }

// @Logger
// class Person {
//   name = "Dong";

//   constructor() {
//     console.log("Creating person object1");
//   }
// }

// // Decorator Factory
// function Logger2() {
//   return function (constructor: Function) {
//     console.log("Logging...2");
//     console.log(constructor);
//   };
// }

// @Logger2()
// class Person2 {
//   name = "Dong";

//   constructor() {
//     console.log("Creating person object2");
//   }
// }

// @Logger
// @Logger2()
// class Person3 {
//   name = "Dong";

//   constructor() {
//     console.log("Creating person object3");
//   }
// }

// // const person = new Person();
// // const person2 = new Person2();
// // const person3 = new Person3();

// // console.log(person);

// function WithTemplate(template: string, hookId: string) {
//   return function <T extends { new (...args: any[]): { name: string } }>(
//     originalConstructor: T
//   ) {
//     return class extends originalConstructor {
//       constructor(..._: any[]) {
//         super(); // save original
//         const hookEl = document.getElementById(hookId);
//         if (hookEl) {
//           hookEl.innerHTML = template;
//           hookEl.querySelector("h1")!.textContent = this.name;
//         }
//       }
//     };
//   };
// }

// @WithTemplate("<h1>My Person Object</h1>", "app")
// class Person4 {
//   name = "Dong";

//   constructor() {
//     console.log("Creating person object3");
//   }
// }

// const person4 = new Person4();

// /////////////////////////////////////
// // Property Decorator
// function Log(target: any, propertyName: string | Symbol) {
//   console.log("Property Decorator");
//   console.log(target);
//   console.log(propertyName);
// }

// // Accessor Decorator
// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log("Accessor Decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// // Method Decorator
// function Log3(
//   target: any,
//   name: string | Symbol,
//   descriptor: PropertyDescriptor
// ): PropertyDescriptor {
//   console.log("Method Decorator");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
//   return {};
// }

// // Parameter Decorator
// function Log4(target: any, name: string | Symbol, position: number) {
//   console.log("Parameter Decorator");
//   console.log(target);
//   console.log(name);
//   console.log(position);
// }
// class Product {
//   @Log
//   title: string;
//   private _price: number;

//   @Log2
//   set price(value: number) {
//     if (value > 0) {
//       this._price = value;
//     } else {
//       throw new Error("price should be positive");
//     }
//   }

//   constructor(title: string, price: number) {
//     this.title = title;
//     this._price = price;
//   }

//   @Log3
//   getPriceWithTax(@Log4 tax: number) {
//     return this._price * (1 + tax);
//   }
// }

// const book1 = new Product("a book", 19);
// const book2 = new Product("a book2", 20);

// function Autobind(
//   _target: any,
//   _methodName: string,
//   descriptor: PropertyDescriptor
// ) {
//   console.log(descriptor);
//   const originalMethod = descriptor.value;
//   const adjDescriptor: PropertyDescriptor = {
//     configurable: true,
//     enumerable: false,
//     get() {
//       const boundFn = originalMethod.bind(this);
//       return boundFn;
//     },
//   };
//   return adjDescriptor;
// }
// class Printer {
//   message = "This Works!";

//   @Autobind
//   showMessage() {
//     console.log(this.message);
//   }
// }

// const p = new Printer();

// const button = document.querySelector("button")!;
// // button.addEventListener("click", p.showMessage.bind(p));
// button.addEventListener("click", p.showMessage);

// // Property, Accessor, Method, Parameter Decorator는 instance가 생성될 때 수행되는 것이 아니라
// // class가 선언될 때 수행

// function sealed(constructor: Function) {
//   Object.seal(constructor);
//   Object.seal(constructor.prototype);
// }
// @sealed
// class BugReport {
//   type = "report";
//   title: string;

//   constructor(t: string) {
//     this.title = t;
//   }
// }

// function reportableClassDecorator<T extends { new (...args: any[]): {} }>(
//   constructor: T
// ) {
//   return class extends constructor {
//     reportingURL = "http://www...";
//   };
// }

// @reportableClassDecorator
// class BugReport2 {
//   type = "report";
//   title: string;

//   constructor(t: string) {
//     this.title = t;
//   }
// }

// const bug = new BugReport("Needs dark mode");
// const bug2 = new BugReport2("Needs dark mode");
// console.log(bug.title); // Prints "Needs dark mode"
// console.log(bug.type); // Prints "report"
// console.log(bug2);

// // Note that the decorator _does not_ change the TypeScript type
// // and so the new property `reportingURL` is not known
// // to the type system:
// // bug.reportingURL; // error : 'BugReport' 형식에 'reportingURL' 속성이 없습니다.

// ////////////////////////////////////////////////////////////////
// // Method Decorator
// function enumerable(value: boolean) {
//   return function (
//     _target: any,
//     _propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     descriptor.enumerable = value;
//   };
// }

// class Greeter {
//   greeting: string;
//   constructor(message: string) {
//     this.greeting = message;
//   }

//   @enumerable(false)
//   greet() {
//     return "Hello, " + this.greeting;
//   }
// }

// ////////////////////////////////////////////////////////////////
// // Accessor Decorator
// function configurable(value: boolean) {
//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     console.log(target);
//     console.log(propertyKey);
//     console.log(descriptor);
//     descriptor.configurable = value;
//   };
// }

// class Point {
//   private _x: number;
//   private _y: number;
//   constructor(x: number, y: number) {
//     this._x = x;
//     this._y = y;
//   }

//   @configurable(false)
//   get x() {
//     return this._x;
//   }

//   @configurable(false)
//   get y() {
//     return this._y;
//   }
// }

// let point = new Point(10, 20);
// point.x;
// point.y;

// ////////////////////////////////////////////////////////////////
// // Validation with Decorator
// interface ValidatorConfig {
//   [property: string]: {
//     [validatableProperty: string]: string[];
//   };
// }

// const registeredValidators: ValidatorConfig = {};

// // property decorator for validation
// function Required(target: any, propertyKey: string) {
//   registeredValidators[target.constructor.name] = {
//     ...registeredValidators[target.constructor.name],
//     [propertyKey]: [
//       ...(registeredValidators[target.constructor.name]?.[propertyKey] ?? []),
//       "required",
//     ],
//   };
// }

// // property decorator for validation
// function PositiveNumber(target: any, propertyKey: string) {
//   registeredValidators[target.constructor.name] = {
//     ...registeredValidators[target.constructor.name],
//     [propertyKey]: [
//       ...(registeredValidators[target.constructor.name]?.[propertyKey] ?? []),
//       "positive",
//     ],
//   };
// }

// function validate(obj: any) {
//   const objValidatorConfig = registeredValidators[obj.constructor.name];
//   if (!objValidatorConfig) {
//     return true;
//   }
//   let isValid = true;
//   for (const prop in objValidatorConfig) {
//     for (const validator of objValidatorConfig[prop]) {
//       switch (validator) {
//         case "required":
//           isValid = isValid && !!obj[prop];
//           break;
//         case "positive":
//           isValid = isValid && obj[prop] > 0;
//           break;
//       }
//     }
//   }
//   return isValid;
// }
// class Course {
//   @Required
//   title: string;
//   @PositiveNumber
//   price: number;

//   constructor(title: string, price: number) {
//     this.title = title;
//     this.price = price;
//   }
// }

// const courseForm = document.querySelector("form")!;
// courseForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const titleInput = document.getElementById("title") as HTMLInputElement;
//   const priceInput = document.getElementById("price") as HTMLInputElement;

//   const title = titleInput.value;
//   const price = +priceInput.value;

//   const createdCourse = new Course(title, price);

//   if (!validate(createdCourse)) {
//     alert("Invalid Input, Please try again");
//     return;
//   }
//   console.log(createdCourse);
// });

// import "reflect-metadata";
// const formatMetadataKey = Symbol("format");
// function format(formatString: string) {
//   return Reflect.metadata(formatMetadataKey, formatString);
// }
// function getFormat(target: any, propertyKey: string) {
//   return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
// }

// class Greeter2 {
//   @format("Hello, %s")
//   greeting: string;
//   constructor(message: string) {
//     this.greeting = message;
//   }
//   greet() {
//     let formatString = getFormat(this, "greeting");
//     return formatString.replace("%s", this.greeting);
//   }
// }

// const greet = new Greeter2("my name is dong");
// console.log(greet);

// // const requiredMetadataKey = Symbol("required");

// // function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
// //   let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
// //   existingRequiredParameters.push(parameterIndex);
// //   Reflect.defineMetadata( requiredMetadataKey, existingRequiredParameters, target, propertyKey);
// // }

// // function validate2(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
// //   let method = descriptor.value!;

// //   descriptor.value = function () {
// //     let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
// //     if (requiredParameters) {
// //       for (let parameterIndex of requiredParameters) {
// //         if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
// //           throw new Error("Missing required argument.");
// //         }
// //       }
// //     }
// //     return method.apply(this, arguments);
// //   };
// // }
// function validate2(
//   _target: any,
//   _propertyName: string,
//   _descriptor: TypedPropertyDescriptor<any>
// ) {}
// function required(
//   _target: Object,
//   _propertyKey: string | symbol,
//   _parameterIndex: number
// ) {}
// // ---cut---
// class BugReport3 {
//   type = "report";
//   title: string;

//   constructor(t: string) {
//     this.title = t;
//   }

//   @validate2
//   print(@required verbose: boolean) {
//     if (verbose) {
//       return `type: ${this.type}\ntitle: ${this.title}`;
//     } else {
//       return this.title;
//     }
//   }
// }

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

const pro1 = new Product("Book", 10);
const pro2 = new Product("Book2", 20);
