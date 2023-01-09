import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FindOutlet } from './dto/find.outlet.dto';
import { OutletModel } from './outlet.model';

@Controller('outlet')
export class OutletController {
  @Post('create')
  async create(@Body() dto: Omit<OutletModel, '_id'>) {
    //
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    //
  }

  @Get('outlets')
  async getAll() {
    //
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    //
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: OutletModel) {
    //
  }

  @HttpCode(200)
  @Post('find')
  async find(@Body() dto: FindOutlet) {
    //
  }
}
