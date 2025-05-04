/*
 * 인터페이스의 확장
 */

interface Animal {
    name: string;
    age: number;
  }
  
interface Dog extends Animal {
    isBark: boolean;
  }

  const dog: Dog = {
    name: "구름",
    age: 4,
    isBark: false,
  }
  
interface Cat extends Animal {
    isScratch: boolean;
  }
  
interface Chicken extends Animal {
    isFly: boolean;
  }

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
    name: "구름",
    age: 4,
    isBark: false,
    isScratch: true,
  };