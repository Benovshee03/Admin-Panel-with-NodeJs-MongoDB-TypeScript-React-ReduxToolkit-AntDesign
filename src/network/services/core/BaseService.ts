import http from "../../../common/utils/api";
import { IBaseEntity, Result } from "../../models";
import ResultTypes from "../../models/core/ResultTypes";
import { IBaseService } from "./IBaseService";

export class BaseService<T extends IBaseEntity> implements IBaseService<T> {
  private _url: string;
  constructor(url: string) {
    this._url = url;
  }
  
  async update(id: string, entity: T): Promise<Result<T>> {
    try {
      const response = await http.patch<T>(`${this._url}/${id}`, entity);
      return this.handleResponse(response.data);
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  async delete(id: string): Promise<Result<T>> {
    try {
      const response = await http.delete<T>(`${this._url}/${id}`);
      return this.handleResponse(response.data);
    } catch (error: any) {
      return this.handleError(error);
    }
  }
  /*
   try {
      const response = await http.post<T>();
      return this.handleResponse(response.data);
    } catch (error: any) {
      return this.handleError(error);
    }
*/

  async get(id: string): Promise<Result<T>> {
    try {
      const response = await http.get<T>(`${this._url}/${id}`);
      return this.handleResponse(response.data);
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  async add(entity: T): Promise<Result<T>> {
    try {
      const response = await http.post<T>(this._url, entity);
      return this.handleResponse(response.data);
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  private handleResponse(response: T | T[]): Result<T | T[]> {
    return {
      data: response,
      message: "işlem başarılı",
      status: ResultTypes.Success,
      statusCode: 200,
    };
  }
  private handleError(error: any): Result<T | T[]> {
    return {
      data: null,
      message: error.message || "Bir hata oluştu",
      status: ResultTypes.Error,
      statusCode: error.statusCode || 500,
    };
  }

  async getAll(): Promise<Result<T[]>> {
    try {
      const response = await http.get<T[]>(this._url);
      return this.handleResponse(response.data);
    } catch (error: any) {
      return this.handleError(error);
    }
  }
}