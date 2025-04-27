/*
 * 타입 추론
 */

// 추론할 정보를 토대로 당연하게 추론되는 상황
let a = 10; // number로 추론 -> 타입 넓히기
let b = "hello"; // string으로 추론
let c = {
    id: 1,
    name: "윤윤지",
    profile: {
        nickname: "yunji",
    },
    urls: ["https://yunji.com"],
};

let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

function func() {
    return "hello";
} // 반환값을 기준으로 추론

function func2(message = "hello") {
    return "hello";
} // 매개변수 기본값 기준으로 타입 추론

// 예외적으로 추론하는 상황
let d; // any 타입으로 추론 -> 암묵적 any
d = 10; // number 타입으로 추론 -> number로 진화
d.toFixed();
// d.toUpperCase(); 오류 발생

d = "hello"; // string으로 추론 -> string으로 진화
d.toUpperCase();

// 타입이 계속 바뀌는 상황 -> any 타입의 진화

const num = 10; // number가 아닌 10으로 추론 -> const는 상수이기 때문에
const str = "hello";

let arr = [1, "string"]; // (string | number)[] 추론
