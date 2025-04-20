// number
let num1: number = 123; // 양수
let num2: number = -123; // 음수
let num3: number = 0.123; // 양의 소수
let num4: number = -0.123; // 음의 소수
let num5: number = Infinity; // 양의 무한대
let num6: number = -Infinity; // 음의 무한대
let num7: number = NaN; // Not a Number
/*
num1 = "hello"; 타입 오류
num1.toUpperCase(); 문자 적용 함수이므로 오류
num1.toFixed(); 숫자에만 적용 가능 함수
*/

// string
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`; // 템플릿 리터럴 문자열

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// 리터럴 타입
let numA: 10 = 10;
// numA = 12; 오류

let strA: "hello" = "hello";

let boolA: true = true;
