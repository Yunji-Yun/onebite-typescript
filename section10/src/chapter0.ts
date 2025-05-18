/*
 * 조건부 타입
 */

type A = number extends string ? string : number; // number

type ObjA = { // super
    a: number;
}

type ObjB = { // sub
    a: number;
    b: number;
}

type B = ObjB extends ObjA ? number : string; // number

/*
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA : StringNumberSwitch<number>
let varB : StringNumberSwitch<string>

function removeSpaces<T>(text: T): T extends string ? string : undefined;

function removeSpaces(text: any) {
    if (typeof text === "string") {
        return text.replaceAll(" ", "");
    } else {
        return undefined;
    }
}

let result = removeSpaces("hi im yj");
result.toUpperCase();

let result2 = removeSpaces(undefined);