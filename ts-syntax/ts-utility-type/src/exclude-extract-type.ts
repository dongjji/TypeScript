type T0 = Exclude<"a" | "b" | "c", "a">;
// type T0 = "b" | "c"

type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
// type T1 = "c"

type T2 = Exclude<string | number | (() => void), Function>;
// type T2 = string | number

type T3 = Exclude<"a" | "b" | "c", "a" | "f">;
// type T3 = "b" | "c"

type T4 = Extract<"a" | "b" | "c", "a" | "f">;
// type T0 = "a"

type T5 = Extract<string | number | (() => void), Function>;
// type T1 = () => void
