"use strict";
var _a;
function add(n1, n2) {
    if (typeof n1 === "string" || typeof n2 === "string") {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("startDate: " + emp.startDate);
    }
}
printEmployeeInformation({ name: "Manu", startDate: new Date() });
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log("Loading cargo ..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
const v3 = {
    drive() {
        console.log("Driving vehicle");
    },
    loadCargo(amount) {
        console.log("loading Cargo..." + amount);
    },
};
function useVehicle(vehicle) {
    vehicle.drive();
    if ("loadCargo" in vehicle) {
        vehicle.loadCargo(3);
    }
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(4);
    }
}
useVehicle(v1);
useVehicle(v2);
const result = add("Dong", "Cha");
result.split(" ");
const fetchedUser = {
    id: "u1",
    name: "Dong",
    job: {
        title: "CEO",
        description: "My Own Company",
    },
};
console.log((_a = fetchedUser === null || fetchedUser === void 0 ? void 0 : fetchedUser.job) === null || _a === void 0 ? void 0 : _a.title);
const userInputValue = undefined;
const newData = userInputValue || "Default";
const storedData = userInputValue !== null && userInputValue !== void 0 ? userInputValue : "Default";
//# sourceMappingURL=typeguard.js.map