"use strict";
let user1;
user1 = {
    name: "Dong",
    age: 25,
    greet(phrase) {
        console.log(phrase + "" + this.name);
    },
};
let user2;
user2 = {
    name: "Dong",
    age: 25,
    greet(phrase) {
        console.log(phrase + "" + this.name);
    },
};
class Greet {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user3;
user3 = new Greet("Dong", 25);
class NewName {
    constructor(name, outputName) {
        this.name = name;
        if (outputName) {
            this, (outputName = outputName);
        }
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let add;
add = (n1, n2) => n1 + n2;
//# sourceMappingURL=interface.js.map