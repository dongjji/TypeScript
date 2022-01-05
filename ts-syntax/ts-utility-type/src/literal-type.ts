// makeWatchedObject has added `on` to the anonymous Object
type Greeting = "Hello, world";
type ShoutyGreeting = Uppercase<Greeting>;

// type ShoutyGreeting = "HELLO, WORLD"

type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`;
type MainID = ASCIICacheKey<"my_app">;

// type MainID = "ID-MY_APP"

type Greeting2 = "Hello, world";
type QuietGreeting2 = Lowercase<Greeting2>;

// type QuietGreeting2 = "hello, world"

type ASCIICacheKey2<Str extends string> = `id-${Lowercase<Str>}`;
type MainID2 = ASCIICacheKey2<"MY_APP">;

// type MainID2 = "id-my_app"

type LowercaseGreeting = "hello, world";
type Greeting3 = Capitalize<LowercaseGreeting>;

// type Greeting3 = "Hello, world"

type UppercaseGreeting = "HELLO WORLD";
type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;

// type UncomfortableGreeting = "hELLO WORLD"
