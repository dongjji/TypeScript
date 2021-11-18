const button = document.querySelector("button")! as HTMLElement;

button.addEventListener("click", () => {
  console.log(1);
});

let logged;

function sendAnalystics(data: string) {
  let username = "DONG"; // warning with noUnusedLocals : true(함수 내 지역변수)
  console.log(data);
  logged = true;
  console.log(logged);
}

function add(n1: number, n2: number) {
  // warning with noImplicitReturns : true
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
}

sendAnalystics("the data");
