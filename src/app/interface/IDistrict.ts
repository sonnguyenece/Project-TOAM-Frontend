import {ICity} from './icity';

export interface IDistrict {
  id: number;
  name: string;
  cities: ICity;
}
