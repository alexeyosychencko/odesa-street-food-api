import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateOutletDto } from './dto/create-outlet.dto';
import { OutletService } from './outlet.service';

@Controller('outlet')
export class OutletController {
  constructor(private readonly outletService: OutletService) {}

  @Post('create')
  @UseInterceptors(FileInterceptor('image'))
  async create(@Body() dto: CreateOutletDto, @UploadedFile() image) {
    return await this.outletService.create(dto, image);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deleted = await this.outletService.delete(id);
    if (!deleted) {
      throw new HttpException('Not found outlet.', HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  async patch(
    @Param('id') id: string,
    @Body() dto: CreateOutletDto,
    @UploadedFile() image,
  ) {
    // TODO: check is this user has access to update this
    const updatedOutlet = await this.outletService.update(id, dto, image);
    if (!updatedOutlet) {
      throw new HttpException('Not found outlet.', HttpStatus.NOT_FOUND);
    }
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    const outlet = await this.outletService.findById(id);
    if (!outlet) {
      throw new HttpException('Not found outlet.', HttpStatus.NOT_FOUND);
    }
    return outlet;
  }

  @Get('outlets')
  async getAll() {
    return await this.outletService.findAll();
  }

  @Get(':userId')
  async getByUserId(@Param('userId') userId: string) {
    return await this.outletService.findByUserId(userId);
  }
}
