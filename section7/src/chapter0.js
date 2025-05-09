/*
 * 클래스
 */

let studentA = {
    name: "윤윤지",
    grade: "A+",
    age: 23,
    study() {
        console.log("studying");
    },
    introduce() {
        console.log("hello!")
    },
}

class Student {
    // 필드
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메서드
    study() {
        console.log("studying");
    }

    introduce() {
        console.log(`안녕하세요 ${this.name} 입니다!`);
    }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("이정환", "A0", 27);
console.log(studentB); // Student { name: '이정환', grade: 'A0', age: 27 }
studentB.study(); // studying

class StudentDeveloper extends Student {
    // 필드
    favoriteSkill;

    // 생성자
    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }

    // 메서드
    programming() {
        console.log(`${this.favoriteSkill}로 프로그래밍 함`);
    }
}

const studentDeveloper = new StudentDeveloper("이정환", "B+", 27, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();