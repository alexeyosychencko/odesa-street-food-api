import { DistrictCategory } from '../outlet.schema';

class FindOutletByCuisineDto {
  cuisine: string;
  limit: number;
}

class FindOutletByDistrictDto {
  district: DistrictCategory;
  limit: number;
}

export type FindOutlet = FindOutletByCuisineDto | FindOutletByDistrictDto;
