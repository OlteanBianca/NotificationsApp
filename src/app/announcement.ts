import { Category } from "./category";

export interface Announcement {
    title:string,
    author:string,
    message:string,
    category:Category,
    imageUrl: string,
    id: string
}
