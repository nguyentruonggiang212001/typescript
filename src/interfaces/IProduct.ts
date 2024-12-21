export interface IProduct {
    id?: number | string;
    title:string;
    price:number;
    description?:string;
    thumbnail?:string;
    images?:string [];
}