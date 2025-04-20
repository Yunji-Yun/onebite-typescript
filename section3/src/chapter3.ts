// object
let user1: object = {
    id: 1,
    name: "윤윤지",
};

// 객체 리터럴 타입
let user: {
    id?: number;
    name: string;
} = {
    id: 1,
    name: "윤윤지",
};

// 읽기 전용 프로퍼티
let config: {
    readonly apiKey: string;
} = {
    apiKey: "MY API KEY",
};
