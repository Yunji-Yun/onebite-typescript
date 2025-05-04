/*
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
    // 필드
    private name: string;
    protected age: number;
    public position: string;
  
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

  class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber: number;

    // 생성자
    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position); // js와 다르게 필수
        this.officeNumber = officeNumber;
    }

    // 메서드
    func() {
        this.age;
        // this.name; -> private이므로 불가
    }
}
  
  const employee = new Employee("이정환", 27, "devloper");
  
//   employee.name = "홍길동";
//   employee.age = 30;
  employee.position = "디자이너";