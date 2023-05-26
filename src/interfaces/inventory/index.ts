import { RestaurantInterface } from 'interfaces/restaurant';

export interface InventoryInterface {
  id?: string;
  restaurant_id: string;
  ingredient_name: string;
  quantity: number;
  unit: string;

  restaurant?: RestaurantInterface;
  _count?: {};
}
