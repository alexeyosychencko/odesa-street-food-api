export enum DistrictCategory {
  Center,
  Tairova,
  Posyolok,
  Slobodka,
}

export class OutletModel {
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
  photoUrl?: string;
  userId: number;
  createdAt: Date;
  lastUpdate: Date;
  calculateTasteRating: number;
  calculateCleanRating: number;
  calculatePoliteRating: number;
}
