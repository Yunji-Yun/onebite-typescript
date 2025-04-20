// void: 아무것도 없음을 의미하는 타입
let a: void;
a = undefined;

function func1(): string {
    return "hello";
}

// 아무것도 반환하지 않을 때
function func2(): void {
    console.log("hello");
}

// undefined, null은 실제로 해당 값을 반환해야 함
function func3(): undefined {
    return undefined;
}

function func4(): null {
    return null;
}

// never: 존재하지 않는 불가능한 타입
let b: never;

function func5(): never {
    while (true) {}
}

function func6(): never {
    throw new Error();
}
