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
import { CreateOutletDto } from './dto/create-outlet.dto';
import { FindOutlet } from './dto/find.outlet.dto';
import { OutletDocument } from './outlet.schema';

@Controller('outlet')
export class OutletController {
  @Post('create')
  async create(@Body() dto: CreateOutletDto) {
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
  async patch(@Param('id') id: string, @Body() dto: OutletDocument) {
    //
  }

  @HttpCode(200)
  @Post('find')
  async find(@Body() dto: FindOutlet) {
    //
  }
}
