import { IBaseEntity } from "./core/IBaseEntity";

interface Category extends IBaseEntity {
  categoryName: string;
  description?: string;
  createdDate?: Date;
}
export default Category;
