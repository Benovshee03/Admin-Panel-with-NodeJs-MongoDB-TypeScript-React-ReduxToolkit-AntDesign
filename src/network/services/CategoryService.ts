import Category from "../models/Category";
import { BaseService } from "./core/BaseService";
export class CategoryService extends BaseService<Category>{
    constructor(){
        super("/categories")
    }
}