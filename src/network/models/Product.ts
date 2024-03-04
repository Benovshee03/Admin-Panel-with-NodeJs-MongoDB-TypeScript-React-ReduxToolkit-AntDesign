import { IBaseEntity } from "./core/IBaseEntity";

interface  Product extends IBaseEntity{
    productName: string;
    description:string;
    categoryId:string;
    unitsInStock?:number;
    unitPrice?:number;
    createdDate?:Date
}
export default Product