import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OutletController } from './outlet.controller';
import { Outlet, OutletSchema } from './outlet.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Outlet.name, schema: OutletSchema, collection: 'Outlet' },
    ]),
  ],
  controllers: [OutletController],
})
export class OutletModule {}
