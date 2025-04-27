/*
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

// value => number : toFixed
// value => string : toUpperCase
function func(value: number | string) {
    value; // value: number | string

    // 타입 가드
    if (typeof value === "number") {
        // value: number
        console.log(value.toFixed());
    } else if (typeof value === "string") {
        // value: string
        console.log(value.toUpperCase());
    }
}

function func2(value: number | string | Date | null) {
    if (typeof value === "number") {
        console.log(value.toFixed());
    } else if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else if (value instanceof Date) {
        console.log(value.getTime());
    }
}

type Person = {
    name: string;
    age: number;
};

function func3(value: number | string | Date | null | Person) {
    if (typeof value === "number") {
        console.log(value.toFixed());
    } else if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else if (value instanceof Date) {
        console.log(value.getTime());
    } else if (value && "age" in value) {
        // Person은 class가 아닌 객체 타입이므로 instanceof 사용 불가
        // value가 널이 아님 and age가 value 안에 있는지로 타입 좁히기
        console.log(`${value.name}은 ${value.age}살 입니다`);
    }
}
