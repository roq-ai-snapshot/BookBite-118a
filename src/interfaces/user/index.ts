import { EmployeeInterface } from 'interfaces/employee';
import { OrderInterface } from 'interfaces/order';
import { ReservationInterface } from 'interfaces/reservation';
import { RestaurantInterface } from 'interfaces/restaurant';

export interface UserInterface {
  id?: string;
  roq_user_id: string;
  tenant_id: string;
  employee?: EmployeeInterface[];
  order?: OrderInterface[];
  reservation?: ReservationInterface[];
  restaurant?: RestaurantInterface[];

  _count?: {
    employee?: number;
    order?: number;
    reservation?: number;
    restaurant?: number;
  };
}
