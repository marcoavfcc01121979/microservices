import { Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Categories } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(private readonly _categoriesService: Repository<Categories>) {}

  private readonly logger = new Logger(CategoriesService.name);

  createCategories(categories: Categories): Promise<Categories> {
    try {
      const categoriesCreate = this._categoriesService.create(categories);

      return this._categoriesService.save(categoriesCreate);
    } catch (error) {
      this.logger.error(`error: ${JSON.stringify(error.message)}`);
    }
  }

  async consultAllCategories(): Promise<Categories[]> {
    try {
      return await this._categoriesService.find();
    } catch (error) {
      this.logger.error(`error: ${JSON.stringify(error.message)}`);
      // throw new RpcException(error.message);
    }
  }

  async consultCategoriesId(id: string): Promise<Categories> {
    try {
      return await this._categoriesService.findOne(id);
    } catch (error) {
      this.logger.error(`error: ${JSON.stringify(error.message)}`);
      // throw new RpcException(error.message);
    }
  }

  async updateCategories(
    id: string,
    categories: Categories,
  ): Promise<Categories> {
    try {
      await this._categoriesService.findOne(id);
      await this._categoriesService.update(id, categories);
      return this._categoriesService.findOne(id);
    } catch (error) {
      this.logger.error(`error: ${JSON.stringify(error.message)}`);
      // throw new RpcException(error.message);
    }
  }
}
