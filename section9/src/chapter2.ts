/*
 * keyof 연산자
 */

interface Person {
    name: string;
    age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
    return person[key];
}

const person: Person = {
    name: "윤윤지",
    age: 23,
}

getPropertyKey(person, "name"); // 윤윤지

type Person2 = typeof person;