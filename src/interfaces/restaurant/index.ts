import { EmployeeInterface } from 'interfaces/employee';
import { InventoryInterface } from 'interfaces/inventory';
import { MenuItemInterface } from 'interfaces/menu-item';
import { OrderInterface } from 'interfaces/order';
import { PromotionInterface } from 'interfaces/promotion';
import { ReservationInterface } from 'interfaces/reservation';
import { UserInterface } from 'interfaces/user';

export interface RestaurantInterface {
  id?: string;
  name: string;
  owner_id: string;
  employee?: EmployeeInterface[];
  inventory?: InventoryInterface[];
  menu_item?: MenuItemInterface[];
  order?: OrderInterface[];
  promotion?: PromotionInterface[];
  reservation?: ReservationInterface[];
  user?: UserInterface;
  _count?: {
    employee?: number;
    inventory?: number;
    menu_item?: number;
    order?: number;
    promotion?: number;
    reservation?: number;
  };
}
