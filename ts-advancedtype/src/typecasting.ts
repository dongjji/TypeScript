/////////////////////////////////////////
// type casting

const paragraph1 = document.querySelector("p");
const paragraph2 = document.querySelector("#message-output");
const paragraph3 = document.getElementById("message-output");

// const userInput = <HTMLInputElement>document.getElementById("user-input"); // 1
const userInput = document.getElementById("user-input")! as HTMLInputElement; // 2

userInput.value = "Hi there"; // error

(userInput as HTMLInputElement).value = "Hi There"; // 3
