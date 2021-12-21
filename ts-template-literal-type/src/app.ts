// type World = "world";

// type Greeting = `hello ${World}`;
// // type Greeting = "hello world"

type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
// type AllLocaleIDs = "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"

type Lang = "en" | "ja" | "pt";

type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;

// type LocaleMessageIDs = "en_welcome_email_id" | "en_email_heading_id" | "en_footer_title_id" | "en_footer_sendoff_id" | "ja_welcome_email_id" | "ja_email_heading_id" | "ja_footer_title_id" | "ja_footer_sendoff_id" | "pt_welcome_email_id" | "pt_email_heading_id" | "pt_footer_title_id" | "pt_footer_sendoff_id"

const passedObject = {
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26,
};

type PropEventSource<Type> = {
  on<Key extends string & keyof Type>(
    eventName: `${Key}Changed`,
    callback: (newValue: Type[Key]) => void
  ): void;
};

declare function makeWatchedObject<Type>(
  obj: Type
): Type & PropEventSource<Type>;

const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26,
});

person.on("firstNameChanged", (newName) => {
  // (parameter) newName: string
  console.log(`new name is ${newName.toUpperCase()}`);
});

person.on("lastNameChanged", (newValue) => {
  console.log(`last1tName was changed to ${newValue}!`);
});

// error
// // '33' 형식의 인수는 '"firstNameChanged" | "lastNameChanged" | "ageChanged"' 형식의 매개 변수에 할당될 수 없습니다.
// person.on(33, (newValue: any) => {
//   console.log(`last1tName was changed to ${newValue}!`);
// });

person.on("ageChanged", (newAge) => {
  // (parameter) newAge: number
  if (newAge < 0) {
    console.warn("warning! negative age");
  }
});

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
