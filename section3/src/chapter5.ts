// 열거형 타입: 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
}

enum Language {
    korean = "ko",
    english = "en",
}

const user1 = {
    name: "이정환",
    role: Role.ADMIN,
    language: Language.korean,
};

const user2 = {
    name: "홍길동",
    role: Role.USER,
};

const user3 = {
    name: "아무개",
    role: Role.GUEST,
};
