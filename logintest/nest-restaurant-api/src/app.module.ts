import { Module } from '@nestjs/common';
import { ItemsController } from './items/item.conttoller';
import { ItemsService } from './items/item.service';
import { ShoppingCartController } from './items/shopping-chart.controller';

@Module({
  imports: [],
  controllers: [ItemsController, ShoppingCartController],
  providers: [ItemsService],
})
export class AppModule {}
