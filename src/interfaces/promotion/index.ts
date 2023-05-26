import { RestaurantInterface } from 'interfaces/restaurant';

export interface PromotionInterface {
  id?: string;
  restaurant_id: string;
  title: string;
  description?: string;
  start_date: Date;
  end_date: Date;
  discount_amount: number;

  restaurant?: RestaurantInterface;
  _count?: {};
}
