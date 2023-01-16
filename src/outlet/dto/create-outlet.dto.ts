import { DistrictCategory } from '../outlet.schema';

export class CreateOutletDto {
  name: string;
  description: string;
  menu?: string;
  cuisine: string;
  website?: string;
  phoneNumber?: string;
  district: DistrictCategory;
  address: string;
  latitude: number;
  longitude: number;
  timeOpenSek?: number;
  timeCloseSek?: number;
  createdAt: Date;
  lastUpdate?: Date;
  calculateTasteRating: number;
  calculateCleanRating: number;
  calculatePoliteRating: number;
  user: string;
}
