import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { CategoriesService } from './categories.service';
import { Categories } from './entities/category.entity';

@Controller()
export class CategoriesController {
  constructor(private readonly _categoriesService: CategoriesService) {}

  @EventPattern('create-categorie')
  createCategories(
    @Payload() categories: Categories,
    @Ctx() context: RmqContext,
  ) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    channel.ack(originalMsg);
  }
}
