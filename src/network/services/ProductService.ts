import http from "../../common/utils/api";
import Product from "../models/Product";
import { Result } from "../models/core/Result";
import { BaseService } from "./core/BaseService";
import BaseResults from "./core/BaseResult";
export interface IProductService {
  /**
   * get products by categoryId
   */
  getProductsByCategory(categoryId: string): Promise<Result<Product[]>>;
}

export class ProductService
  extends BaseService<Product>
  implements IProductService
{
  constructor() {
    super("/products");
  }
  handels = new BaseResults<Product>();
  async getProductsByCategory(categoryId: string): Promise<Result<Product[]>> {
    try {
      const response = await http.get<Product[]>(`/products/${categoryId}`);
      return this.handels.handleResponse(response.data);
    } catch (error: any) {
      return this.handels.handleError(error);
    }
  }
}