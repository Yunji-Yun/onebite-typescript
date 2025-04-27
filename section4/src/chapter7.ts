/*
 * 타입 단언
 */

type Person = {
    name: string;
    age: number;
};

let person = {} as Person;
person.name = "윤윤지";
person.age = 23;

type Dog = {
    name: string;
    color: string;
};

let dog: Dog = {
    name: "구름",
    color: "white",
    breed: "진도",
} as Dog;

/*
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string; 위의 규칙이 성립 X
let num3 = 10 as unknown as string; // 다중 단언을 하면 성립 가능

/*
 * const 단언
 */

let num4 = 10 as const; // 10 Number Literal 타입으로 단언

let cat = {
    name: "야옹이",
    color: "yellow",
} as const; // 모든 프로퍼티가 readonly를 갖도록 단언됨 -> 프로퍼티 값 수정 불가

/*
 * Non Null 단언
 */

type Post = {
    title: string;
    author?: string;
};

let post: Post = {
    title: "게시글1",
    author: "윤지",
};

// const len: number = post.author?.length;
// ? -> 옵셔널 체이닝 -> 프로퍼티 값이 없으면 undefined로 넣어줌

const len: number = post.author!.length;
// 값이 null이거나 undefined가 아니라고 명시
