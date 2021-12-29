"use strict";
const button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log(1);
});
let logged;
function sendAnalystics(data) {
    console.log(data);
    logged = true;
    console.log(logged);
}
sendAnalystics("the data");
let username = "DONG";
//# sourceMappingURL=analytics.js.map