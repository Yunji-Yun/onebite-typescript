/*
 * Unknown 타입: 모든 타입의 슈퍼 타입
 */

function unknownExam() {
    let a: unknown = 1; // number -> unknown
    let b: unknown = "hello"; // string -> unknown
    let c: unknown = true; // boolean -> unknown
    let d: unknown = null; // null -> unknown
    let e: unknown = undefined; // undefined -> unknown

    let unknownVar: unknown;
    // let num: number = unknownVar; 다운 캐스팅 불가

    let f: unknown = []; // Array -> unknown
    let g: unknown = {}; // Object -> unknown
    let h: unknown = () => {}; // Function -> unknown
}

/*
 * Never 타입: 모든 타입의 서브타입(공집합)
 */

function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // let never1: never = 10; 다운 캐스팅 불가
}

/*
 * Void 타입: undefined의 슈퍼타입
 */

function voidExam() {
    function voidFunc(): void {
        console.log("hi");
    }

    let voidVar: void = undefined;
}

/*
 * any 타입: 모든 타입의 슈퍼, 서브타입으로 모두 존재(치트키)
 */

function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar; // 다운 캐스팅 가능

    undefinedVar = anyVar; // 다운 캐스팅 가능

    // neverVar = anyVar; 예외적으로 불가
}
