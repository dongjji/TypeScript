"use strict";
const passedObject = {
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26,
};
const person = makeWatchedObject({
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26,
});
person.on("firstNameChanged", (newName) => {
    console.log(`new name is ${newName.toUpperCase()}`);
});
person.on("lastNameChanged", (newValue) => {
    console.log(`last1tName was changed to ${newValue}!`);
});
person.on("ageChanged", (newAge) => {
    if (newAge < 0) {
        console.warn("warning! negative age");
    }
});
//# sourceMappingURL=app.js.map