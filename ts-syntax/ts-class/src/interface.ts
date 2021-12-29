interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}
// 인터페이스로 지정된 것과 똑같아야 함
let user1: Person;

user1 = {
  name: "Dong",
  age: 25,
  // firstName: "Dong", // error
  greet(phrase: string) {
    console.log(phrase + "" + this.name);
  },
};

type Greetable = {
  name: string;
  age: number;
  greet(phrase: string): void;
};

let user2: Greetable;

user2 = {
  name: "Dong",
  age: 25,
  greet(phrase: string) {
    console.log(phrase + "" + this.name);
  },
};

class Greet implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

// let user3: Person  Greet class는 Person interface를 implements하기 떄문에 두가지 타입 모두 지정해도 문제가 없다.
let user3: Greet;
user3 = new Greet("Dong", 25);

// interface에서는 public이나 private을 사용할 수 없지만 readonly는 사용이 가능하다.

interface SomeName {
  readonly name: string;
  outputName?: string; // optional output: 해도 되고 안해도 되고
  // public age: number; // error
  // private phone: string; // error
  // static age: number;
}

// interface는 또다른 interface를 extends할 수 있다.
// class에서 interface를 받을 때는 implements
// interface에서 interface를 받을 때는 extends
interface Named {
  greet(phrase: string): void;
}

interface Named2 extends SomeName, Named {
  // interface는 여러가지 interface를 extends할 수 있다.
}

class NewName implements Named2 {
  name: string;
  outputName?: string; // optional parameter

  constructor(name: string, outputName?: string) {
    this.name = name;
    if (outputName) {
      this, (outputName = outputName);
    }
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

// type AddFn = (a: number, b: number) => number;

// let add: AddFn;

// add = (n1: number, n2: number) => n1+n2

interface AddFn {
  (a: number, b: number): number; // custom function type
}

let add: AddFn;
// interface로 생성을 할 순 없지만 interface로 타입을 지정하는 것은 가능하다.
add = (n1: number, n2: number) => n1 + n2;

// interface Animal {
//   name: string;
// }

// interface Bear extends Animal {
//   honey: boolean;

//   getBear(): string;
// }

type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: boolean;

  getBear(): string;
};

interface Windows {
  title: string;
}

interface Windows {
  price: number;
}

// type Windows = {
//   title: string
// }

// type Windows = {
//   price: number
// }
