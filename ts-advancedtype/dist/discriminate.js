"use strict";
function moveAnimal(animal) {
    if ("flyingSpeed" in animal) {
        console.log("Moving with speed: " + animal.flyingSpeed);
    }
    if ("runningSpeed" in animal) {
        console.log("Moving with speed: " + animal.runningSpeed);
    }
    if ("swimmingSpeed" in animal) {
        console.log("Moving wiht speed: " + animal.swimmingSpeed);
    }
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
//# sourceMappingURL=discriminate.js.map