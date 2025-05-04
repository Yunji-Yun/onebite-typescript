/*
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
//   sayHi: () => void; 이 경우, 오버 로딩 불가
  sayHi(): void; // 호출 시그니처도 사용 가능
  sayHi(a: number, b: number): void;
}

const person: Person = {
    name: "윤윤지",
    age: 23,
    sayHi: function () {
        console.log("Hi");
    },
}

person.sayHi();
person.sayHi(1, 2);