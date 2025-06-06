/*
 * 타입스크립트의 클래스
 */

const employee = {
    name: "윤윤지",
    age: 23,
    position: "developer",
    work() {
        console.log("일함");
    },
}

class Employee {
    // 필드
    name: string;
    age: number;
    position: string;

    // 생성자
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    work() {
      console.log("일함");
    }
}

const employeeB = new Employee("윤윤지", 23, "developer");
console.log(employeeB);

const employeeC: Employee = {
    name: "",
    age: 0,
    position: "",
    work() {},
}

class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber: number;

    // 생성자
    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position); // js와 다르게 필수
        this.officeNumber = officeNumber;
    }
}