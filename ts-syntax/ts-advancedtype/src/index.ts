/////////////////////////////////////////
// index properties

interface ErrorContainer {
  // {email: 'Not a valid email', username: 'Must start with a character'}
  // id: number; // error
  id: string;
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  id: "1",
  email: "Not a valid email",
  1: "number is ok in key",
  // error: 1 // error: key값에는 숫자를 입력해도 문자로 받아들이지만 value값은 그렇지 않음.
};
