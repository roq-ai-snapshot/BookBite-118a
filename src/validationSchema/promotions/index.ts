import * as yup from 'yup';

export const promotionValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  discount_amount: yup.number().integer().required(),
  restaurant_id: yup.string().nullable().required(),
});
