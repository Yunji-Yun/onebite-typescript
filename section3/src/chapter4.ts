// 타입 별칭

type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

let user: User = {
    id: 1,
    name: "윤윤지",
    nickname: "yunji",
    birth: "2003.10.17",
    bio: "hi",
    location: "성북구",
};

// 인덱스 시그니처
type CountyCodes = {
    [key: string]: string;
};

let countryCodes: CountyCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};

type CountyNumberCodes = {
    [key: string]: number;
    Korea: number;
};

let countryNumberCodes: CountyNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
};
