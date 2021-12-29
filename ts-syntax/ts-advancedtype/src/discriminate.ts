////////////////////////////////////////////////
// Discriminated Unions
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

interface Fish {
  type: "fish";
  swimmingSpeed: number;
}

type Animal = Bird | Horse | Fish;

function moveAnimal(animal: Animal) {
  if ("flyingSpeed" in animal) {
    console.log("Moving with speed: " + animal.flyingSpeed);
  }
  if ("runningSpeed" in animal) {
    console.log("Moving with speed: " + animal.runningSpeed);
  }
  if ("swimmingSpeed" in animal) {
    console.log("Moving wiht speed: " + animal.swimmingSpeed);
  }
  // if (animal instanceof Bird) {
  //   console.log("Moving with speed: " + animal.flyingSpeed);
  // }
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving with speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 33 });
