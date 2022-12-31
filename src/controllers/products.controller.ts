import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProduct(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: number,
  ) {
    return `products limit => ${limit} offset => ${offset} brand => ${brand}`;
  }

  @Get('filter')
  getProductFilter() {
    return 'Yo soy un filter';
  }

  @Get(':productId')
  getProducts(@Param('productId') productId: string) {
    return `product ${productId}`;
  }
}
