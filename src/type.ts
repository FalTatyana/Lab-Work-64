export type PostHome = {
    date: string
    title: string
}

export type Post = {
    title: string
    message: string
}

export interface PostApi extends Post {
    id: string
    date: string
}

export interface PostList {
    [id: string]: Post;
}