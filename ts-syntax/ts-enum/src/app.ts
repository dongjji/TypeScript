enum Direction {
  Up,
  Down,
  Left,
  Right,
}

type ty = keyof typeof Direction;

enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
  // ...
}

respond("Princess Caroline", UserResponse.Yes);

enum E {
  A = getSomeValue(),
  //error
  //@ts-ignore
  B,
}

enum D {
  A,
  B = getSomeValue(),
}

function getSomeValue() {
  return 2;
}

enum Direction2 {
  Up,
  Down,
  Left = "LEFT",
  Right = "RIGHT",
}

enum Direction3 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  //error
  //@ts-ignore
  Right,
}

enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

enum T {
  Foo,
  Bar,
}

function f(x: T) {
  if (x !== 1 || x !== 1) {
  }
}

enum F {
  X,
  Y,
  Z,
}

function foo(obj: { X: number }) {
  return obj.X;
}

foo(F);

enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

/**
 * This is equivalent to:
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key];
  if (num <= LogLevel.WARN) {
    console.log("Log level key is:", key);
    console.log("Log level value is:", num);
    console.log("Log level message is:", message);
  }
}
printImportant("ERROR", "This is a message");

const enum tight {
  A = "literal",
  B = 3,
}

enum Enum {
  Key,
}

let key = Enum.Key;
let keyNum = Enum[key]; // "Key"

const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

EDirection.Up;
// (enum member) EDirection.Up = 0

ODirection.Up;
// (property) Up: 0

// Using the enum as a parameter
function walk(dir: EDirection) {}

// It requires an extra line to pull out the keys
type Direct = typeof ODirection[keyof typeof ODirection];
function run(dir: Direct) {}

walk(EDirection.Left);
run(ODirection.Right);
