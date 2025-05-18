/*
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a : StringNumberSwitch<number>; // string
let b : StringNumberSwitch<string>; // number

let c : StringNumberSwitch<number | string>;
// StringNumberSwitch<number> | StringNumberSwitch<string>
// string | number

let d : StringNumberSwitch<boolean | number | string>;
// number | string

/*
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// number |
// never |
// boolean

// 결과
// number | never | boolean
// never는 공집합이므로 유니온일 때 사라짐
// number | boolean

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;
// 1단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2단계
// never |
// string |
// never

// 결과
// never | string
// never는 공집합이므로 유니온일 때 사라짐
// string

// 분산 방지
type StringNumberSwitch2<T> = [T] extends [number] ? string : number;