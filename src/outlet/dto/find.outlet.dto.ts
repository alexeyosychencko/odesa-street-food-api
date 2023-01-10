import { DistrictCategory } from '../outlet.model';

class FindOutletByCuisineDto {
  cuisine: string;
  limit: number;
}

class FindOutletByDistrictDto {
  district: DistrictCategory;
  limit: number;
}

export type FindOutlet = FindOutletByCuisineDto | FindOutletByDistrictDto;
