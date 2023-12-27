export interface ProductPost{

    productId: number;
    productCategoryId: number;
    gameId: number;
    productName: string;
    description:string;
    price: number;
    status:boolean;

}

export interface ProductDetail{

    productId: number;
    productCategoryName: string;
    gameName:string;
    productName: string;
    description:string;
    stockQuantity:number;
    price: number;
    status:boolean;


}