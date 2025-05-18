/*
 * 인덱스드 엑세스 타입
 */

interface Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
};

function printAuthorInfo(author: Post["author"]) {
    console.log(`${author.name}-${author.id}`);
}

function printAuthorInfo2(author: Post["author"]["id"]) {
    console.log(`${author}`);
}


const post: Post = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "윤윤지",
        age: 23,
    },
};

printAuthorInfo(post.author);


type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}[];

const post2: PostList[number] = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "윤윤지",
        age: 23,
    },
};

const post3: PostList[0] = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "윤윤지",
        age: 23,
    },
};

function printAuthorInfo3(author: PostList[number]["author"]) {
    console.log(`${author.name}-${author.id}`);
}

type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
type TupNum = Tup[number]; // string | number | boolean