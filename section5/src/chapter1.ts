/*
 * 함수 타입 표현식 (Function Type Expression)
= 호출 시그니처, 함수 시그니처
 */

// 매개변수의 갯수와 타입을 맞춰서 사용할 것
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const add2: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/*
 * 호출 시그니처 (콜 시그니처)
 */

type Operation2 = {
    (a: number, b: number): number;
};

const add3: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

// 하이브리드 타입
type Operation3 = {
    (a: number, b: number): number;
    name: string; // 프로퍼티 추가
};
