import * as yup from 'yup';
import { employeeValidationSchema } from 'validationSchema/employees';
import { inventoryValidationSchema } from 'validationSchema/inventories';
import { menuItemValidationSchema } from 'validationSchema/menu-items';
import { orderValidationSchema } from 'validationSchema/orders';
import { promotionValidationSchema } from 'validationSchema/promotions';
import { reservationValidationSchema } from 'validationSchema/reservations';

export const restaurantValidationSchema = yup.object().shape({
  name: yup.string().required(),
  owner_id: yup.string().nullable().required(),
  employee: yup.array().of(employeeValidationSchema),
  inventory: yup.array().of(inventoryValidationSchema),
  menu_item: yup.array().of(menuItemValidationSchema),
  order: yup.array().of(orderValidationSchema),
  promotion: yup.array().of(promotionValidationSchema),
  reservation: yup.array().of(reservationValidationSchema),
});
