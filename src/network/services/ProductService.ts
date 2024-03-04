import Product from "../models/Product";
import { BaseService } from "./core/BaseService";
export class ProductService extends BaseService<Product>{
    constructor(){
        super("/products")
    }
}