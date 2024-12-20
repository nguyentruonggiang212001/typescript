type TProduct = {
    title: string;
    price: number;
};

let productA: TProduct = {title:"tivi",price: 200}


enum ProductsSize{
    "S",
    "M",
    "L",
   " XL",
    "XXl"
}

interface IProduct {
    title: string;
    price: number;
    description: string;
    stock: number;
    sku: string;
    size:ProductsSize

}