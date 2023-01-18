import { IsDate, IsInt, IsString, Max, Min } from 'class-validator';
import { DistrictCategory } from '../outlet.schema';

export class CreateOutletDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  menu?: string;

  @IsString()
  cuisine: string;

  @IsString()
  website?: string;

  @IsString()
  phoneNumber?: string;

  @IsString()
  district: DistrictCategory;

  @IsString()
  address: string;

  @IsInt()
  latitude: number;

  @IsInt()
  longitude: number;

  @IsInt()
  timeOpenSek?: number;

  @IsInt()
  timeCloseSek?: number;

  @IsDate()
  createdAt: Date;

  @IsDate()
  lastUpdate?: Date;

  @Min(1)
  @Max(10)
  @IsInt()
  calculateTasteRating: number;

  @Min(1)
  @Max(10)
  @IsInt()
  calculateCleanRating: number;

  @Min(1)
  @Max(10)
  @IsInt()
  calculatePoliteRating: number;

  @IsString()
  user: string;
}
