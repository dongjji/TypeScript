////////////////////////////////////////////////////////////////////////
// Type Guards
// function add(n1: number): number;
// function overloads
function add(n1: number, n2: number): number;
function add(n1: string, n2: string): string;
function add(n1: string, n2: number): string;
function add(n1: number, n2: string): string;
function add(n1: Combinable, n2: Combinable) {
  if (typeof n1 === "string" || typeof n2 === "string") {
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}

type UnknownEmployee = Employee | Admin;

// custom type is not type for javascript
// it is object
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  // // error
  // if (typeof emp === 'object') {
  //   console.log('Privileges: ' + emp.privileges)
  // }
  // // error
  // if (emp.privileges) {
  //   console.log('Privileges: ' + emp.privileges)
  // }

  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("startDate: " + emp.startDate);
  }

  // // error
  // if (emp instanceof Admin) {
  //   console.log("Privileges: " + emp.privileges);
  // }
  // // error
  // if (emp instanceof Employee) {
  //   console.log("startDate: " + emp.startDate);
  // }
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

  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();
const v3: Vehicle = {
  drive() {
    console.log("Driving vehicle");
  },

  loadCargo(amount: number) {
    console.log("loading Cargo..." + amount);
  },
};
function useVehicle(vehicle: Vehicle) {
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

////////////////////////////////////////////////////////////////
// function overloads
/////////////////////////////////////////

const result = add("Dong", "Cha") as string; // string return
// const result2 = add(3, 5) as string; // error : will return number
result.split(" ");

////////////////////////////////////////////////////////////////
// optional chaining
const fetchedUser = {
  id: "u1",
  name: "Dong",
  job: {
    title: "CEO",
    description: "My Own Company",
  },
};

console.log(fetchedUser?.job?.title);

////////////////////////////////////////////////////////////////
// Nullish Coalescing

const userInputValue = undefined; // "", 0, undefined, false, null

const newData = userInputValue || "Default"; // "", 0, undefined,false, null => "Default"
const storedData = userInputValue ?? "Default"; // only undefined and null => "Default", "" => ""
