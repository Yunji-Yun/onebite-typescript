/*
 * 사용자 정의 타입 가드 (Custom Type Guard)
 */

type Dog = {
    name: string;
    isBark: boolean;
};

type Cat = {
    name: string;
    isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
    return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
    if (isDog(animal)) {
        // 강아지
    } else if (!isDog(animal)) {
        // 고양이
    }
}
