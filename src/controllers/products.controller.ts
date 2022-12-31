import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get('filter')
  getProductFilter() {
    return {
      message: 'Yo soy un filter',
    };
  }

  @Get()
  getProduct(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: number,
  ) {
    return {
      message: `products limit => ${limit} offset => ${offset} brand => ${brand}`,
    };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Res() response: Response, @Param('productId') productId: string) {
    response.status(202).send({
      message: `product ${productId}`,
    });
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'acción de crear',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: number) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      id,
    };
  }
}
